import React, {useState, useEffect} from "react";
import axios from "axios";

export default function UvIndex(props) {
  let [loaded, setLoaded] = useState(false);
  let [uvData, setUvData] = useState(null);
  let [coordinates, setCoordinates] = useState(props.coordinates);

  function handleResponse(response) {
    setUvData(response.data.current.uvi);
    setLoaded(true);
  }

  useEffect(() => {
    setLoaded(false);
    setCoordinates(props.coordinates);
  }, [props.coordinates]);

  if (loaded) {
    let uvDescription = "";

    if (uvData >= 0 && uvData <= 2) {
      uvDescription = "Low";
    } else if (uvData >= 3 && uvData <= 5) {
      uvDescription = "Moderate";
    } else if (uvData >= 6 && uvData <= 7) {
      uvDescription = "High";
    } else if (uvData >= 8 && uvData <= 10) {
      uvDescription = "Very High";
    } else {
      uvDescription = "Extreme";
    }

    return (
      <div className="UvIndex">{uvDescription}</div>
    );
  } else {
    let apiKey = "898368c8b82c44ea298ea746725fa93a";
    let longitude = coordinates.lon;
    let latitude = coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly&appid=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
