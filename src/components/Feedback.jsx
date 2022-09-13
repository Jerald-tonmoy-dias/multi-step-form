import React from 'react'

export default function Feedback() {
    return (
        <>
            <div className='mb-12'>
                <span className='text-black text-lg font-semibold capitalize'>01. How was your day?</span>
                <div className='flex ml-6 mt-4'>
                    <div className='bg-template_btn_bg_gray px-5 text-center py-1 rounded-sm'>
                        <label className='text-black capitalize' htmlFor="bad">bad</label>
                        <input className='hidden' type="radio" name="bad" id="bad" />
                    </div>
                    <div className='bg-template_btn_bg_gray px-5 text-center py-1 rounded-sm mx-4'>
                        <label className='text-black capitalize' htmlFor="okay">okay</label>
                        <input className='hidden' type="radio" name="okay" id="okay" />
                    </div>
                    <div className='bg-blue-100 px-5 text-center py-1 border-blue-400 border rounded'>
                        <label className='text-black capitalize' htmlFor="good">good</label>
                        <input className='hidden' type="radio" name="good" id="good" />
                    </div>
                </div>
            </div>
            <div className=''>
                <span className='text-black text-lg font-semibold capitalize'>02. Do you feel you're making difference?</span>
                <div className='flex ml-6 mt-4'>
                    <div className='bg-template_btn_bg_gray px-6 py-3 text-center rounded-sm'>
                        <input className='mr-2' type="checkbox" name="yes" id="yes" />
                        <label className='text-black capitalize' htmlFor="yes">Yes</label>
                    </div>
                    <div className='bg-blue-100 border-blue-400 border rounded  px-6 py-3 text-center  ml-4'>
                        <input className='mr-2 ' type="checkbox" name="yes" id="no" />
                        <label className='text-black capitalize' htmlFor="no">No</label>
                    </div>
                </div>
            </div>
        </>
    )
}
