import React from 'react';
import '../styles/OptionsBar.css';

const OptionsBar = () => {
    return (
        <div className='option-main-container'>


            <div className='info-container'>
                <span className="info-label">Currently Viewing:</span> <span style={{color:'white'}}>Market</span>
            </div>


            <div className='info-container'>
                <span className="info-label">Floor:</span>
                <select style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: 'white',
                    padding: '0.3rem 0.6rem',
                    borderRadius: '5px',
                    fontSize: '0.9rem',
                    width:'50%',
                    textAlign:'center'
                }}>
                    <option value="1" style={{color:'white' , backgroundColor:'rgb(0, 5, 29)'}}>1</option>
                    <option value="2" style={{color:'white' , backgroundColor:'rgb(0, 5, 29)'}}>2</option>
                </select>
            </div>


            <div className='info-container'>
                <span className="info-label">Campus:</span>
                <span style={{fontWeight:'bold',color:'white'}}>BIT DURG</span>
            </div>


            <div className='info-container'>
                <span className="info-label">Building:</span>
                <select style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: 'white',
                    padding: '0.3rem 0.6rem',
                    borderRadius: '5px',
                    fontSize: '0.9rem',
                    width:'60%'
                    
                }}>
                    <option value="-admin-block" style={{color:'white' , backgroundColor:'rgb(0, 5, 29)'}}>Admin Block</option>
                    <option value="-cse-block" style={{color:'white' , backgroundColor:'rgb(0, 5, 29)'}}>Cse Block</option>
                    <option value="-mechanical-block" style={{color:'white' , backgroundColor:'rgb(0, 5, 29)'}}>Mechanical Block</option>
                </select>
            </div>


            <div className='info-container'>
                <input
                    type="text"
                    placeholder="Search"
                    style={{
                        border:'0.5px solid white',
                        padding: '0.3rem',
                        width: '100%',
                        borderRadius: '5px',
                        border: 'none',
                        fontSize: '0.9rem',
                        color:'white',
                        backgroundColor:'transparent'
                    }}
                />
            </div>


        </div>
    );
}

export default OptionsBar;
