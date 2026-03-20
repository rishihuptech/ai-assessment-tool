import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ThanksPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-200 p-10 text-center">
        {/* Green checkmark */}
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">Assessment Complete</h1>
        <p className="text-gray-500 text-sm mb-6">Your responses have been recorded securely.</p>

        <div className="bg-gray-50 rounded-xl p-4 mb-8 text-sm text-gray-600">
          Results are reviewed by leadership. Contact PM or HR with questions.
        </div>

        <button
          onClick={() => {
            localStorage.removeItem('ai_test_session');
            navigate('/');
          }}
          className="w-full py-3 bg-brand text-white font-semibold rounded-xl hover:bg-brand-dark transition-colors text-sm mb-4"
        >
          Take Another Assessment
        </button>

        <button
          onClick={() => navigate('/admin')}
          className="text-xs text-gray-400 hover:text-brand transition-colors"
        >
          Admin? Open Dashboard
        </button>
      </div>
    </div>
  );
}
