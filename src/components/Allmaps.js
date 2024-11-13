import React, { useContext } from 'react';
import '../styles/Allmaps.css'
import MapCard from './elements/MapCard';
import { GlobalContext } from '../GlobalContext';

const Allmaps = () => {

  const {allMapsVisibilityDivSize} = useContext(GlobalContext) 
  return (
    <div className='allmap-main-container' >

      <div className='allmap-container' style={{width:allMapsVisibilityDivSize}}>

          <MapCard/>
          <MapCard/>

      </div>

    </div>
  );
};

export default Allmaps;
