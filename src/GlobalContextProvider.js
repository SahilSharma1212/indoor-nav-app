// GlobalContextProvider.js
import React, { useState, useCallback } from 'react';
import { GlobalContext } from './GlobalContext';




const GlobalContextProvider = ({ children }) => {



  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [menuButtonLeft, setMenuButtonLeft] = useState('1%');
  const [menuButtonColor, setMenuButtonColor] = useState('transparent')
  const [allMapsVisibilityDivSize, setAllMapsVisibilityDivSize] = useState('80%')




  const toggleSidebar = useCallback(() => {

    // Toggle sidebar visibility and update MenuButton position
    setIsSidebarVisible((prevVisible) => !prevVisible);
    setMenuButtonLeft((prevVisible) => (isSidebarVisible ? '1%' : '1%'));
    setMenuButtonColor((prevColor) => (isSidebarVisible ? '#e5f8e7' : 'transparent'))

    //allmaps div container size according to visibility
    setAllMapsVisibilityDivSize((prevDivSize) => (isSidebarVisible ? '95%' : '80%'))


  }, [isSidebarVisible]);







  return (
    <GlobalContext.Provider value={{ isSidebarVisible, menuButtonLeft, toggleSidebar, allMapsVisibilityDivSize }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
