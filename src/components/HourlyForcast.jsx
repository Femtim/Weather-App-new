import sunny from '../assets/images/icon-sunny.webp';
import rain from '../assets/images/icon-rain.webp';
import cloud from '../assets/images/icon-partly-cloudy.webp';
import storm from '../assets/images/icon-storm.webp';
import snow from '../assets/images/icon-snow.webp';





function HourlyForecast() {
    return (
        <>
            <div style={{ backgroundColor: '#27283dff', padding: '20px', borderRadius: '10px', width: '300px', height: '100%', marginTop: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white', borderRadius: '10px', marginTop: '5px', gap: '20px' }}>
                    <h2 style={{ margin: 0, fontSize: '15px' }}>Hourly Forecast</h2>
                    <select name="days" id="days" style={{ display: 'flex', gap: '10px', backgroundColor: '#2e2d51ff', color: 'white', padding: '7px 15px', borderRadius: '5px', border: 'none' }}>
                        <option value="monday">Monday</option>
                        <option value="tuesday">Tuesday</option>
                        <option value="wednesday">Wednesday</option>
                        <option value="thursday">Thursday</option>
                        <option value="friday">Friday</option>
                        <option value="saturday">Saturday</option>
                        <option value="sunday">Sunday</option>
                    </select>
                </div>

                <div>
                    <div style={{ display: 'flex', gap: '10px', marginTop: '10px', justifyContent: 'space-between', backgroundColor: '#2e2d51ff', borderRadius: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', padding: '10px', }}>
                            <img src={rain} alt="Rain Icon" style={{ width: '40px', height: '40px' }} />
                            <h1 style={{ margin: 0, fontSize: '15px' }}>3 PM</h1>
                        </div>
                        <h2 style={{ margin: 0, fontSize: '15px', marginTop: '10px', padding: '10px' }}>63°</h2>
                    </div>
                    <div style={{ display: 'flex', gap: '10px', marginTop: '10px', justifyContent: 'space-between', backgroundColor: '#2e2d51ff', borderRadius: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', padding: '10px', }}>
                            <img src={storm} alt="Storm Icon" style={{ width: '40px', height: '40px' }} />
                            <h1 style={{ margin: 0, fontSize: '15px' }}>3 PM</h1>
                        </div>
                        <h2 style={{ margin: 0, fontSize: '15px', marginTop: '10px', padding: '10px' }}>62°</h2>
                    </div>
                    <div style={{ display: 'flex', gap: '10px', marginTop: '10px', justifyContent: 'space-between', backgroundColor: '#2e2d51ff', borderRadius: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', padding: '10px', }}>
                            <img src={snow} alt="Snow Icon" style={{ width: '40px', height: '40px' }} />
                            <h1 style={{ margin: 0, fontSize: '15px' }}>3 PM</h1>
                        </div>
                        <h2 style={{ margin: 0, fontSize: '15px', marginTop: '10px', padding: '10px' }}>60°</h2>
                    </div>
                    <div style={{ display: 'flex', gap: '10px', marginTop: '10px', justifyContent: 'space-between', backgroundColor: '#2e2d51ff', borderRadius: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', padding: '10px', }}>
                            <img src={sunny} alt="Sunny Icon" style={{ width: '40px', height: '40px' }} />
                            <h1 style={{ margin: 0, fontSize: '15px' }}>3 PM</h1>
                        </div>
                        <h2 style={{ margin: 0, fontSize: '15px', marginTop: '10px', padding: '10px' }}>69°</h2>
                    </div>
                    <div style={{ display: 'flex', gap: '10px', marginTop: '10px', justifyContent: 'space-between', backgroundColor: '#2e2d51ff', borderRadius: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', padding: '10px', }}>
                            <img src={cloud} alt="Rain Icon" style={{ width: '40px', height: '40px' }} />
                            <h1 style={{ margin: 0, fontSize: '15px' }}>3 PM</h1>
                        </div>
                        <h2 style={{ margin: 0, fontSize: '15px', marginTop: '10px', padding: '10px' }}>66°</h2>
                    </div>
                    <div style={{ display: 'flex', gap: '10px', marginTop: '10px', justifyContent: 'space-between', backgroundColor: '#2e2d51ff', borderRadius: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', padding: '10px', }}>
                            <img src={rain} alt="Rain Icon" style={{ width: '40px', height: '40px' }} />
                            <h1 style={{ margin: 0, fontSize: '15px' }}>3 PM</h1>
                        </div>
                        <h2 style={{ margin: 0, fontSize: '15px', marginTop: '10px', padding: '10px' }}>63°</h2>
                    </div>
                    <div style={{ display: 'flex', gap: '10px', marginTop: '10px', justifyContent: 'space-between', backgroundColor: '#2e2d51ff', borderRadius: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', padding: '10px', }}>
                            <img src={cloud} alt="Cloud Icon" style={{ width: '40px', height: '40px' }} />
                            <h1 style={{ margin: 0, fontSize: '15px' }}>3 PM</h1>
                        </div>
                        <h2 style={{ margin: 0, fontSize: '15px', marginTop: '10px', padding: '10px' }}>65°</h2>
                    </div>
                </div>
            </div>
        </>
    );
}
export default HourlyForecast;
