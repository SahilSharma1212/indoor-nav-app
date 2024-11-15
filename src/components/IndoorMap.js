
import React, { useRef, useEffect } from 'react';
import maplibre from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import MarketImage from '../images/Market.png'; // Import the image directly
import OptionsBar from './OptionsBar';

const IndoorMap = () => {
  const mapContainerRef = useRef(null);
  const [map, setMap] = React.useState(null);

  useEffect(() => {
    const initMap = new maplibre.Map({
      container: mapContainerRef.current,
      style: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json', // Dark theme style URL
      center: [81.33809683483972, 21.168272666136193],  
      zoom: 19,
      pitch: 60, // Tilt the map for a 3D perspective
    });

    initMap.on('load', () => {
      initMap.addSource('custom-overlay', {
        type: 'image',
        url: MarketImage,
        coordinates: [
          [81.33793397413338, 21.168573595120176], // Top left
          [81.33875306508675, 21.168576228983486], // Top right
          [81.33878130960238, 21.167319870862208], // Bottom right
          [81.337871836199, 21.167359379141693],   // Bottom left 
        ],
      });

      initMap.addLayer({
        id: 'overlay-layer',
        source: 'custom-overlay',
        type: 'raster',
        paint: { 
          'raster-opacity':1,
        },
      });

      setMap(initMap);
    });

    return () => initMap.remove();
  }, []);

  useEffect(() => {
    if (!map) return;
  
    const geoSuccess = (position) => {
      const { latitude, longitude } = position.coords;
  
      if (map.getLayer('user-location')) {
        map.removeLayer('user-location');
        map.removeSource('user-location');
      }
  
      map.addSource('user-location', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [longitude, latitude],
              },
            },
          ],
        },
      });
  
      map.addLayer({
        id: 'user-location',
        type: 'circle',
        source: 'user-location',
        paint: {
          'circle-radius': 8,
          'circle-color': '#007cbf',
          'circle-stroke-width': 2,
          'circle-stroke-color': '#fff',
        },
      });
  
      map.flyTo({ center: [longitude, latitude], essential: true });
    };
  
    const geoError = () => {
      alert("Unable to retrieve your location");
    };
  
    // Options for high accuracy
    const options = {
      enableHighAccuracy: true, // Enable high accuracy
    };
  
    const watchId = navigator.geolocation.watchPosition(geoSuccess, geoError, options);
  
    return () => {
      navigator.geolocation.clearWatch(watchId);
      if (map.getLayer('user-location')) {
        map.removeLayer('user-location');
        map.removeSource('user-location');
      }
    };
  }, [map]);
  

  return (
    <div style={{display:'flex',paddingLeft:'10px', width: '100%', height: '100vh',justifyContent:'space-evenly',alignItems:'center'}}>
<div
      ref={mapContainerRef}
      style={{ width: '70%', height: '90%',borderRadius:'20px',
        boxShadow:' 0px 0px 20px rgba(47, 105, 222, 0.3)'}}
    >
      
</div>
<div style={{width:'25%'}}>
<OptionsBar/>
</div>
</div>
  );
};

export default IndoorMap;
