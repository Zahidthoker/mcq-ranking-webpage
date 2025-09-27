import React from "react";
import hero from "../assets/hero.jpg";

function Hero(){
    return(
        <div className="w-full h-64 relative">
             <div className="bg-[rgba(0,84,118,1)] w-full h-64 relative"></div>

             <div className="w-full h-full">
                <img
                    className="w-full h-full object-cover -ml-8"
                    src={hero}
                    alt="Merged"
                    style={{
                        maskImage: "linear-gradient(to left, rgba(0,84,118,1), rgba(0,84,118,1))",
                        WebkitMaskImage: "linear-gradient(to left, rgba(0,84,118,1), rgba(0,84,118,1))"
                    }}
                    />
             </div>
        </div>

    )
}


export default Hero;