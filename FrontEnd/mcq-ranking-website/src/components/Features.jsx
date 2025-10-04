import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHardDrive, faFileCode} from "@fortawesome/free-regular-svg-icons";
import {faGlobe, faFlask, faHistory} from "@fortawesome/free-solid-svg-icons";




function Features(){
    return(
        <div className="flex flex-col items-center w-full py-10">
                <p className="text-lg font-semibold mb-6">Featured categories</p>
            <div className="flex flex-wrap justify-center items-center w-full gap-5">
            {/* feature 1 */}
            <div className="flex flex-col justify-center items-center shadow-md p-4 w-[120px] h-[120px]">
                <FontAwesomeIcon icon={faGlobe} size="4x" beat className="text-blue-400"/>
                <p className="text-sm text-center mt-2">Vast Question Database</p>
            </div>
            <div className="flex flex-col justify-center items-center shadow-md p-4 w-30 h-30">
                <FontAwesomeIcon icon={faHardDrive} size="4x" className="text-blue-400"/>
                <p className="text-sm text-center mt-2">Vast Question Database</p>
            </div>
            <div className="flex flex-col justify-center items-center shadow-md p-4 w-30 h-30">
                <FontAwesomeIcon icon={faFlask} size="4x" className="text-blue-400"/>
                <p className="text-sm text-center mt-2">Vast Question Database</p>
            </div>
            <div className="flex flex-col justify-center items-center shadow-md p-4 w-30 h-30">
                <FontAwesomeIcon icon={faHistory} size="4x" className="text-blue-400"/>
                <p className="text-sm text-center mt-2">Vast Question Database</p>
            </div>
            <div className="flex flex-col justify-center items-center shadow-md p-4 w-30 h-30">
                <FontAwesomeIcon icon={faFileCode} size="4x" className="text-blue-400"/>
                <p className="text-sm text-center mt-2">Vast Question Database</p>
            </div>
           






        </div>
        </div>
    
    )
}
export default Features;