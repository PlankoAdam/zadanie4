import { useEffect, useState } from "react";
import WeatherDay from "./weatherDay";

export default function WeatherWidget(props) {
  // const [placeName] = useState(props.placeName);
  if (!props.weather.forecast) return null;

  const days = props.weather.forecast.forecastday.map((day) => {
    return <WeatherDay weather={day}></WeatherDay>;
  });

  return (
    <div>
      <h1 className="font-bold text-4xl mb-5">
        {props.weather ? props.weather.location.name : ""}
      </h1>
      <div className="flex flex-row">{days}</div>
    </div>
  );
}
