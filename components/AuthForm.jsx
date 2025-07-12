"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthForm({ type }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/auth/${type}`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.push("/");
    } else {
      const err = await res.json();
      alert(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "2rem" }}>
      <input placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Password" required type="password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">{type === "signup" ? "Sign Up" : "Sign In"}</button>
    </form>
  );
}
