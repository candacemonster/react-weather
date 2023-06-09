import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";
import UvIndex from "./UvIndex";
import AirQuality from "./AirQuality";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      feels: Math.round(response.data.main.feels_like),
      high: Math.round(response.data.main.temp_max),
      low: Math.round(response.data.main.temp_min),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "898368c8b82c44ea298ea746725fa93a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="form-inline">
        <form onSubmit={handleSubmit}>
          <div className="row pb-5">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3 button">
              <input
                type="submit"
                value="Search"
                className="btn w-100"
              />
            </div>
          </div>
        </form>
        </div>

        <WeatherInfo data={weatherData} />

        <div className="row mb-4 p-3">
            <div className="col-6">
                <h3>UV</h3>
                <UvIndex coordinates={weatherData.coordinates}/>
            </div>
            <div className="col-6">
                <h3>AQI</h3>
                <AirQuality coordinates={weatherData.coordinates}/>
            </div>
        </div>

                
        <div className="row mb-4 p-4">
            <h3><FormattedDate date={weatherData.date}/></h3>
        </div>
        
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
