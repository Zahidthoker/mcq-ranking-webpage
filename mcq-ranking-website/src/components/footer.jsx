import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Footer(){
    return(
        <div className="flex flex-col w-full h-auto">
            
            <div className="flex justify-center items-center m-5 "> 
                <div className="flex flex-col justify-center items-center">
                    <div className=" flex justify-center items-center w-20 h-20 rounded-full border-2 align-center">
                        <FontAwesomeIcon icon={faBookOpen} size="3x" className="text-black p-1" />
                    </div>
                    <p>
                        Select Your Subject
                    </p>

                </div>
                <div className="w-20 flex justify-center items-center">
                    <FontAwesomeIcon icon={faArrowRight} size="x" className="scale-x-300"/>
                </div>
            </div>
            <div>
                <h1>part 2</h1>
            </div>
            <div>
                <h1>part 3</h1>
            </div>
        </div>
    )
}

export default Footer;