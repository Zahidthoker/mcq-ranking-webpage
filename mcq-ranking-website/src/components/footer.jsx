import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight, faTrophy, faRocket} from "@fortawesome/free-solid-svg-icons";


function Footer(){
    return(
        <div className="flex flex-col w-full h-auto">
            
            <div className="flex justify-center items-center m-5 "> 
                {/* icon and text book */}
                <div className="flex flex-col justify-center items-center">
                    <div className=" flex justify-center items-center w-20 h-20 rounded-full border-2 align-center">
                        <FontAwesomeIcon icon={faBookOpen} size="3x" className="text-black p-1" />
                    </div>
                    <p>
                        Select Your Subject
                    </p>

                </div>
                {/* arrow  */}
                <div className="w-20 flex  items-center">
                    <FontAwesomeIcon icon={faArrowRight} size="xl" className="scale-x-300" className="text-gray-400 pb-5 scale-x-300"/>
                </div>
                  {/* icon and text  trophy*/}
                <div className="flex flex-col justify-center items-center">
                    <div className=" flex justify-center items-center w-20 h-20 rounded-full border-2 align-center">
                        <FontAwesomeIcon icon={faTrophy} size="3x" className="text-black p-1" />
                    </div>
                    <p>
                        Practice & get Ranked
                    </p>

                </div>
                {/* arrow  */}
                <div className="w-20 flex  items-center">
                    <FontAwesomeIcon icon={faArrowRight} size="xl" className="scale-x-300" className="text-gray-400 pb-5 scale-x-300"/>
                </div>
                  {/* icon and text */}
                <div className="flex flex-col justify-center items-center">
                    <div className=" flex justify-center items-center w-20 h-20 rounded-full border-2 align-center">
                        <FontAwesomeIcon icon={faRocket} size="3x" className="text-black p-1" />
                    </div>
                    <p>
                        Imporve & Successed
                    </p>

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