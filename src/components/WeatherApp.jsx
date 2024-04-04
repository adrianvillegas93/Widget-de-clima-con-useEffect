import { useState, useEffect } from "react";
import WeatherForm from "./WeatherForm";
import WeatherMainInfo from "./WeatherMainInfo";

import styles from './WeatherApp.module.css';
import Loading from "./Loading";

function WheatherApp() {
  const urlBase = "http://api.weatherapi.com/v1/current.json?aqi=no";
  const API_KEY = "6d8a04c15dc142a3be8221809243103";

  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo()
  }, []);

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ""}`;
  }, [weather]);


  async function loadInfo(city = "london") {
    try {
      const request = await fetch(`${urlBase}&key=${API_KEY}&q=${city}`);

      const json = await request.json();

      setTimeout(() => {
        setWeather(json);
      }, 2000);
      
      console.log(json);
    } catch (error) {}
  }

  function handleOnChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  return (
    <div className={styles.weatherContainer}>
      <WeatherForm onChangeCity={handleOnChangeCity} />
      {weather ? <WeatherMainInfo weather={weather}/> : <Loading />}
      
    </div>
  );
}

export default WheatherApp;
