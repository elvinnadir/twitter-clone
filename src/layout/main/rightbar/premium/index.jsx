import React from 'react'
import Button from '../../../../components/button'

export default function Premium() {
    return (
        <section className='bg-[#16181c] rounded-2xl border border-[#16181c] mb-4 py-3 px-4 flex flex-col gap-2.5 text-[#e7e9ea]'>
            <h6 className='text-xl leading-6 font-extrabold'>Subscribe to Premium</h6>
            <p className='leading-5 font-bold text-[15px]'>
                Subscribe to unlock new features and if eligible, receive a share of ads revenue.
            </p>
            <div className='self-start'>
                <Button>Subscribe</Button>
            </div>
        </section>
    )
}
