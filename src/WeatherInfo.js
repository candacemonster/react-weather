import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import AirQuality from "./AirQuality";
import UvIndex from "./UvIndex";


import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";


  export default function WeatherInfo(props) {
    return (
      <div className="WeatherInfo">
        <div className="row m-2">
            <h2>{props.data.city}</h2>
            <h1>{props.data.description}</h1>
            <div>
                <WeatherIcon code={props.data.icon} size={52} />
            </div>
        </div>
        
        <div className="row m-3">
            <div className="col-6">
                <h3>
                <WeatherTemperature fahrenheit={props.data.temperature} />
                </h3>
                <p><FaChevronUp style={{color: "#222222",}} />{" "}{props.data.high}°{" "}|{" "}<FaChevronDown style={{color: "#222222",}} />{" "}{props.data.low}°</p>
            </div>
            
            <div className="col-6">
                <ul>
                    <li>Feels Like: {props.data.feels}°F</li>
                    <li>Humidity: {props.data.humidity}%</li>
                    <li>Wind: {props.data.wind} mph</li>
                </ul>
            </div>
        </div>
        
        <div className="row m-3">
            <div className="col-6">
                <h3>UV</h3>
                <UvIndex />
            </div>
            <div className="col-6">
                <h3>AQI</h3>
                <AirQuality />
            </div>
        </div>
        
        <div className="row m-3">
            <h3><FormattedDate date={props.data.date}/></h3>
        </div>
    
</div>
) 
}