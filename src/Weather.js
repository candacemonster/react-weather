import React from "react";

import './Weather.css';


export default function Weather() {
    return(
    <div className="Weather">
        <div className="row">
        <h2>Las Vegas</h2>
        <h1>Sunny</h1>
        <img src="dinosaur.jpg" alt="Sunny" />
        </div>
        
        <div className="row">
            <div className="col-6">
                <h3>
                    <span className="temperature">20</span>
                    <span className="unit">°F</span>
                </h3>
                <p>Low: 17° / High: 20°</p>
            </div>
            <div className="col-6">
                <h3>DETAILS</h3>
                <ul>
                    <li>Feels Like: 20°</li>
                    <li>Humidity: 24%</li>
                    <li>Wind: 5 mph</li>
                    <li>Visbility: 10 miles</li>
                </ul>
            </div>
        </div>

        <div className="row">
        <div className="col-6">
                <h3>UV</h3>
                <p>...</p>
            </div>
            <div className="col-6">
                <h3>AQI</h3>
                <p>good</p>
            </div>
        </div>

        <div className="row">
            <h3>Monday 08:00</h3>
        </div>

        <form>
            <div className="row">
                <div className="col-9">
                <input type="search" 
                placeholder="City name..."
                className="form-control"
                autoFocus="on"/>
                </div>

                <div className="col-3">
                <input type="submit" 
                value="Search" 
                className="btn btn-primary"/>
                </div>
            </div>
        </form>

    </div>
    ) 
}