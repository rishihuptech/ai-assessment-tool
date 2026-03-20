import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ROLES = [
  'Shopify Developer',
  'WordPress Developer',
  'Front End Designer',
  'UI/UX Designer',
  'QA',
  'SEO',
  'Paid Ads',
  'Project Management',
  'HR'
];

const ROLE_CATEGORY_MAP = {
  'Shopify Developer': 'shopify_dev',
  'WordPress Developer': 'wordpress_dev',
  'Front End Designer': 'frontend_designer',
  'UI/UX Designer': 'uiux_designer',
  'QA': 'qa',
  'SEO': 'seo',
  'Paid Ads': 'paid_ads',
  'Project Management': 'pm',
  'HR': 'hr'
};

// Landing page — choose candidate or employee
export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-lg">
        {/* Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <span className="font-bold text-xl text-gray-900">HuptechWeb</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Readiness Assessment</h1>
          <p className="text-gray-500">20 role-specific questions. We test how you think about AI.</p>
        </div>

        {/* Info boxes */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[['20', 'Questions'], ['20', 'Minutes'], ['6', 'Pillars']].map(([num, label]) => (
            <div key={label} className="text-center py-3 bg-white rounded-xl border border-gray-200">
              <div className="text-xl font-bold text-brand">{num}</div>
              <div className="text-xs text-gray-500">{label}</div>
            </div>
          ))}
        </div>

        {/* Two path cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={() => navigate('/candidate')}
            className="bg-white rounded-2xl border-2 border-gray-200 p-6 text-left hover:border-brand hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand/10 transition-colors">
              <svg className="w-6 h-6 text-blue-600 group-hover:text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">New Candidate</h3>
            <p className="text-sm text-gray-500">Applying for a role at HuptechWeb</p>
          </button>

          <button
            onClick={() => navigate('/employee')}
            className="bg-white rounded-2xl border-2 border-gray-200 p-6 text-left hover:border-brand hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand/10 transition-colors">
              <svg className="w-6 h-6 text-green-600 group-hover:text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Current Employee</h3>
            <p className="text-sm text-gray-500">Team member at HuptechWeb</p>
          </button>
        </div>
      </div>
    </div>
  );
}

// Registration form page
export default function WelcomePage({ type }) {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const isCandidate = type === 'candidate';
  const label = isCandidate ? 'New Candidate' : 'Current Employee';

  const handleStart = () => {
    if (!name.trim()) return setError('Please enter your full name.');
    if (!email.trim()) return setError('Please enter your email address.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return setError('Please enter a valid email address.');
    if (!role) return setError('Please select your designation.');
    setError('');

    const category = ROLE_CATEGORY_MAP[role];

    const session = {
      name: name.trim(),
      email: email.trim(),
      role,
      type: isCandidate ? 'candidate' : 'team',
      category,
      startTime: Date.now(),
      answers: new Array(20).fill(-1),
      currentQuestion: 0
    };
    localStorage.setItem('ai_test_session', JSON.stringify(session));
    navigate('/test');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
        {/* Brand + back */}
        <div className="text-center mb-6">
          <button onClick={() => navigate('/')} className="text-xs text-gray-400 hover:text-brand mb-3 inline-block">← Back</button>
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span className="font-bold text-lg text-gray-900">HuptechWeb</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">AI Readiness Assessment</h1>
          <span className={`inline-block text-xs px-3 py-1 rounded-full font-medium mt-1 ${isCandidate ? 'bg-blue-50 text-blue-700' : 'bg-green-50 text-green-700'}`}>
            {label}
          </span>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Designation <span className="text-red-500">*</span></label>
            <select
              value={role}
              onChange={e => setRole(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand bg-white"
            >
              <option value="">Select your role</option>
              {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            onClick={handleStart}
            className="w-full py-3 bg-brand text-white font-semibold rounded-xl hover:bg-brand-dark transition-colors text-sm"
          >
            Start Assessment →
          </button>
        </div>
      </div>
    </div>
  );
}
