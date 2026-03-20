import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getQuestions } from '../data/index';

const TOTAL_QUESTIONS = 20;
const TOTAL_TIME = 1200; // 20 minutes

function getTier(score) {
  if (score >= 17) return { tier: 'AI Champion', tier_code: 'champion', action: 'Hire / Promote', color: 'bg-green-100 text-green-800' };
  if (score >= 13) return { tier: 'AI Ready', tier_code: 'ready', action: 'Strong hire', color: 'bg-purple-100 text-purple-800' };
  if (score >= 9) return { tier: 'AI Curious', tier_code: 'curious', action: 'Development plan needed', color: 'bg-amber-100 text-amber-800' };
  if (score >= 5) return { tier: 'AI Hesitant', tier_code: 'hesitant', action: 'Do not hire / PIP', color: 'bg-orange-100 text-orange-800' };
  return { tier: 'AI Resistant', tier_code: 'resistant', action: 'Reject / Transition', color: 'bg-red-100 text-red-800' };
}

// Answer index 4 = "I don't know / I want to learn"
const SKIP_ANSWER = 4;

const PILLAR_NAMES = ['P1: Tool Awareness', 'P2: Prompt Craft', 'P3: Workflow Integration', 'P4: Critical Thinking', 'P5: Adaptability', 'P6: AI-First Mindset'];

