import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "Weather App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ padding: "2rem" }}>{children}</body>
    </html>
  );
}

