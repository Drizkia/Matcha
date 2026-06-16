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
  const [user, setUser] = useState(null);

  React.useEffect(() => {
    const savedUser = localStorage.getItem('matcha_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Logic to navigate between pages
  const goToLogin = () => setCurrentPage('login');
  const goToDashboard = () => setCurrentPage('dashboard');
  const goToLanding = () => setCurrentPage('landing');
  
  const handleNavigate = (page, topic = '') => {
    setSelectedTopic(topic);
    setCurrentPage(page);
  };

  const handleLoginSubmit = (userData) => {
    setUser(userData);
    localStorage.setItem('matcha_user', JSON.stringify(userData));
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('matcha_user');
    setCurrentPage('landing');
  };

  const renderProtectedRoute = (Component, props) => {
    if (!user) {
      return <PageLogin onNext={handleLoginSubmit} />;
    }
    return <Component {...props} user={user} />;
  };

  // Simple Router
  switch (currentPage) {
    case 'landing':
      return <PageLanding onNext={goToLogin} />;
    case 'login':
      return <PageLogin onNext={handleLoginSubmit} />;
    case 'dashboard':
      return renderProtectedRoute(PageDashboard, { onNavigate: handleNavigate, onLogout: handleLogout });
    case 'career-path':
      return renderProtectedRoute(PageCareerPath, { onNavigate: handleNavigate, onLogout: handleLogout });
    case 'resource':
      return renderProtectedRoute(PageResource, { onNavigate: handleNavigate, onLogout: handleLogout, initialTopic: selectedTopic });
    case 'document':
      return renderProtectedRoute(PageDocument, { onNavigate: handleNavigate, onLogout: handleLogout });
    case 'setting':
      return renderProtectedRoute(PageSetting, { onNavigate: handleNavigate, onLogout: handleLogout });
    default:
      return <PageLanding onNext={goToLogin} />;
  }
}