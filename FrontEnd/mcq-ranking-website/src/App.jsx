import React from "react"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Features from "./components/Features";
function App() {
  return (
    <div className="bg-gray-50 w-full">
      <Navbar/>
      <Hero/>
      <Banner/>
      <Features/>
    </div>
  )
}

export default App