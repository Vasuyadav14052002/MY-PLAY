import React, { useState } from 'react';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import ProfilePage from './components/profilePageComponents/ProfilePage';
import MainContent from './components/MainContent';
import TournamentsPage from './components/TournamentPage/Tournament';

const App = () => {
  const [currentPage, setCurrentPage] = useState('');

  const renderPage = () => {
    switch (currentPage) {
      case 'profile':
        return <ProfilePage />;
      case 'tournament':
        return <TournamentsPage />;
      default:
        return <MainContent />;
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar onSelectPage={setCurrentPage} />
      <div className="flex flex-col flex-1">
        <Topbar currentPage={currentPage} />
        <div className="flex-1 overflow-auto">
          {renderPage()}
        </div>
      </div>
    </div>
  );
};

export default App;
