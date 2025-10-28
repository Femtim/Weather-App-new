import { useState } from 'react';

function HourlyForecast({ forecast, units }) {
    const [selectedDayIndex, setSelectedDayIndex] = useState(0);
    const tempUnit = units === 'metric' ? '°C' : '°F';

    const getWeatherIcon = (iconCode) => {
        return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    };

    const getTime = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            hour12: true 
        });
    };

    // Group forecast by day
    const groupedByDay = {};
    forecast.list.forEach(item => {
        const date = item.dt_txt.split(' ')[0];
        if (!groupedByDay[date]) {
            groupedByDay[date] = [];
        }
        groupedByDay[date].push(item);
    });

    // Ensure we have exactly 7 days
    const days = Object.keys(groupedByDay).slice(0, 7);
    const getDayName = (date, index) => {
        if (index === 0) return 'Today';
        if (index === 1) return 'Tomorrow';
        return new Date(date).toLocaleDateString('en-US', { weekday: 'long' });
    };

    const displayHours = groupedByDay[days[selectedDayIndex]] || [];

    return (
        <div className="hourly-forecast-container">
            <div className="hourly-header">
                <h2>Hourly Forecast</h2>
                <select 
                    name="days" 
                    id="days" 
                    className="day-select"
                    value={selectedDayIndex}
                    onChange={(e) => setSelectedDayIndex(Number(e.target.value))}
                >
                    {days.map((day, index) => (
                        <option key={index} value={index}>
                            {getDayName(day, index)}
                        </option>
                    ))}
                </select>
            </div>

            <div className="hourly-list">
                {displayHours.map((hour, index) => (
                    <div key={index} className="hourly-item">
                        <div className="hourly-time">
                            <img 
                                src={getWeatherIcon(hour.weather[0].icon)} 
                                alt={hour.weather[0].description}
                            />
                            <h1>{getTime(hour.dt_txt)}</h1>
                        </div>
                        <h2 className="hourly-temp">
                            {Math.round(hour.main.temp)}{tempUnit}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HourlyForecast;