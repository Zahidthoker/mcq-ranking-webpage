import React from "react";
import hero from "../assets/hero.png";
import {Link} from "react-router-dom"
function Hero() {
  return (
       <div className="relative w-full h-90" style={{backgroundImage:`url(${hero})`,backgroundSize:"100% 370%", backgroundPosition:"right",
       backgroundRepeat:"no-repeat" }}>
            <div className="relative top-1/6 left-50 w-1/3">
            <h1 className="text-4xl text-white text-bold drop-shadow-[0_0_3px_rgba(225,225,225,0.8)]">Discover, Practice, and Conquer your MCQs</h1>
            <p className="text-gray-300 mt-4">
                Access a vast library of ranked multiple-choice questions across all subjects. Discover your strengths, improve your weaknesses, and climb the leaderboard as you progress.
            </p>
                <div className="flex gap-4 mt-6">
                    <Link to="/quiz"><button className="bg-blue-500 rounded-full px-4 py-1 drop-shadow-[0_0_5px_rgba(1,88,118,0.8)] hover:drop-shadow-[0_0_10px_rgba(1,88,118,0.8)] hover:scale-105" >Start Practicing Now</button></Link>
                    <button className="bg-white rounded-full px-4 py-1 drop-shadow-[1px_1px_5px_rgba(1,81,118,1)] hover:scale-105 hover:drop-shadow-[0_0_10px_rgba(1,88,118,0.8)]">Explore Subjects</button>
                </div>
            </div>
       </div>
    
  )
}



export default Hero;