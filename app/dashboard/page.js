"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import WeatherCard from "@/components/WeatherCard";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Dashboard() {
     const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) router.push('/signin'); // block access if not logged in
  }, []);

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
  const res = await fetch(`/api/weather?city=${city.trim()}`);
  const data = await res.json();

  if (!res.ok) {
    alert(data.message || "City not found");
    setWeather(null);
    return;
  }

  setWeather(data);
};

  return (
    <>
      <Navbar />
      <h1>Weather App</h1>
      <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city" />
      <button onClick={fetchWeather}>Get Weather</button>
      {weather && <WeatherCard data={weather} />}
    </>
  );
}