import React, {useState, useEffect} from "react";
import axios from "axios";

export default function AirQuality(props) {
    let [loaded, setLoaded] = useState(false);
    let [airQuality, setAirQuality] = useState(null);
    let [coordinates, setCoordinates] = useState(props.coordinates);

    function handleResponse(response) {
        let aqi = response.data.list[0].main.aqi;
        setAirQuality(getAirQuality(aqi));
        setLoaded(true);
    }

    function getAirQuality(aqi) {
        switch (aqi) {
            case 1:
                return "Good";
            case 2:
                return "Fair";
            case 3:
                return "Moderate";
            case 4:
                return "Poor";
            case 5:
                return "Very Poor";
            default:
                return null;
        }
    }

    useEffect(() => {
        setLoaded(false);
        setCoordinates(props.coordinates);
    }, [props.coordinates]);

    if (loaded) {
        return (
            <div className="AirQuality">{airQuality}</div>
            );
    } else {
        let apiKey = "898368c8b82c44ea298ea746725fa93a";
        let longitude = coordinates.lon;
        let latitude = coordinates.lat;
        let apiUrl = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
        
        axios.get(apiUrl).then(handleResponse);
        return null;
    }    
}
