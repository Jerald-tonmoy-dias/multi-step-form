import React from 'react'

export default function Information() {
    return (
        <>
            <div className='mb-12'>
                <span className='text-black text-lg font-semibold capitalize'>01. Your name</span>
                <div className='ml-6 mt-4'>
                    <input name="name" className='border capitalize p-4 rounded-md w-full' type="text" placeholder='jhon doe' />
                </div>
            </div>
            <div className=''>
                <span className='text-black text-lg font-semibold capitalize'>02. Your Email</span>
                <div className='ml-6 mt-4'>
                    <input name="email" className='border capitalize p-4 rounded-md w-full' type="email" placeholder='jhon@mail.com' />
                </div>
            </div>
        </>
    )
}
