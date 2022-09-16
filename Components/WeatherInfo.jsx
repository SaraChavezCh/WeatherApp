import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import changeBackgrounds from "../src/assets/helpers/changeBackgrounds";

const WeatherInfo = () => {
  const [weatherInfo, setWeatherInfo] = useState({});
  
  const description = weatherInfo.weather?.[0].description;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);

    function success(pos) {
      const crd = pos.coords;

      console.log("Your current position is:");
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=cfdb57f1a6b28d16ff8428fe7d570419`
        )
        .then((res) => {
          setWeatherInfo(res.data);
        });
    }
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
  }, []);
  //Change Backgrounds
  useEffect( () => {        //Clouds
    changeBackgrounds(weatherInfo.weather?.[0].main);
  },[weatherInfo])
 console.log(weatherInfo);

// Change all temperatures
  const kelvin = weatherInfo.main?.temp;
  const fahrenheit =Math.ceil((kelvin - 273.15) * 1.8 + 32);
  const celsius =Math.ceil(kelvin - 273.15);

  const [isCelsius, setIsCelsius] = useState(true);

  const kelvinMin = weatherInfo.main?.temp_min
  const fahrenheitMin = Math.ceil(((kelvinMin - 273.15) * 1.8 + 32));
  const celsiusMin = Math.ceil((kelvinMin - 273.15));
  
  const kelvinMax = weatherInfo.main?.temp_max
  const fahrenheitMax = Math.ceil((kelvinMax - 273.15) * 1.8 + 32);
  const celsiusMax = Math.ceil(kelvinMax - 273.15);

  const kelvinHum = weatherInfo.main?.humidity
  const fahrenheitHum = Math.ceil((kelvinHum - 273.15) * 1.8 + 32);
  const celsiusHum = Math.ceil(kelvinHum - 273.15);
  


  return (
    <div className="container" id="bg">
      {/* Temperature */}
      <h1 className="temperature">
        {isCelsius ? `${celsius}${'°'}` : `${fahrenheit}${'°'}`}
      </h1>
      

      <div className="imgContainer">
      <img
        src={`http://openweathermap.org/img/wn/${weatherInfo.weather?.[0].icon}@2x.png`}
        alt="image weather"/>
      </div>
        
      <strong className="description">{description}</strong>
     
      <h2 className="country">
      <i className="fa-solid fa-location-dot" id="location"></i> {weatherInfo.name} {weatherInfo.sys?.country}
      </h2>

      <div className=" otherInfo">
      <small className="minMax">
        <i className="fa-solid fa-temperature-arrow-down" id="min"></i>{" "}
        {isCelsius ? celsiusMin: fahrenheitMin}°
      </small>{" "}

      <small className="minMax">
        <i className="fa-solid fa-temperature-arrow-up" id="max"></i>{" "}
        {isCelsius ? celsiusMax: fahrenheitMax}°
      </small>

      <small className="hum">
        <i className="fa-solid fa-droplet" id="hum"></i>{" "}
        {isCelsius ? celsiusHum: fahrenheitHum}°
      </small>
      </div>

      <button onClick={() => setIsCelsius(!isCelsius)}>
        {isCelsius ? "Fahrenheit" : "Celsius"}{" "}
      </button>

    </div>
  );
};

export default WeatherInfo;
