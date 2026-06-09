import React, { useState } from 'react';
import PageLanding from './page/PageLanding';
import PageLogin from './page/PageLogin';
import PageDashboard from './page/PageDashboard';
import PageCareerPath from './page/PageCareerPath';
import PageResource from './page/PageResource';
import PageDocument from './page/PageDocument';
import PageSetting from './page/PageSetting';

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [selectedTopic, setSelectedTopic] = useState('');

  // Logic to navigate between pages
  const goToLogin = () => setCurrentPage('login');
  const goToDashboard = () => setCurrentPage('dashboard');
  const goToLanding = () => setCurrentPage('landing');
  
  const handleNavigate = (page, topic = '') => {
    setSelectedTopic(topic);
    setCurrentPage(page);
  };

  // Simple Router
  switch (currentPage) {
    case 'landing':
      return <PageLanding onNext={goToLogin} />;
    case 'login':
      return <PageLogin onNext={goToDashboard} />;
    case 'dashboard':
      return <PageDashboard onNavigate={handleNavigate} onLogout={goToLanding} />;
    case 'career-path':
      return <PageCareerPath onNavigate={handleNavigate} onLogout={goToLanding} />;
    case 'resource':
      return <PageResource onNavigate={handleNavigate} onLogout={goToLanding} initialTopic={selectedTopic} />;
    case 'document':
      return <PageDocument onNavigate={handleNavigate} onLogout={goToLanding} />;
    case 'setting':
      return <PageSetting onNavigate={handleNavigate} onLogout={goToLanding} />;
    default:
      return <PageLanding onNext={goToLogin} />;
  }
}