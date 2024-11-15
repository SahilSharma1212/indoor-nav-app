// MenuButton.js
import React, { useContext } from 'react';
import { GlobalContext } from '../../GlobalContext';

const MenuButton = () => {
  const { toggleSidebar, menuButtonLeft , menuButtonColor} = useContext(GlobalContext);

  return (
    <button
      style={{
        width: '50px',
        padding: '4px',
        // background: 'linear-gradient(#e5f8e7, #ffffff)',
        backgroundColor:menuButtonColor,
        height: '40px',
        position: 'absolute',
        top: '7%',
        left: menuButtonLeft, // Use left value from context
        zIndex: '8',
        boxShadow: '0px 0px 15px #00000015',
        color:'white',
      }}
      onClick={toggleSidebar}
    >
      <i className="fa-solid fa-bars"></i>
    </button>
  );
};

export default MenuButton;
