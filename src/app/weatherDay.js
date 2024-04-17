export default function WeatherDay(props) {
  return (
    <div className="flex flex-col my-3 border-x px-3">
      <h1 className="mb-3 font-bold">
        {props.weather ? props.weather.date : ""}
      </h1>
      <div className="grid grid-cols-2">
        <p>Min:</p>
        <p className="text-end font-bold">
          {props.weather ? `${props.weather.day.mintemp_c}°C` : ""}
        </p>
        <p>Max:</p>
        <p className="text-end font-bold">
          {props.weather ? `${props.weather.day.maxtemp_c}°C` : ""}
        </p>
      </div>
    </div>
  );
}
