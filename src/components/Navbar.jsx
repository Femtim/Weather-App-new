import logo from '../assets/images/logo.svg';

function Navbar() {
    return (
        <nav>
            <div className="navbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={logo} alt="Weather App Logo" />
                </div>
                <select name="unit" id="unit" style={{ display: 'flex', gap: '10px',backgroundColor: '#212b34ff', color: 'white', padding: '7px 5px', borderRadius: '5px', border: 'none' }}>
                    <option value="">Units</option>
                    <optgroup label="Temperature">
                        <option value="celsius">Celsius(°C)</option>
                        <option value="fahrenheit">Fahrenheit(°F)</option>
                    </optgroup>
                    <optgroup label="Wind Speed">
                        <option value="metric">km/h</option>
                        <option value="imperial">mph</option>
                    </optgroup>
                    <optgroup label="Precipitation">
                        <option value="metric">Millimeters(mm)</option>
                    </optgroup>
                </select>
            </div>
        </nav>
    );
}

export default Navbar;