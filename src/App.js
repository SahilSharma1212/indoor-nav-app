import React, { useContext } from 'react';
import IndoorMap from './components/IndoorMap';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import Bookmarks from './components/Bookmarks';
import Settings from './components/Settings';
import Allmaps from './components/Allmaps';
import MenuButton from './components/elements/MenuButton';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalContext } from './GlobalContext';

function App() {
  const { isSidebarVisible } = useContext(GlobalContext);

  return (
    <BrowserRouter>
      <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
        {/* Conditionally render the Sidebar */}
        {isSidebarVisible && <Sidebar />}
        
        {/* MenuButton will access toggle and position from context */}
        <MenuButton />

        <Routes>
          <Route path="/" element={<IndoorMap />} />
          <Route path="/allmaps" element={<Allmaps />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
