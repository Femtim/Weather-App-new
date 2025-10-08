import sunny from '../assets/images/icon-sunny.webp';
import rain from '../assets/images/icon-rain.webp';
import cloud from '../assets/images/icon-partly-cloudy.webp';
import storm from '../assets/images/icon-storm.webp';
import snow from '../assets/images/icon-snow.webp';

function DailyForecast() {
  return (
    <>
    <h1 style={{ margin: 0, fontSize: '22px', marginTop: '25px', justifyContent: 'left', textAlign: 'left' }}>Daily Forecast</h1>
    <div style={{ display: 'flex', borderRadius: '10px', width: '300px',  gap: '10px',  justifyContent: 'space-between' }}>
        <div style={{ backgroundColor: '#27283dff', padding: '20px', borderRadius: '10px', width: '100%', height: '100%', marginTop: '20px' }}>
            <h1 style={{ margin: 0,fontSize: '15px' }}>Tues</h1>
            <img src={rain} alt="Weather Icon" style={{ width: '50px', height: '50px' }}/>
            <div className="temperature" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                <h3>68°</h3>
                <h3>59°</h3>
            </div>
        </div>
        <div style={{ backgroundColor: '#27283dff', padding: '20px', borderRadius: '10px', width: '100%', height: '100%', marginTop: '20px' }}>
            <h1 style={{ margin: 0,fontSize: '15px' }}>Wed</h1>
            <img src={cloud} alt="Weather Icon" style={{ width: '50px', height: '50px' }}/>
            <div className="temperature" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                <h3>70°</h3>
                <h3>62°</h3>
            </div>
        </div>
        <div style={{ backgroundColor: '#27283dff', padding: '20px', borderRadius: '10px', width: '100%', height: '100%', marginTop: '20px' }}>
            <h1 style={{ margin: 0,fontSize: '15px' }}>Thu</h1>
            <img src={sunny} alt="Weather Icon" style={{ width: '50px', height: '50px' }}/>
            <div className="temperature" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                <h3>75°</h3>
                <h3>57°</h3>
            </div>
        </div>
        <div style={{ backgroundColor: '#27283dff', padding: '20px', borderRadius: '10px', width: '100%', height: '100%', marginTop: '20px' }}>
            <h1 style={{ margin: 0, fontSize: '15px' }}>Fri</h1>
            <img src={cloud} alt="Weather Icon" style={{ width: '50px', height: '50px' }}/>
            <div className="temperature" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                <h3>77°</h3>
                <h3>54°</h3>
            </div>
        </div>
        <div style={{ backgroundColor: '#27283dff', padding: '20px', borderRadius: '10px', width: '100%', height: '100%', marginTop: '20px' }}>
            <h1 style={{ margin: 0, fontSize: '15px' }}>Sat</h1>
            <img src={storm} alt="Weather Icon" style={{ width: '50px', height: '50px' }}/>
            <div className="temperature" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                <h3>70°</h3>
                <h3>59°</h3>
            </div>
        </div>
        <div style={{ backgroundColor: '#27283dff', padding: '20px', borderRadius: '10px', width: '100%', height: '100%', marginTop: '20px' }}>
            <h1 style={{ margin: 0, fontSize: '15px' }}>Sun</h1>
            <img src={rain} alt="Weather Icon" style={{ width: '50px', height: '50px' }}/>
            <div className="temperature" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                <h3>68°</h3>
                <h3>57°</h3>
            </div>
        </div>
        <div style={{ backgroundColor: '#27283dff', padding: '20px', borderRadius: '10px', width: '100%', height: '100%', marginTop: '20px' }}>
            <h1 style={{ margin: 0, fontSize: '15px' }}>Mon</h1>
            <img src={snow} alt="Weather Icon" style={{ width: '50px', height: '50px' }} />
            <div className="temperature" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', }}>
                <h3>77°</h3>
                <h3>61°</h3>
            </div>
        </div>
    </div>
    </>
  );
}
export default DailyForecast;
