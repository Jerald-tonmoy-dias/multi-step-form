import React from 'react'
import rac from "../assets/ractangle.png";
export default function TopNavbar() {
    return (
        <>
            <div className='mx-12 my-8 border rounded-md flex justify-center'>
                <button className={`p-4 flex items-center `}>
                    <span className='text-active_number_color text-4xl font-bold inline-block mr-4'>1</span>
                    <span className='text-md font-bold text-black capitalize'> your feedback</span>
                </button>
                <img src={rac} alt="" />
                <button className='p-4 flex items-center'>
                    <span className='text-deactive_number_color text-4xl font-bold inline-block mr-4'>2</span>
                    <span className='text-md font-bold text-deactive_text_color capitalize'> your information</span>
                </button>
                <img src={rac} alt="" />
                <button className='p-4 flex items-center'>
                    <span className='text-deactive_number_color text-4xl font-bold inline-block mr-4'>3</span>
                    <span className='text-md font-bold text-deactive_text_color capitalize'> confirmation</span>
                </button>

            </div>
        </>
    )
}
