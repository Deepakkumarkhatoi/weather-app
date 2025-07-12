export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get("city");
  const key = process.env.WEATHER_API_KEY;
  console.log("Loaded API Key: ", process.env.WEATHER_API_KEY);


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      return Response.json({ message: data.message }, { status: 404 });
    }

    return Response.json(data);
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
