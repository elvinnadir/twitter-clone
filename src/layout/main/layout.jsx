import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar'
import Rightbar from './rightbar'
import { useModal } from '~/store/modal/hooks'
import Modal from '~/modals'
import { useApperance } from '~/store/apperance/hooks'

export default function Layout() {
    const modal = useModal()
    const apperance = useApperance()

    useEffect(() => {
        document.documentElement.style.setProperty('--background-primary', apperance.backgroundColor.primary)
        document.documentElement.style.setProperty('--background-primary-alpha', apperance.backgroundColor.primary + 'a6')
        document.documentElement.style.setProperty('--background-secondary', apperance.backgroundColor.secondary)
        document.documentElement.style.setProperty('--background-third', apperance.backgroundColor.third)
        document.documentElement.style.setProperty('--background-modal', apperance.backgroundColor.modal)

        document.documentElement.style.setProperty('--color-primary', apperance.color.primary)
        document.documentElement.style.setProperty('--color-secondary', apperance.color.secondary)
        document.documentElement.style.setProperty('--color-base', apperance.color.base)
        document.documentElement.style.setProperty('--color-base-secondary', apperance.color.baseSecondary)

        document.documentElement.style.setProperty('--box-shadow', apperance.boxShadow)

        document.documentElement.style.setProperty('--font-size', apperance.fontSize + 'px')
    }, [apperance])

    return (
        <div className='w-[1265px] mx-auto flex'>
            {modal && <Modal />}
            <Sidebar />
            <main className='flex-1 flex gap-[30px]'>
                <main className='flex-1 border-x border-[#2f3334]'>
                    <Outlet />
                </main>
                <Rightbar />
            </main>
        </div>
    )
}
