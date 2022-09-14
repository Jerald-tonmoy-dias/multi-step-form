import React from "react";
import rac from "../assets/ractangle.png";
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
                <span
                  className={`${
                    countSteps == index
                      ? "text-active_number_color"
                      : "text-deactive_number_color"
                  }  text-4xl font-bold inline-block mr-4`}
                >
                  {index + 1}
                </span>
                <span
                  className={`${
                    countSteps == index
                      ? "text-black"
                      : "text-deactive_text_color"
                  } text-md font-bold  capitalize`}
                >
                  {" "}
                  {navigation.title}
                </span>
                <img
                  className={`absolute right-0 top-0 bottom-0 h-100-percent ${
                    navigationTitle.length - 1 === index ? "hidden" : ""
                  }`}
                  src={rac}
                  alt=""
                />
              </button>
            );
          })}

        {/* <button className={`p-4 flex items-center custom-px-40 relative`}>
                    <span className='text-active_number_color text-4xl font-bold inline-block mr-4'>1</span>
                    <span className='text-md font-bold text-black capitalize'> your feedback</span>
                    <img className='absolute right-0 top-0 bottom-0 h-100-percent' src={rac} alt="" />
                </button>

                <button className='p-4 flex items-center custom-px-40 relative'>
                    <span className='text-deactive_number_color text-4xl font-bold inline-block mr-4'>2</span>
                    <span className='text-md font-bold text-deactive_text_color capitalize'> your information</span>
                    <img className='absolute right-0 top-0 bottom-0 h-100-percent' src={rac} alt="" />
                </button>
                <button className='p-4 flex items-center custom-px-40 relative'>
                    <span className='text-deactive_number_color text-4xl font-bold inline-block mr-4'>3</span>
                    <span className='text-md font-bold text-deactive_text_color capitalize'> confirmation</span>
                </button> */}
      </div>
    </>
  );
}
