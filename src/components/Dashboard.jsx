import React from 'react';
import DailyForecast from './DailyForcast';
import HourlyForecast from './HourlyForcast';
import sunny from '../assets/images/icon-sunny.webp'; // add this at top of file

function Dashboard() {
    return (
        <>
            <div className="dashboard" style={{ display: 'flex', gap: '25px',  justifyContent: 'space-between', marginTop: '10px',  }}>
                <div>
                    <div  >
                        <div className="dashboard1" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', }}>
                            <div>
                                <h1 className='location' id='location' style={{ margin: 0, fontSize: '30px', }}>Berlin, Germany</h1>
                                <h2 className='date' id='date' style={{ margin: 0, fontSize: '15px', }}>Tuesday, August 10, 2023</h2>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '10px' }}>
                                <img src={sunny} alt="Weather Icon" style={{ width: '80px', height: '80px' }} />
                                <h1 className='temperature' id='temperature' style={{ margin: 0, fontSize: '50px', }}>68°</h1>
                            </div>
                        </div>
                        <div className="dashboard2" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'left', color: 'white', borderRadius: '10px', marginTop: '20px',  }}>
                            <div style={{ backgroundColor: '#27283dff', padding: '15px', paddingRight: '60px', borderRadius: '10px', textAlign: 'start', justifyContent: 'left', alignItems: 'left' }}>
                                <h1 className='FeelsLike' id='FeelsLike' style={{ margin: 0, fontSize: '15px', }}>Feels Like </h1>
                                <h2 style={{ margin: 0, fontSize: '18px',marginTop: '15px' }}>64°C</h2>
                            </div>
                            <div style={{ backgroundColor: '#27283dff', padding: '15px', paddingRight: '60px', borderRadius: '10px', textAlign: 'start', justifyContent: 'left', alignItems: 'left' }}>
                                <h1 className='Humidity' id='Humidity' style={{ margin: 0, fontSize: '15px', }}>Humidity</h1>
                                <h2 style={{ margin: 0, fontSize: '18px',marginTop: '15px' }}>46%</h2>
                            </div>
                            <div style={{ backgroundColor: '#27283dff', padding: '15px', paddingRight: '60px', borderRadius: '10px', textAlign: 'start', justifyContent: 'left', alignItems: 'left' }}>
                                <h1 className='Wind' id='Wind' style={{ margin: 0, fontSize: '15px', }}>Wind</h1>
                                <h2 style={{ margin: 0, fontSize: '18px',marginTop: '15px' }}>9 km/h</h2>
                            </div>
                            <div style={{ backgroundColor: '#27283dff', padding: '15px', paddingRight: '60px', borderRadius: '10px', textAlign: 'start', justifyContent: 'left', alignItems: 'left' }}>
                                <h1 className='Precipitation' id='Precipitation' style={{ margin: 0, fontSize: '15px', }}>Precipitation</h1>
                                <h2 style={{ margin: 0, fontSize: '18px',marginTop: '15px' }}>0 in</h2>
                            </div>
                        </div>

                    </div>
                    <DailyForecast />
                </div>
                <HourlyForecast />
            </div>
        </>
    );
}
export default Dashboard;
