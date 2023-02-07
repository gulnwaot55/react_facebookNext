import { Inter } from "@next/font/google";
import React from "react";
import Navbar from "@/components/navbar";
import HomePage from "@/components/Home/HomePage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomePage />
    </div>
  );
}
