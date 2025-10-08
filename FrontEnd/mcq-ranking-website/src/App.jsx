import React from "react"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Features from "./components/Features";
import {Routes, Route} from "react-router-dom"
import Login from "./pages/Login";
import Quiz from "./pages/quiz";
function App() {
  return (
    <div className="bg-gray-50 w-full">
      <Navbar/>
      <div className="pt-12">
          <Routes>
              <Route path="/" element={
                <div>
                  <Hero/> <Banner/> <Features/>
                </div>
                  }
                />
              <Route path="/login" element={<Login/>}/>
              <Route path="/quiz" element={<Quiz/>}/>
          </Routes>
      </div>
    </div>
  )
}

export default App