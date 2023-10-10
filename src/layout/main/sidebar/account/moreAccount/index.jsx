import React from 'react'
import { useAccount, useAccounts } from '~/store/auth/hooks'
import cn from 'classnames'
import { setCurrentAccount } from '~/store/auth/actions';

export default function MoreAccount({ close }) {
    const currentAccount = useAccount();
    const accounts = useAccounts();

    return (
        <div>
            {accounts.map(account => (
                <button
                    type='button'
                    disabled={currentAccount.id === account.id}
                    onClick={() => {
                        setCurrentAccount(account)
                        close()
                    }}

                    className={cn("py-3 px-4 flex transitions-colors text-left rounded-2xl w-full ", {
                        "hover:bg-[#eff3f41a]": currentAccount.id !== account.id
                    })}>
                    <img src={account.avatar} alt="avatar" className='w-10 h-10 rounded-full' />
                    <div className="mx-3 font-bold flex-1 text-[15px]">
                        <h6 className='font-bold leading-3'>{account.fullName}</h6>
                        <div className='text-[#71767b]'>
                            @{account.userName}
                        </div>
                    </div>
                    {currentAccount.id === account.id && (
                        <svg viewBox="0 0 24 24" className="mr-2 ml-3 h-[1.172rem]" fill="#00ba7c">
                            <path
                                d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.81 14.68l-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18-5.21 7.15z"
                            />
                        </svg>
                    )}
                </button>
            ))}
            <div className="h-px bg-[#2f3336] my-3" />
            <button
                className="py-3 px-4 text-left transition-colors hover:bg-[#eff3f41a] w-full font-bold leading-[1.25rem]">
                Add an existing account
            </button>
            <button
                className="py-3 px-4 text-left transition-colors  hover:bg-[#eff3f41a] w-full font-bold leading-[1.25rem]">
                Manage accounts
            </button>
            <button
                className="py-3 px-4 text-left transition-colors  hover:bg-[#eff3f41a] w-full font-bold leading-[1.25rem]">
                <div className="max-w-[228px]">
                    @{currentAccount.username} Exit account
                </div>
            </button>
        </div>
    )
}
