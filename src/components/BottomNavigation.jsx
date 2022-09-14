import React, { useEffect } from "react";

export default function BottomNavigation({
  setCountSteps,
  countSteps,
  navigationTitle,
  setNavigationTitle,
}) {
  // useEffect
  useEffect(() => {
    console.log("data paisi", navigationTitle);
  }, []);

  // handle next button
  const handleNextButton = () => {
    setCountSteps((prevCountSteps) => prevCountSteps + 1);
    setNavigationTitle([...navigationTitle], [navigationTitle[countSteps].complete = true]);


  }

  // handle back button
  const handleBackButton = () => {
    setCountSteps((prevCountSteps) => prevCountSteps - 1);
    setNavigationTitle([...navigationTitle], [navigationTitle[countSteps].complete = false]);
  }

  return (
    <div className="mx-12 py-8 flex justify-end">
      {countSteps > 0 ? (
        <button
          onClick={() => handleBackButton()}
          className="bg-template_btn_bg_gray text-black rounded-10 capitalize custom-px-40 mr-4"
        >
          back
        </button>
      ) : (
        ""
      )}
      {countSteps < navigationTitle.length - 1 ? (
        <button
          onClick={() => handleNextButton()}
          className={`bg-blue-500 text-white rounded-10 capitalize custom-px-40 mr-4 `}
        >
          next
        </button>
      ) : (
        ""
      )}
      {countSteps == navigationTitle.length - 1 ? (
        <button className="bg-blue-500 text-white rounded-10 capitalize custom-px-40">
          submit
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
