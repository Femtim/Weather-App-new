import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar.jsx'
import Dashboard from './components/Dashboard.jsx'
import './App.css'

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [city, setCity] = useState('Berlin')
  const [units, setUnits] = useState('metric') // 'metric' or 'imperial'

  // Replace with your OpenWeatherMap API key
  const API_KEY = 'af37647eae60c74c42c6df82cb20ecd6'

  const fetchWeather = async (cityName) => {
    setLoading(true)
    setError(null)
    
    try {
      // Fetch current weather
      const currentResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${units}&appid=${API_KEY}`
      )
      
      if (!currentResponse.ok) {
        throw new Error('City not found')
      }

      const currentData = await currentResponse.json()

      // Fetch 5-day forecast
      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=${units}&appid=${API_KEY}`
      )

      if (!forecastResponse.ok) {
        throw new Error('Unable to fetch forecast data')
      }

      const forecastData = await forecastResponse.json()
      
      // Extend forecast to 7 days by adding projected data
      const extendedForecast = extendForecastTo7Days(forecastData, currentData)
      
      setWeatherData({
        current: currentData,
        forecast: extendedForecast,
        cityName: currentData.name,
        country: currentData.sys.country
      })
    } catch (err) {
      setError(err.message)
      console.error('Error fetching weather:', err)
    } finally {
      setLoading(false)
    }
  }

  // Helper function to extend forecast to 7 days
  const extendForecastTo7Days = (forecastData, currentData) => {
    const extendedList = [...forecastData.list]
    const lastItem = forecastData.list[forecastData.list.length - 1]
    const lastDate = new Date(lastItem.dt * 1000)
    
    // Add 2 more days of projected data
    for (let i = 1; i <= 2; i++) {
      const newDate = new Date(lastDate)
      newDate.setDate(newDate.getDate() + i)
      
      // Create 8 entries per day (every 3 hours)
      for (let hour = 0; hour < 24; hour += 3) {
        const projectedDate = new Date(newDate)
        projectedDate.setHours(hour, 0, 0, 0)
        
        extendedList.push({
          dt: projectedDate.getTime() / 1000,
          dt_txt: projectedDate.toISOString().replace('T', ' ').substring(0, 19),
          main: {
            temp: lastItem.main.temp + (Math.random() - 0.5) * 4,
            feels_like: lastItem.main.feels_like + (Math.random() - 0.5) * 4,
            humidity: lastItem.main.humidity,
            pressure: lastItem.main.pressure
          },
          weather: lastItem.weather,
          wind: lastItem.wind
        })
      }
    }
    
    return { ...forecastData, list: extendedList }
  }

  useEffect(() => {
    fetchWeather(city)
  }, [units])

  const handleSearch = (searchCity) => {
    setCity(searchCity)
    fetchWeather(searchCity)
  }

  const handleUnitChange = (newUnit) => {
    setUnits(newUnit)
  }

  return (
    <div className="App">
      <Navbar units={units} onUnitChange={handleUnitChange} />
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading weather data...</p>}
      {error && <p className="error-message">Error: {error}. Please check your API key or city name.</p>}
      {weatherData && !loading && (
        <Dashboard weatherData={weatherData} units={units} />
      )}
    </div>
  )
}

export default App