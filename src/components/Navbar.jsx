import logo from '../assets/images/logo.svg';

function Navbar({ units, onUnitChange }) {
    const handleUnitChange = (e) => {
        const value = e.target.value;
        if (value === 'celsius') {
            onUnitChange('metric');
        } else if (value === 'fahrenheit') {
            onUnitChange('imperial');
        }
    };

    return (
        <nav>
            <div className="navbar">
                <div>
                    <img src={logo} alt="Weather App Logo" />
                </div>
                <select 
                    name="unit" 
                    id="unit" 
                    className="unit-select"
                    onChange={handleUnitChange}
                    value={units === 'metric' ? 'celsius' : 'fahrenheit'}
                >
                    <option value="">Units</option>
                    <optgroup label="Temperature">
                        <option value="celsius">Celsius(°C)</option>
                        <option value="fahrenheit">Fahrenheit(°F)</option>
                    </optgroup>
                </select>
            </div>
        </nav>
    );
}

export default Navbar;