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
  };

  return (
    <div className="flex flex-col w-full">
      <div className="mx-auto">
        <h1 className="text-start  text-zinc-300 mb-1">Search a location</h1>
        <form onSubmit={handleSubmit(getPlace)} className="flex flex-row mb-16">
          <input
            {...register("placeName")}
            placeholder="New York"
            className="text-white p-1 px-2 rounded-md h-10 me-3 bg-transparent border-zinc-300 border-2 placeholder:italic placeholder:text-zinc-500"
          ></input>
          <input
            type="submit"
            value="Search"
            className="bg-teal-600 text-white rounded-sm py-2 px-4 cursor-pointer hover:bg-teal-800 transition-all h-10"
          ></input>
        </form>
      </div>
      <PlaceInfo placeData={placeData}></PlaceInfo>
    </div>
  );
}
