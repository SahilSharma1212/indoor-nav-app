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
import './styles/App.css'


function App() {
  const { isSidebarVisible } = useContext(GlobalContext);

  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="sidebar-container">
          {isSidebarVisible && <Sidebar />}
          <MenuButton />
        </div>

        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                  <IndoorMap />
              }
            />
            <Route path="/allmaps" element={<Allmaps />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
