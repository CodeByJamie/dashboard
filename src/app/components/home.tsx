'use client';
import React from 'react'
import { signIn, getSession, useSession } from 'next-auth/react';

const home = () => {
    
    const { data: session } = useSession();
    
    if (!session) {
        return (
            <main>
            <div className='w-full' id='parent'>
                <header id='header' className='py-2 px-3 flex flex-row justify-between'>
                    <h3 className='text-xl text-slate-50' id='title'>
                        <span className='bg-gradient-to-r from-purple-500 to-pink-300 bg-clip-text text-transparent font-semibold'>
                            Catnips
                        </span>{' '}
                        dashboard
                    </h3>
                    <nav className='items-center text-lg text-slate-50 px-2'>
                        <a
                            className='hover:bg-[#af5efa54] p-2 border-b-2 border-b-transparent rounded-sm hover:border-b-purple-500 cursor-pointer'
                            onClick={() => signIn("discord")}
                            
                        >
                            <i className='fa-solid fa-right-to-bracket'></i> Login
                        </a>
                    </nav>
                </header>
                <div className='flex flex-col items-center'>
                    <div className='flex flex-row items-center gap-x-7 justify-center'>
                        <div className="flex flex-col items-center text-xl gap-y-2" id="cat">
                        <img src='/cat.png' alt='Catnips pfp' className='rounded-full w-[100px] h-[100px]' />
                        <span className='bg-gradient-to-r from-purple-500 to-pink-300 bg-clip-text text-transparent'>Catnip</span>
                        </div>
                        <i className='fa-solid fa-x text-2xl text-slate-500 ml-1'></i>
                        <div className="flex flex-col items-center gap-y-2">
                        <img src='/blob.png' alt='' className='w-[100px] h-[100px] border-zinc-950 border-2 bg-zinc-900 rounded-full' />
                        <span className='text-xl bg-gradient-to-r from-sky-500 to-sky-300 bg-clip-text text-transparent'>Jamie</span>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-2 text-zinc-500">
                    <p className='text-xl font-Oxygen'>Meow... I didn't know what to put here lmao</p>
                </div>
            </div>
        </main>
          )
    }
 
}

export default home;