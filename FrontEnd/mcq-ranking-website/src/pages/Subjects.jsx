import React from "react";
import {Link} from "react-router-dom";
function Subjects(){
    const subjects = ["Mathematics", "Physics", "Chemistry", "Biology", "History", "Geography", "English", "Computer Science"];
    return(
     <div className="flex flex-col items-center  min-h-screen bg-gray-100 pt-16">
      <h1 className="text-3xl font-bold mb-8 text-blue-800">Select a Subject</h1>

      <div className="grid grid-cols-2 gap-6">
        {subjects.map((subject) => (
          <Link
            key={subject}
            to={`/quiz/${subject}`}
            className="bg-white shadow-md rounded-lg px-10 py-6 text-xl font-medium text-gray-800 
                     hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            {subject.toUpperCase()}
          </Link>
        ))}
      </div>
    </div>
    )

}

export default Subjects;