import { connectToDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req) {
  const { email, password } = await req.json();

  try {
    await connectToDB();
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return Response.json({ message: "Invalid credentials" }, { status: 401 });
    }

    return Response.json({ message: "Login successful", user });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
