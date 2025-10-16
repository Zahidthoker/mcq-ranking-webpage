import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Quiz(){
    const {subject} = useParams();
    return(
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center relative">
            <h1 className="text-3xl font-bold text-blue-700 mb-6">{subject.toUpperCase()} Quiz</h1>
            <p className="text-gray-700 text-lg">Welcome to {subject} quiz! Let's test your knowledge.</p>
            <Link to = "/subjects" >
                <div className="flex justify-center items-center gap-3 mt-5 absolute top-5 left-5">
                   <button className="text-blue-500  align-baseline text-3xl">←</button>
                   <p className="font-bold text-lg  text-blue-700 ">Back to Subjects</p>
                </div>
            </Link>
        </div>
       
    )
}

export default Quiz;