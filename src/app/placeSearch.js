"use client";
import { useForm } from "react-hook-form";
import PlaceInfo from "./placeInfo";
import { useState } from "react";

export default function PlaceSearch() {
  const { register, handleSubmit } = useForm();
  const [placeData, setPlaceData] = useState({});

  const getPlace = async (formData) => {
    const query = formData.placeName;
    const res = await fetch(
      `https://geocode.maps.co/search?q=${query}&api_key=661fa7908e2f3349328565cky40b754`
    );
    const place = (await res.json())[0];

    setPlaceData(place);

    // console.log(place);
    // console.log(country);
  };

  return (
    <>
      <form onSubmit={handleSubmit(getPlace)} className="flex flex-col">
        <label className="mb-2">Place Name:</label>
        <input
          {...register("placeName")}
          placeholder="New York"
          className="text-black p-1 px-2 mb-3 rounded-sm"
        ></input>
        <input
          type="submit"
          className="bg-emerald-500 text-white rounded-sm py-2 cursor-pointer hover:bg-emerald-600 transition-all"
        ></input>
      </form>
      <PlaceInfo placeData={placeData}></PlaceInfo>
    </>
  );
}
