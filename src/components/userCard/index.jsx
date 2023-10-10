import React, { useState } from 'react';
import Button from '../button';


export default function UserCard({ user }) {
    const [following, setFollowing] = useState(false);

    return (
        <button className='py-3 px-4 flex gap-3 hover:bg-white/[0.03] transition-colors'>
            <img src={user.avatar} className='w-10 h-10 rounded-full object-contain' alt="avatar" />
            <div className="flex-1 flex flex-col text-left">
                <div className="text-[15px] text-[#e7e9ea] font-bold leading-5 flex items-center">
                    {user.fullName}
                    {user?.verified && (
                        <svg viewBox="0 0 22 22" className='ml-0.5 text-[#1d9bf0]' width={18.75} height={18.75} >
                            <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M12.05 2.056c-.568-.608-1.532-.608-2.1 0l-1.393 1.49c-.284.303-.685.47-1.1.455L5.42 3.932c-.832-.028-1.514.654-1.486 1.486l.069 2.039c.014.415-.152.816-.456 1.1l-1.49 1.392c-.608.568-.608 1.533 0 2.101l1.49 1.393c.304.284.47.684.456 1.1l-.07 2.038c-.027.832.655 1.514 1.487 1.486l2.038-.069c.415-.014.816.152 1.1.455l1.392 1.49c.569.609 1.533.609 2.102 0l1.393-1.49c.283-.303.684-.47 1.099-.455l2.038.069c.832.028 1.515-.654 1.486-1.486L18 14.542c-.015-.415.152-.815.455-1.099l1.49-1.393c.608-.568.608-1.533 0-2.101l-1.49-1.393c-.303-.283-.47-.684-.455-1.1l.068-2.038c.029-.832-.654-1.514-1.486-1.486l-2.038.07c-.415.013-.816-.153-1.1-.456zm-5.817 9.367l3.429 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z"
                            />
                        </svg>
                    )}
                </div>
                <div className='text-[15px] text-[#71767b]'>
                    {user.userName}
                </div>
            </div>
            <div>
                {following ? (
                    <Button size='small'
                        variant='white-outline'
                        className='whitespace-nowrap group'
                        onClick={() => setFollowing(false)}
                    >
                        <div className="flex group-hover:hidden">Following</div>
                        <div className="hidden group-hover:flex">Unfollow</div>
                    </Button>
                ) : (
                    <Button size='small' variant='white' onClick={() => setFollowing(true)}>
                        Follow
                    </Button>
                )}
            </div>
        </button >
    )
}