export default function TestPage() {
  const navigate = useNavigate();
  const timerRef = useRef(null);
  const [session, setSession] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState(new Array(TOTAL_QUESTIONS).fill(-1));
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [submitted, setSubmitted] = useState(false);
  const [showSuggestionBox, setShowSuggestionBox] = useState(false);
  const [suggestion, setSuggestion] = useState('');
  const [pendingPayload, setPendingPayload] = useState(null);

  // Load session
  useEffect(() => {
    const stored = localStorage.getItem('ai_test_session');
    if (!stored) { navigate('/'); return; }
    const s = JSON.parse(stored);
    setSession(s);
    setAnswers(s.answers || new Array(TOTAL_QUESTIONS).fill(-1));
    setCurrentQ(s.currentQuestion || 0);

    const qs = getQuestions(s.category);
    setQuestions(qs);

    // Calculate remaining time
    const elapsed = Math.floor((Date.now() - s.startTime) / 1000);
    const remaining = Math.max(0, TOTAL_TIME - elapsed);
    setTimeLeft(remaining);
    if (remaining <= 0) handleSubmit(s, qs, s.answers, true);
  }, []);

  // Timer
  useEffect(() => {
    if (submitted || !session) return;
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [session, submitted]);

  // Auto-submit at 0
  useEffect(() => {
    if (timeLeft === 0 && !submitted && session && questions.length) {
      handleSubmit(session, questions, answers, true);
    }
  }, [timeLeft, submitted]);

  // Save to localStorage on change
  useEffect(() => {
    if (!session) return;
    const stored = JSON.parse(localStorage.getItem('ai_test_session') || '{}');
    stored.answers = answers;
    stored.currentQuestion = currentQ;
    localStorage.setItem('ai_test_session', JSON.stringify(stored));
  }, [answers, currentQ]);

  const selectAnswer = (idx) => {
    const newAnswers = [...answers];
    newAnswers[currentQ] = idx;
    setAnswers(newAnswers);
  };

  const buildPayload = useCallback((sess, qs, ans) => {
    const s = sess || session;
    const q = qs || questions;
    const a = ans || answers;

    let score = 0;
    let wantToLearnCount = 0;
    const pillarScores = [0, 0, 0, 0, 0, 0];
    const details = q.map((question, i) => {
      const userAns = a[i];
      const isSkip = userAns === SKIP_ANSWER;
      const isCorrect = !isSkip && userAns === question.correct;
      if (isSkip) wantToLearnCount++;
      if (isCorrect) {
        score++;
        const pIdx = parseInt(question.pillar.replace('P', '')) - 1;
        pillarScores[pIdx]++;
      }
      return {
        question: question.question,
        pillar: question.pillar,
        pillarName: question.pillarName,
        options: question.options,
        userAnswer: userAns,
        correctAnswer: question.correct,
        isCorrect,
        isSkip,
        explanation: question.explanation
      };
    });

    const elapsed = Math.floor((Date.now() - s.startTime) / 1000);
    const timeTaken = Math.min(elapsed, TOTAL_TIME);
    const percentage = Math.round((score / TOTAL_QUESTIONS) * 100);
    const tierInfo = getTier(score);

    return {
      name: s.name,
      email: s.email,
      role: s.role,
      type: s.type,
      category: s.category,
      score,
      percentage,
      ...tierInfo,
      time_taken: timeTaken,
      pillar_scores: pillarScores,
      answers: a,
      details,
      want_to_learn: wantToLearnCount
    };
  }, [session, questions, answers]);

  const submitToServer = useCallback(async (payload) => {
    try {
      await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    } catch (e) {
      console.error('Submit failed:', e);
    }
    localStorage.removeItem('ai_test_session');
    navigate('/thanks');
  }, [navigate]);

  const handleSubmit = useCallback(async (sess, qs, ans, isAutoSubmit = false) => {
    if (submitted) return;
    clearInterval(timerRef.current);

    const s = sess || session;
    const payload = buildPayload(s, qs, ans);

    // For employees (not auto-submit from timer), show suggestion box first
    if (s.type === 'team' && !isAutoSubmit && !showSuggestionBox) {
      setShowSuggestionBox(true);
      setPendingPayload(payload);
      return;
    }

    setSubmitted(true);
    await submitToServer(payload);
  }, [session, questions, answers, submitted, navigate, buildPayload, submitToServer, showSuggestionBox]);

  // Final submit with suggestion (employee flow)
  const handleSuggestionSubmit = useCallback(async () => {
    if (!pendingPayload) return;
    setSubmitted(true);
    const payload = { ...pendingPayload, suggestions: suggestion.trim() || '' };
    await submitToServer(payload);
  }, [pendingPayload, suggestion, submitToServer]);

  if (!session || !questions.length) return null;

  // Suggestion box for employees (after Q20, before final submit)
  if (showSuggestionBox) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5.002 5.002 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">One Last Thing!</h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Do you have any suggestions for AI tools or workflows that could help us work better at HuptechWeb?
            </p>
          </div>

          <textarea
            value={suggestion}
            onChange={e => setSuggestion(e.target.value)}
            placeholder="E.g., &quot;I think we should try using Cursor for faster coding&quot; or &quot;AI-powered QA testing tools would save us time&quot;..."
            className="w-full h-32 px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand resize-none mb-4"
            autoFocus
          />

          <p className="text-xs text-gray-400 mb-5 text-center">This is optional — skip if you don't have any suggestions right now.</p>

          <div className="flex gap-3">
            <button
              onClick={handleSuggestionSubmit}
              className="flex-1 py-3 text-sm font-medium text-gray-600 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
            >
              Skip & Submit
            </button>
            <button
              onClick={handleSuggestionSubmit}
              className="flex-1 py-3 text-sm font-semibold text-white bg-green-600 rounded-xl hover:bg-green-700 transition-colors"
            >
              Submit with Suggestion
            </button>
          </div>
        </div>
      </div>
    );
  }

  const q = questions[currentQ];
  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  const timerWarning = timeLeft <= 120;
  const timerCaution = timeLeft <= 300 && timeLeft > 120;
  const answeredCount = answers.filter(a => a >= 0).length;
  const progress = Math.round((answeredCount / TOTAL_QUESTIONS) * 100);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Sticky header */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-brand rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">H</span>
            </div>
            <span className="font-semibold text-sm text-gray-900 hidden sm:inline">HuptechWeb</span>
          </div>
          <div className={`font-mono text-lg font-bold px-4 py-1.5 rounded-xl ${timerWarning ? 'bg-red-100 text-red-700 pulse-red' : timerCaution ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-700'}`}>
            {String(mins).padStart(2, '0')}:{String(secs).padStart(2, '0')}
          </div>
        </div>
        {/* Progress bar */}
        <div className="h-1 bg-gray-100">
          <div className="h-full bg-brand transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Question dots */}
      <div className="max-w-4xl mx-auto w-full px-4 pt-4">
        <div className="flex flex-wrap gap-1.5 justify-center mb-6">
          {Array.from({ length: TOTAL_QUESTIONS }, (_, i) => {
            const isSkip = answers[i] === SKIP_ANSWER;
            return (
              <button
                key={i}
                onClick={() => setCurrentQ(i)}
                className={`w-8 h-8 rounded-full text-xs font-medium transition-all ${
                  i === currentQ
                    ? 'bg-brand text-white ring-2 ring-brand/30'
                    : isSkip
                    ? 'bg-amber-100 text-amber-600'
                    : answers[i] >= 0
                    ? 'bg-brand/20 text-brand'
                    : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                }`}
              >
                {i + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Question area */}
      <div className="flex-1 max-w-4xl mx-auto w-full px-4 pb-8">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
          {/* Question header */}
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-brand text-white text-xs font-bold px-3 py-1 rounded-full">Q{currentQ + 1}/{TOTAL_QUESTIONS}</span>
            <span className="bg-brand/10 text-brand text-xs font-medium px-3 py-1 rounded-full">{q.pillarName}</span>
          </div>

          {/* Question text */}
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 leading-relaxed">{q.question}</h2>

          {/* Options A-D */}
          <div className="space-y-3">
            {q.options.map((option, idx) => {
              const letter = String.fromCharCode(65 + idx);
              const selected = answers[currentQ] === idx;
              return (
                <button
                  key={idx}
                  onClick={() => selectAnswer(idx)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                    selected
                      ? 'border-brand bg-brand/5 ring-1 ring-brand/20'
                      : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                      selected ? 'bg-brand text-white' : 'bg-gray-100 text-gray-500'
                    }`}>
                      {letter}
                    </span>
                    <span className={`text-sm leading-relaxed ${selected ? 'text-gray-900 font-medium' : 'text-gray-700'}`}>
                      {option}
                    </span>
                  </div>
                </button>
              );
            })}

            {/* Option E — I want to learn */}
            <button
              onClick={() => selectAnswer(SKIP_ANSWER)}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                answers[currentQ] === SKIP_ANSWER
                  ? 'border-amber-400 bg-amber-50 ring-1 ring-amber-200'
                  : 'border-dashed border-gray-200 hover:border-amber-300 hover:bg-amber-50/50'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                  answers[currentQ] === SKIP_ANSWER ? 'bg-amber-400 text-white' : 'bg-gray-100 text-gray-400'
                }`}>
                  ?
                </span>
                <span className={`text-sm leading-relaxed ${answers[currentQ] === SKIP_ANSWER ? 'text-amber-800 font-medium' : 'text-gray-500'}`}>
                  I'm not sure — I'd like to learn about this
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          <button
            onClick={() => setCurrentQ(Math.max(0, currentQ - 1))}
            disabled={currentQ === 0}
            className="px-6 py-2.5 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            ← Back
          </button>

          {currentQ === TOTAL_QUESTIONS - 1 ? (
            <button
              onClick={() => handleSubmit()}
              className="px-8 py-2.5 text-sm font-semibold text-white bg-green-600 rounded-xl hover:bg-green-700 transition-all"
            >
              Submit ✓
            </button>
          ) : (
            <button
              onClick={() => setCurrentQ(Math.min(TOTAL_QUESTIONS - 1, currentQ + 1))}
              className="px-6 py-2.5 text-sm font-medium text-white bg-brand rounded-xl hover:bg-brand-dark transition-all"
            >
              Next →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
