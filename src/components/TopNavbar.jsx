import React from "react";
import rac from "../assets/ractangle.png";
import checkIcon from "../assets/checked.png";
export default function TopNavbar({ navigationTitle, countSteps }) {
  return (
    <>
      <div className="mx-12 my-8 border rounded-md flex justify-center">
        {navigationTitle &&
          navigationTitle.map((navigation, index) => {
            return (
              <button
                className={`p-4 flex items-center custom-px-40 relative`}
                key={index}
              >
                {navigation.complete === false ? <span
                  className={`${countSteps == index
                    ? "text-active_number_color"
                    : "text-deactive_number_color"
                    }  text-4xl font-bold inline-block mr-4`}
                >
                  {index + 1}
                </span> : ''}

                {navigation.complete === true ? <span className={` 
                text-4xl font-bold inline-block mr-4
                `}>
                  <img src={checkIcon} alt="" />
                </span> : ''}

                <span
                  className={`${navigation.complete === true || countSteps == index
                    ? "text-black"
                    : "text-deactive_text_color"
                    } text-md font-bold  capitalize hidden md:inline-block`}
                >
                  {" "}
                  {navigation.title}
                </span>
                <img
                  className={`absolute right-0 top-0 bottom-0 h-100-percent ${navigationTitle.length - 1 === index ? "hidden" : ""
                    }`}
                  src={rac}
                  alt=""
                />
              </button>
            );
          })}
      </div>
    </>
  );
}
