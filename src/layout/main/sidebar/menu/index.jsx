import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { mainMenu } from '~/utils/consts';
import More from './more';
import New from './new';
import { useAccount } from '~/store/auth/hooks';

export default function Menu() {
    return (
        <nav className='mt-0.5 mb-1'>
            {
                mainMenu.map((menu, index) => (
                    <NavLink key={index} to={typeof menu.path === 'function' ? menu.path() : menu.path} className='py-1 block group'>
                        {({ isActive }) => (
                            <div className={cn('inline-flex transitions-colors items-center rounded-full p-3 gap-5 group-hover:bg-[#eff3f41a]', {
                                "font-bold": isActive
                            })}>
                                <div className='w-[26.25px] h-[26.25px] relative'>
                                    {menu?.notification && (
                                        <span className='w-[18px] h-[18px] rounded-full bg-[#1d9bf0] absolute -top-1.5 -right-1 text-[11px] flex items-center justify-center'>
                                            {menu?.notification}
                                        </span>
                                    )}
                                    {!isActive && menu.icon.passive}
                                    {isActive && menu.icon.active}
                                </div>
                                <div className="pr-4 text-xl">
                                    {menu.title}
                                </div>
                            </div>
                        )}
                    </NavLink>
                ))
            }

            <More />

            <New />
        </nav>
    )
}
