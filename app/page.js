"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import WeatherCard from "@/components/WeatherCard";
import { useRouter } from 'next/navigation';
/*
export default function Home() {
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
/*
  return (
    <>
      <Navbar />
      <h1>Weather App</h1>
      <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city" />
      <button onClick={fetchWeather}>Get Weather</button>
      {weather && <WeatherCard data={weather} />}
    </>
  );
}*/




export default function Home() {
  const router = useRouter();
  return (
    <main style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>🌤️ Welcome to Weather App</h1>
      <button onClick={() => router.push('/signup')}>Sign Up</button>
      <button onClick={() => router.push('/signin')} style={{ marginLeft: '10px' }}>Sign In</button>
    </main>
  );
}
