import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TIER_COLORS = {
  champion: 'bg-green-100 text-green-800',
  ready: 'bg-purple-100 text-purple-800',
  curious: 'bg-amber-100 text-amber-800',
  hesitant: 'bg-orange-100 text-orange-800',
  resistant: 'bg-red-100 text-red-800'
};

const PILLAR_NAMES = ['P1: Tool Awareness', 'P2: Prompt Craft', 'P3: Workflow Integration', 'P4: Critical Thinking', 'P5: Adaptability', 'P6: AI-First Mindset'];
const PILLAR_MAX = [3, 4, 4, 3, 3, 3];
const TOTAL_QUESTIONS = 20;

export default function AdminPage() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [authed, setAuthed] = useState(false);
  const [pwError, setPwError] = useState('');
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState('all');
  const [expanded, setExpanded] = useState(null);

  const fetchResults = async () => {
    try {
      const res = await fetch('/api/results', { headers: { 'x-admin-password': 'huptech2026' } });
      if (res.ok) setResults(await res.json());
    } catch (e) { console.error(e); }
  };

  const handleLogin = () => {
    if (password === 'huptech2026') {
      setAuthed(true);
      setPwError('');
      fetchResults();
    } else {
      setPwError('Incorrect password');
    }
  };

  const handleExport = () => {
    fetch('/api/results/export', { headers: { 'x-admin-password': 'huptech2026' } })
      .then(r => r.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'ai-readiness-results.csv';
        a.click();
        URL.revokeObjectURL(url);
      });
  };

  const handleClear = async () => {
    if (!window.confirm('Are you sure you want to delete ALL assessment data? This cannot be undone.')) return;
    try {
      await fetch('/api/results', { method: 'DELETE', headers: { 'x-admin-password': 'huptech2026' } });
      setResults([]);
    } catch (e) { console.error(e); }
  };

  const filtered = results.filter(r => {
    if (filter === 'candidate') return r.type === 'candidate';
    if (filter === 'team') return r.type === 'team';
    return true;
  });

  const totalAssessed = filtered.length;
  const avgScore = totalAssessed ? Math.round(filtered.reduce((s, r) => s + r.score, 0) / totalAssessed) : 0;
  const champions = filtered.filter(r => r.score >= 17).length;
  const atRisk = filtered.filter(r => r.score <= 8).length;

  // Weakest pillar
  let weakestPillar = '-';
  if (totalAssessed) {
    const pillarTotals = [0, 0, 0, 0, 0, 0];
    filtered.forEach(r => r.pillar_scores.forEach((s, i) => pillarTotals[i] += s));
    const pillarAvgs = pillarTotals.map((t, i) => t / (totalAssessed * PILLAR_MAX[i]));
    const minIdx = pillarAvgs.indexOf(Math.min(...pillarAvgs));
    weakestPillar = PILLAR_NAMES[minIdx];
  }

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}m ${s}s`;
  };

  // Password modal
  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <div className="text-center mb-6">
            <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-gray-900">Admin Access</h2>
            <p className="text-sm text-gray-500">Enter password to view dashboard</p>
          </div>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleLogin()}
            placeholder="Password"
            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand mb-3"
            autoFocus
          />
          {pwError && <p className="text-red-500 text-xs mb-3">{pwError}</p>}
          <button onClick={handleLogin} className="w-full py-2.5 bg-brand text-white font-semibold rounded-xl hover:bg-brand-dark transition-colors text-sm">
            Unlock Dashboard
          </button>
          <button onClick={() => navigate('/')} className="w-full mt-3 text-xs text-gray-400 hover:text-gray-600">← Back to Assessment</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <div>
              <h1 className="font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-xs text-gray-500">AI Readiness Assessment Results</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={handleExport} className="px-4 py-2 text-sm font-medium text-brand bg-brand/10 rounded-xl hover:bg-brand/20 transition-colors">Export CSV</button>
            <button onClick={handleClear} className="px-4 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-xl hover:bg-red-100 transition-colors">Clear All</button>
            <button onClick={() => { setAuthed(false); setPassword(''); setResults([]); }} className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors">Logout</button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Filter tabs */}
        <div className="flex gap-2 mb-6">
          {[['all', 'All'], ['candidate', 'New Candidates'], ['team', 'Current Employees']].map(([val, label]) => (
            <button
              key={val}
              onClick={() => setFilter(val)}
              className={`px-4 py-2 text-sm font-medium rounded-xl transition-all ${filter === val ? 'bg-brand text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
          {[
            ['Total Assessed', totalAssessed],
            ['Avg Score', `${avgScore}/20`],
            ['Champions (17+)', champions],
            ['At Risk (≤8)', atRisk],
            ['Weakest Pillar', weakestPillar]
          ].map(([label, val]) => (
            <div key={label} className="bg-white rounded-xl border border-gray-200 p-4">
              <div className="text-xs text-gray-500 mb-1">{label}</div>
              <div className="text-lg font-bold text-gray-900 truncate">{val}</div>
            </div>
          ))}
        </div>

        {/* Org pillar scores */}
        {totalAssessed > 0 && (
          <div className="bg-white rounded-xl border border-gray-200 p-5 mb-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Organization Pillar Scores</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {PILLAR_NAMES.map((name, i) => {
                const avg = filtered.reduce((s, r) => s + r.pillar_scores[i], 0) / totalAssessed;
                const pct = Math.round((avg / PILLAR_MAX[i]) * 100);
                return (
                  <div key={name} className="flex items-center gap-3">
                    <div className="flex-1">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-600">{name}</span>
                        <span className="font-medium text-gray-900">{pct}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-brand rounded-full transition-all" style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Results table */}
        {filtered.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-200 p-10 text-center">
            <p className="text-gray-400">No assessments yet</p>
          </div>
        ) : (
          <div className="space-y-2">
            {filtered.map((r) => {
              const wantToLearn = r.want_to_learn || r.details.filter(d => d.isSkip).length;
              const wrongCount = TOTAL_QUESTIONS - r.score - wantToLearn;

              return (
                <div key={r.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  {/* Row */}
                  <button
                    onClick={() => setExpanded(expanded === r.id ? null : r.id)}
                    className="w-full px-5 py-4 flex items-center gap-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-900 text-sm truncate">{r.name}</div>
                      <div className="text-xs text-gray-500">{r.role}</div>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${r.type === 'candidate' ? 'bg-blue-50 text-blue-700' : 'bg-gray-100 text-gray-600'}`}>
                      {r.type === 'candidate' ? 'Candidate' : 'Employee'}
                    </span>
                    <div className="text-right">
                      <div className="font-bold text-sm text-gray-900">{r.score}/20 <span className="text-gray-400 font-normal">({r.percentage}%)</span></div>
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full font-medium whitespace-nowrap ${TIER_COLORS[r.tier_code]}`}>
                      {r.tier}
                    </span>
                    {wantToLearn > 0 && (
                      <span className="text-xs px-2 py-1 rounded-full font-medium bg-amber-50 text-amber-700 whitespace-nowrap hidden sm:inline-flex" title="Wants to learn">
                        {wantToLearn} to learn
                      </span>
                    )}
                    <div className="text-xs text-gray-400 hidden sm:block w-16 text-right">{formatTime(r.time_taken)}</div>
                    <div className="text-xs text-gray-400 hidden sm:block w-20 text-right">{new Date(r.created_at).toLocaleDateString()}</div>
                    <svg className={`w-4 h-4 text-gray-400 transition-transform ${expanded === r.id ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Expanded detail */}
                  {expanded === r.id && (
                    <div className="border-t border-gray-100 px-5 py-5 bg-gray-50">
                      {/* Summary stats */}
                      <div className="flex flex-wrap gap-3 mb-4">
                        <div className="text-xs text-gray-500">
                          <span className="font-medium">Action:</span> {r.action}
                        </div>
                        <div className="text-xs text-gray-500">
                          <span className="font-medium">Email:</span> {r.email || 'N/A'}
                        </div>
                        <div className="text-xs text-gray-500">
                          <span className="font-medium">Category:</span> {r.category}
                        </div>
                      </div>

                      {/* Score breakdown bar */}
                      <div className="flex gap-3 mb-5 text-xs">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded font-medium">{r.score} Correct</span>
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded font-medium">{wrongCount} Wrong</span>
                        {wantToLearn > 0 && (
                          <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded font-medium">{wantToLearn} Want to Learn</span>
                        )}
                        {wantToLearn > 0 && (
                          <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded font-medium">
                            Growth Potential: {wantToLearn >= 5 ? 'High' : wantToLearn >= 3 ? 'Moderate' : 'Low'}
                          </span>
                        )}
                      </div>

                      {/* Pillar breakdown */}
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Pillar Breakdown</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                        {PILLAR_NAMES.map((name, i) => {
                          const pct = Math.round((r.pillar_scores[i] / PILLAR_MAX[i]) * 100);
                          return (
                            <div key={name}>
                              <div className="flex justify-between text-xs mb-1">
                                <span className="text-gray-600">{name}</span>
                                <span className="font-medium">{r.pillar_scores[i]}/{PILLAR_MAX[i]}</span>
                              </div>
                              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div className={`h-full rounded-full ${pct >= 75 ? 'bg-green-500' : pct >= 50 ? 'bg-brand' : pct >= 25 ? 'bg-amber-500' : 'bg-red-500'}`} style={{ width: `${pct}%` }} />
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Question details */}
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Question Details</h4>
                      <div className="space-y-3 max-h-[500px] overflow-y-auto">
                        {r.details.map((d, i) => {
                          const isSkip = d.isSkip || d.userAnswer === 4;
                          const bgClass = d.isCorrect
                            ? 'bg-green-50 border-green-200'
                            : isSkip
                            ? 'bg-amber-50 border-amber-200'
                            : 'bg-red-50 border-red-200';
                          const badgeClass = d.isCorrect
                            ? 'bg-green-200 text-green-800'
                            : isSkip
                            ? 'bg-amber-200 text-amber-800'
                            : 'bg-red-200 text-red-800';

                          return (
                            <div key={i} className={`p-3 rounded-lg border ${bgClass}`}>
                              <div className="flex items-start gap-2">
                                <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${badgeClass}`}>
                                  Q{i + 1}
                                </span>
                                <div className="flex-1 min-w-0">
                                  <p className="text-xs font-medium text-gray-900 mb-1">{d.question}</p>
                                  <p className="text-xs text-gray-600">
                                    <span className="font-medium">Their answer:</span>{' '}
                                    {isSkip
                                      ? <span className="text-amber-700 italic">Wants to learn about this</span>
                                      : d.userAnswer >= 0 && d.userAnswer < d.options.length
                                      ? d.options[d.userAnswer]
                                      : 'Not answered'
                                    }
                                  </p>
                                  {!d.isCorrect && (
                                    <p className="text-xs text-green-700 mt-1">
                                      <span className="font-medium">Correct:</span> {d.options[d.correctAnswer]}
                                    </p>
                                  )}
                                  <p className="text-xs text-gray-500 mt-1 italic">{d.explanation}</p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
