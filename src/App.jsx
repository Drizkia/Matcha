import React, { useState } from 'react';
import PageLanding from './page/PageLanding';
import PageLogin from './page/PageLogin';
import PageDashboard from './page/PageDashboard';

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  // Logic to navigate between pages
  const goToLogin = () => setCurrentPage('login');
  const goToDashboard = () => setCurrentPage('dashboard');
  const goToLanding = () => setCurrentPage('landing');

  // Simple Router
  switch (currentPage) {
    case 'landing':
      return <PageLanding onNext={goToLogin} />;
    case 'login':
      return <PageLogin onNext={goToDashboard} />;
    case 'dashboard':
      // Currently PageDashboard is empty, we will render a placeholder
      return (
        <div className="min-h-screen bg-[#d2f3db] flex flex-col items-center justify-center p-6 text-center">
          <h1 className="text-3xl font-bold text-green-700 mb-4">Dashboard (Under Construction)</h1>
          <p className="text-gray-600 mb-8 max-w-md">
            The user data and CV have been processed. This is where the personalized learning path and AI mentor chat will be shown.
          </p>
          <button 
            onClick={goToLanding}
            className="px-6 py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition shadow-lg"
          >
            Back to Home
          </button>
        </div>
      );
    default:
      return <PageLanding onNext={goToLogin} />;
  }
}