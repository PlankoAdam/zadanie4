import { useState, useEffect } from "react";
import WeatherWidget from "./weatherWidget";

export default function PlaceInfo(props) {
  if (!props.placeData) return null;
  if (!props.placeData.display_name) {
    return null;
  } else {
    const [countryData, setCountryData] = useState();
    const [weather, setWeather] = useState({});
    const [currencies, setCurrencies] = useState("");

    useEffect(() => {
      const parts = props.placeData.display_name.split(",");
      const countryName = parts[parts.length - 1].trim();
      getCountryData(countryName);
    }, [props.placeData]);

    const getCountryData = async (countryName) => {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`
      );
      const country = (await res.json())[0];
      setCountryData(country);
      for (const key in country.currencies) {
        setCurrencies(country.currencies[key].name);
      }
      getWeatherData(props.placeData.lat, props.placeData.lon);
    };

    const getWeatherData = async (lat, lon) => {
      const apiKey = "36645be79c3c4629ae6173234241704";
      const res = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?q=${lat},${lon}&days=3&key=${apiKey}`
      );
      const weather = await res.json();
      setWeather(weather);
      // console.log(lat);
      console.log(weather);
    };

    return (
      <div className="flex flex-col items-center">
        <div className="flex flex-row items-center mb-16">
          <img
            src={
              countryData
                ? `https://countryflagsapi.netlify.app/flag/${countryData.cca2}.svg`
                : ""
            }
            className="w-48 flex-1 me-6"
          ></img>
          <div className="grid grid-cols-[6rem_1fr] gap-2 w-full flex-1 text-xl min-w-fit">
            <p className="text-end font-light">Country:</p>
            <p className="font-bold">
              {countryData ? countryData.name.common : ""}
            </p>
            <p className="text-end font-light">Capital:</p>
            <p className="font-bold">
              {countryData ? countryData.capital[0] : ""}
            </p>
            <p className="text-end font-light">Currency:</p>
            <p className="font-bold">{currencies}</p>
          </div>
        </div>
        <WeatherWidget weather={weather}></WeatherWidget>
      </div>
    );
  }
}
