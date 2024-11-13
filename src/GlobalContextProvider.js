// GlobalContextProvider.js
import React, { useState, useCallback } from 'react';
import { GlobalContext } from './GlobalContext';




const GlobalContextProvider = ({ children }) => {



  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [menuButtonLeft, setMenuButtonLeft] = useState('22%');
  const [allMapsVisibilityDivSize,setAllMapsVisibilityDivSize] = useState('80%')




  const toggleSidebar = useCallback(() => {

      // Toggle sidebar visibility and update MenuButton position
    setIsSidebarVisible((prevVisible) => !prevVisible);
    setMenuButtonLeft((prevVisible) => (isSidebarVisible ? '2%' : '22%'));

      //allmaps div container size according to visibility
    setAllMapsVisibilityDivSize((prevDivSize)=>(isSidebarVisible ? '95%' : '80%'))


  }, [isSidebarVisible]);






  
  return (
    <GlobalContext.Provider value={{ isSidebarVisible, menuButtonLeft, toggleSidebar , allMapsVisibilityDivSize }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
