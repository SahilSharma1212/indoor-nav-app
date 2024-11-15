import React, { useState } from 'react';
import '../styles/Sidebar.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

const Sidebar = () => {

  
  return (
    <div className='main-container visible'>

      <div style={{
         fontFamily: 'cursive', 
         fontWeight: 'bold',
          textAlign:'center',
        }}
      >
        
        <div style={{fontSize:'1.6rem', fontWeight:'lighter',color:'white'}}>IndoorNavApp</div>

        
      </div>

      
      <div className='top-options'>

      <Link to='/'>
        <div className='button-container'>
          <button className='sidebar-options'>
            <i class="fa-solid fa-eye"></i>&nbsp;&nbsp;&nbsp;Map View
          </button>
        </div>
      </Link>


        <Link to='/allmaps'>
          <div className='button-container'>
            <button className='sidebar-options'>
              <i class="fa-solid fa-map"></i>&nbsp;&nbsp;&nbsp;All maps
            </button>
          </div>
        </Link>


        <Link to='/bookmarks'>
        <div className='button-container'>
          <button className='sidebar-options'>
            <i class="fa-solid fa-bookmark"></i>&nbsp;&nbsp;&nbsp;Bookmarks
          </button>
        </div>
        </Link>


      </div>

      <div className='bottom-options'>
        <Link to='/settings'>
        <div className='button-container'>
          <button className='sidebar-options'>
          <i class="fa-solid fa-gear"></i>&nbsp;&nbsp;&nbsp;Settings
          </button>
        </div>
        </Link>


        <Link to='/profile'>
        <div className='button-container'>
          <button className='sidebar-options'>
            <i class="fa-solid fa-user"></i>&nbsp;&nbsp;&nbsp;Profile
          </button></div>
        </Link>

      </div>

    </div>
  );
};

export default Sidebar;