import React from "react";
import logo from "../assets/logo.png";
import {Link} from "react-router-dom"
function Navbar(){
    return(
        <div className="grid grid-cols-3 bg-blue-950 w-screen h-12 fixed z-10">
            <div className="flex justify-center items-center w-60%">
                <Link to ="/"><img  className="h-10" src={logo} alt="" /></Link>
            </div>
            <div className=" col-span-2 flex justify-center gap-20 items-center text-gray-400 text-xl font-serif">
                <Link to="/subjects" className="hover:scale-106 hover:text-white">Subjects</Link>
                <Link to="" className="hover:scale-106 hover:text-white">LeaderBoard</Link>
                <Link to="" className="hover:scale-106 hover:text-white">Pricing</Link>
                <Link to="/login" className="bg-white text-black px-4 py-1 rounded-full 
               transform transition-all duration-500 
               hover:scale-105 hover:bg-gray-400 hover:shadow-xl">Login/SignUp</Link>
              
            </div>
        </div>
    )
}

export default Navbar;