import React from 'react'
import Button from '../../../../components/button'

export default function Premium() {
    return (
        <section className='bg-[color:var(--background-secondary)] rounded-2xl border border-[color:var(--background-secondary)] mb-4 py-3 px-4 flex flex-col gap-2.5 text-[color:var(--color-base)]'>
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
