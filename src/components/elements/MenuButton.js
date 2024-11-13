// MenuButton.js
import React, { useContext } from 'react';
import { GlobalContext } from '../../GlobalContext';

const MenuButton = () => {
  const { toggleSidebar, menuButtonLeft } = useContext(GlobalContext);

  return (
    <button
      style={{
        border: '1px solid #93e59b',
        width: '50px',
        padding: '4px',
        background: 'linear-gradient(#e5f8e7, #ffffff)',
        height: '40px',
        position: 'absolute',
        top: '7%',
        left: menuButtonLeft, // Use left value from context
        zIndex: '8',
      }}
      onClick={toggleSidebar}
    >
      <i className="fa-solid fa-bars"></i>
    </button>
  );
};

export default MenuButton;
