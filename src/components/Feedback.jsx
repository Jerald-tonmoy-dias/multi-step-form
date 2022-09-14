import React from "react";

export default function Feedback() {
  return (
    <>
      <div className="mb-12">
        <span className="text-black text-lg font-semibold capitalize">
          01. How was your day?
        </span>
        <div className="flex ml-6 mt-6">
          <label>
            <input defaultChecked name="bad" type="checkbox" className="peer hidden" />
            <span className="bg-template_btn_bg_gray cursor-pointer px-5 capitalize py-2 border rounded mx-4 border-template_btn_bg_gray peer-checked:bg-blue-100 peer-checked:border-blue-400">
              bad
            </span>
          </label>
          <label>
            <input name="okay" type="checkbox" className="peer hidden" />
            <span className="bg-template_btn_bg_gray cursor-pointer px-5 capitalize py-2 border rounded mx-4 border-template_btn_bg_gray peer-checked:bg-blue-100 peer-checked:border-blue-400">
              okay
            </span>
          </label>
          <label>
            <input name="good" type="checkbox" className="peer hidden" />
            <span className="bg-template_btn_bg_gray cursor-pointer px-5 capitalize py-2 border rounded mx-4 border-template_btn_bg_gray peer-checked:bg-blue-100 peer-checked:border-blue-400">
              good
            </span>
          </label>
        </div>
      </div>
      <div>
        <span className="text-black text-lg font-semibold capitalize">
          02. Do you feel you're making difference?
        </span>
        <div className="flex ml-8 mt-4">
          <label className="relative cursor-pointer flex justify-center items-center text-center w-24 h-12 mr-8">
            <input defaultChecked name="yes" type="checkbox" className="peer mr-2 -mt-1" />
            <span className="text-black capitalize" htmlFor="no">
              Yes
            </span>
            <span className="absolute top-0 left-0 -z-10 peer-checked:bg-blue-100 w-24 h-12 bg-template_btn_bg_gray peer-checked:border-blue-400 border  rounded inline-block"></span>
          </label>
          <label className="relative cursor-pointer flex justify-center items-center text-center w-24 h-12">
            <input name="no" type="checkbox" className="peer mr-2 -mt-1" />
            <span className="text-black capitalize" htmlFor="no">
              No
            </span>
            <span className="absolute top-0 left-0 -z-10 peer-checked:bg-blue-100 w-24 h-12 bg-template_btn_bg_gray peer-checked:border-blue-400 border  rounded inline-block"></span>
          </label>

        </div>
      </div>
    </>
  );
}
