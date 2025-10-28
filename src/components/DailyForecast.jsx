function DailyForecast({ forecast, units }) {
    const tempUnit = units === 'metric' ? '°C' : '°F';

    const getDayName = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { weekday: 'short' });
    };

    const getWeatherIcon = (iconCode) => {
        return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    };

    // Group forecast by day and get min/max temps
    const dailyForecasts = [];
    const grouped = {};

    forecast.list.forEach(item => {
        const date = item.dt_txt.split(' ')[0];
        if (!grouped[date]) {
            grouped[date] = {
                temps: [],
                icon: item.weather[0].icon,
                description: item.weather[0].description,
                date: date
            };
        }
        grouped[date].temps.push(item.main.temp);
    });

    Object.values(grouped).forEach(day => {
        dailyForecasts.push({
            date: day.date,
            maxTemp: Math.max(...day.temps),
            minTemp: Math.min(...day.temps),
            icon: day.icon,
            description: day.description
        });
    });

    return (
        <div className="daily-forecast-section">
            <h1 className="daily-forecast-title">Daily Forecast</h1>
            <div className="daily-forecast-grid">
                {dailyForecasts.slice(0, 7).map((day, index) => (
                    <div key={index} className="forecast-card">
                        <h1>{getDayName(day.date)}</h1>
                        <img 
                            src={getWeatherIcon(day.icon)} 
                            alt={day.description}
                        />
                        <div className="forecast-temps">
                            <h3>{Math.round(day.maxTemp)}°</h3>
                            <h3>{Math.round(day.minTemp)}°</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DailyForecast;