import React from 'react'

export default function BottomNavigation() {
    return (
        <div className='mx-12 py-8 flex justify-end'>
            <button className='bg-template_btn_bg_gray text-black rounded-10 capitalize custom-px-40 mr-4'>
                back
            </button>
            <button className='bg-blue-500 text-white rounded-10 capitalize custom-px-40 mr-4'>
                next
            </button>
            <button className='bg-blue-500 text-white rounded-10 capitalize custom-px-40'>
                submit
            </button>
        </div>
    )
}
