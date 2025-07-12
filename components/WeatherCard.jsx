/*export default function WeatherCard({ data }) {
  return (
    <div style={{ marginTop: "1rem", border: "1px solid #ccc", padding: "1rem" }}>
      <h2>{data.name}</h2>
      <p>{data.weather[0].description}</p>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
    </div>
  );
}*/
export default function WeatherCard({ data }) {
  if (!data || !data.weather || !data.main) {
    return <p style={{ color: "red" }}>⚠️ Invalid weather data. Please try a valid city.</p>;
  }

  return (
    <div style={{ marginTop: "1rem", border: "1px solid #ccc", padding: "1rem" }}>
      <h2>{data.name}</h2>
      <p>{data.weather[0].description}</p>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
    </div>
  );
}
