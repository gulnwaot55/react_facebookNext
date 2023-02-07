import { Inter } from "@next/font/google";
import React from "react";
import Navbar from "@/components/navbar";
import HomePage from "@/components/HomePage";

import AppBar from "@/components/AppBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomePage />
    </div>
  );
}
