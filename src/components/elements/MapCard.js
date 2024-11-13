import React from 'react'
import '../../styles/Mapcard.css'

const MapCard = () => {
    return (
        <div className="cardcontainer">
            <img src="https://via.placeholder.com/150" alt="Sample" />
            <div className="mapcard-body">
                <h5 className="card-title">Bit Durg</h5>
                <button ><i class="fa-regular fa-bookmark"></i></button>
            </div>
        </div>
    )
}

export default MapCard
