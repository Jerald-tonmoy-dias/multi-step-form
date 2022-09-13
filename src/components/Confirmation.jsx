import React from 'react'
import smile from "../assets/smile.png"
export default function Confirmation() {
    return (
        <div className='text-center'>
            <img src={smile} alt="" className='mx-auto w-120  my-40' />
            <span className='text-md font-semibold text-black capitalize'>Thank for your feedback!</span>
        </div>
    )
}
