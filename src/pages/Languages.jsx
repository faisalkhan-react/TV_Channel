import React from "react";
import English from "../assets/english.jpg";
import Hindi from "../assets/hindi.jpg";
import Bhojpuri from "../assets/bhojpuri.jpg";
import Kannada from "../assets/kannada.jpg";
import Malayalam from "../assets/malayalam.jpg";
import Tamil from "../assets/tamil.jpg";
import Telugu from "../assets/telugu.jpg";

const Languages = () => {
  return (
    <div>
      <div className="font-semibold p-4 mt-[-0.5rem] w-full flex flex-col bg-[#dddddd1e] shadow-[8px_8px_15px_#bebebe,_-8px_-8px_15px_#ffffff] rounded-2xl">
        <div className="flex justify-between items-center">
          <p className="text-lg">Languages</p>
        </div>

        <div className="flex flex-wrap justify-around gap-4 mt-2 px-2">
          {[English, Hindi, Bhojpuri, Kannada, Malayalam, Tamil, Telugu].map(
            (langImg, idx) => (
              <img
                key={idx}
                src={langImg}
                alt={`Lang ${idx}`}
                className="h-15 object-cover rounded-lg hover:scale-105 transition-transform duration-300 hover:shadow-lg"
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Languages;
