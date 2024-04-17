export default function WeatherDay(props) {
  return (
    <div className="flex flex-col my-3 border-x px-3">
      <h1 className="mb-2">{props.weather ? props.weather.date : ""}</h1>
      <div className="grid grid-cols-2">
        <p className="font-bold">Min:</p>
        <p className="text-end">
          {props.weather ? `${props.weather.day.mintemp_c}C` : ""}
        </p>
        <p className="font-bold">Max:</p>
        <p className="text-end">
          {props.weather ? `${props.weather.day.maxtemp_c}C` : ""}
        </p>
      </div>
    </div>
  );
}
