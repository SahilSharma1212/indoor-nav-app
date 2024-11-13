import React from 'react';
import '../styles/OptionsBar.css';

const OptionsBar = () => {
    return (
        <div className='option-main-container'>


            <div className='info-container'>
                <span className="info-label">Currently Viewing:</span> <span style={{color:'black'}}>Market</span>
            </div>


            <div className='info-container'>
                <span className="info-label">Floor:</span>
                <select style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    border: 'none',
                    color: 'black',
                    padding: '0.3rem 0.6rem',
                    borderRadius: '5px',
                    fontSize: '0.9rem',
                    width:'50%',
                    textAlign:'center'
                }}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
            </div>


            <div className='info-container'>
                <span className="info-label">Campus:</span>
                <span style={{fontWeight:'bold'}}>BIT DURG</span>
            </div>


            <div className='info-container'>
                <span className="info-label">Building:</span>
                <select style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    border: 'none',
                    color: 'black',
                    padding: '0.3rem 0.6rem',
                    borderRadius: '5px',
                    fontSize: '0.9rem',
                    width:'60%'
                }}>
                    <option value="-admin-block">Admin Block</option>
                    <option value="-cse-block">Cse Block</option>
                    <option value="-mechanical-block">Mechanical Block</option>
                </select>
            </div>


            <div className='info-container'>
                <input
                    type="text"
                    placeholder="Search"
                    style={{
                        border:'0.5px solid black',
                        padding: '0.3rem',
                        width: '100%',
                        borderRadius: '5px',
                        border: 'none',
                        fontSize: '0.9rem',
                    }}
                />
            </div>


        </div>
    );
}

export default OptionsBar;
