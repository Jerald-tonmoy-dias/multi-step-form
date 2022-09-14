import React from "react";

export default function Feedback() {
  return (
    <>
      <div className="mb-12">
        <span className="text-black text-lg font-semibold capitalize">
          01. How was your day?
        </span>
        <div className="flex ml-6 mt-4">
          <label>
            <input defaultChecked type="checkbox" className="peer hidden" />
            <span className="bg-template_btn_bg_gray cursor-pointer px-5 capitalize py-2 border rounded mx-4 border-template_btn_bg_gray peer-checked:bg-blue-100 peer-checked:border-blue-400">
              test
            </span>
          </label>
          <label>
            <input type="checkbox" className="peer hidden" />
            <span className="bg-template_btn_bg_gray cursor-pointer px-5 capitalize py-2 border rounded mx-4 border-template_btn_bg_gray peer-checked:bg-blue-100 peer-checked:border-blue-400">
              okay
            </span>
          </label>
          <label>
            <input type="checkbox" className="peer hidden" />
            <span className="bg-template_btn_bg_gray cursor-pointer px-5 capitalize py-2 border rounded mx-4 border-template_btn_bg_gray peer-checked:bg-blue-100 peer-checked:border-blue-400">
              good
            </span>
          </label>
        </div>
      </div>
      <div className="">
        <span className="text-black text-lg font-semibold capitalize">
          02. Do you feel you're making difference?
        </span>
        <div className="flex ml-6 mt-4">
          <div className="bg-template_btn_bg_gray px-6 py-3 text-center rounded-sm">
            <input className="mr-2" type="checkbox" name="yes" id="yes" />
            <label className="text-black capitalize" htmlFor="yes">
              Yes
            </label>
          </div>
          <label className="peer-checked:bg-blue-100 peer-checked:border-blue-400 border rounded  px-6 py-3 text-center  ml-4">
            <input className="mr-2 peer " type="checkbox" name="yes" id="no" />
            <span className="text-black capitalize" htmlFor="no">
              No
            </span>
          </label>
          {/* <div className="bg-blue-100 border-blue-400 border rounded  px-6 py-3 text-center  ml-4">
            <input className="mr-2 " type="checkbox" name="yes" id="no" />
            <label className="text-black capitalize" htmlFor="no">
              No
            </label>
          </div> */}
        </div>
      </div>
    </>
  );
}
