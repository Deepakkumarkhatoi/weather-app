"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "brown" }}>
      <Link href="/">Home</Link> 
    </nav>
  );
}
