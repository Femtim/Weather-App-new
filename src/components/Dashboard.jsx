import React from 'react';
import DailyForecast from './DailyForecast.jsx';
import HourlyForecast from './HourlyForecast.jsx';

function Dashboard({ weatherData, units }) {
    const current = weatherData.current;
    const tempUnit = units === 'metric' ? '°C' : '°F';
    const speedUnit = units === 'metric' ? 'km/h' : 'mph';

    // Get weather icon
    const getWeatherIcon = (iconCode) => {
        return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    };

    // Format date
    const formatDate = (timestamp) => {
        const date = new Date(timestamp * 1000);
        return date.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    };

    return (
        <div className="dashboard">
            <div>
                <div className="dashboard1">
                    <div className="location-info">
                        <h1 className="location">
                            {weatherData.cityName}, {weatherData.country}
                        </h1>
                        <h2 className="date">{formatDate(current.dt)}</h2>
                    </div>
                    <div className="weather-display">
                        <img 
                            src={getWeatherIcon(current.weather[0].icon)} 
                            alt={current.weather[0].description}
                        />
                        <h1 className="temperature">
                            {Math.round(current.main.temp)}{tempUnit}
                        </h1>
                    </div>
                </div>
                
                <div className="dashboard2">
                    <div className="stat-card">
                        <h1>Feels Like</h1>
                        <h2>{Math.round(current.main.feels_like)}{tempUnit}</h2>
                    </div>
                    <div className="stat-card">
                        <h1>Humidity</h1>
                        <h2>{current.main.humidity}%</h2>
                    </div>
                    <div className="stat-card">
                        <h1>Wind</h1>
                        <h2>{Math.round(current.wind.speed)} {speedUnit}</h2>
                    </div>
                    <div className="stat-card">
                        <h1>Pressure</h1>
                        <h2>{current.main.pressure} hPa</h2>
                    </div>
                </div>

                <DailyForecast forecast={weatherData.forecast} units={units} />
            </div>
            <HourlyForecast forecast={weatherData.forecast} units={units} />
        </div>
    );
}

export default Dashboard;