import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useNavigate } from 'react-router-dom';
import WelcomePage, { LandingPage } from './pages/WelcomePage';
import TestPage from './pages/TestPage';
import ThanksPage from './pages/ThanksPage';
import AdminPage from './pages/AdminPage';

function AdminShortcut() {
  const navigate = useNavigate();
  useEffect(() => {
    const handler = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        navigate('/admin');
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [navigate]);
  return null;
}

export default function App() {
  return (
    <HashRouter>
      <AdminShortcut />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/candidate" element={<WelcomePage type="candidate" />} />
        <Route path="/employee" element={<WelcomePage type="employee" />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/thanks" element={<ThanksPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </HashRouter>
  );
}
