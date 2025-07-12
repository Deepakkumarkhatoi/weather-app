// app/api/auth/signup/route.js
import { connectToDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req) {
  const { email, password } = await req.json();

  try {
    await connectToDB();
    const existing = await User.findOne({ email });
    if (existing) return Response.json({ message: "User exists" }, { status: 400 });

    const user = await User.create({ email, password });
    return Response.json({ message: "User created", user });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
