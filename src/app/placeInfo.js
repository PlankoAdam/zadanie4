import { useState } from "react";

export default function PlaceInfo(props) {
  if (!props.placeData.display_name) {
    return null;
  } else {
    const parts = props.placeData.display_name.split(",");
    const countryName = parts[parts.length - 1].trim();
    const placeName = parts[0];
    const [countryData, setCountryData] = useState();
    const [currencies, setCurrencies] = useState("");

    const getCountryData = async (countryName) => {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`
      );
      const country = (await res.json())[0];
      setCountryData(country);
      for (const key in country.currencies) {
        setCurrencies(country.currencies[key].name);
        // console.log(currencies);
      }
      // console.log("object");
    };

    getCountryData(countryName);

    return (
      <div className="flex flex-col items-center">
        <img
          src={
            countryData
              ? `https://countryflagsapi.netlify.app/flag/${countryData.cca2}.svg`
              : ""
          }
          className="w-64 mb-5"
        ></img>
        <div className="grid grid-cols-2 gap-2 w-full">
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
    );
  }
}
