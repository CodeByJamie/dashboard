import Navbar from './components/navbar';
import { redirect } from 'next/dist/server/api-utils';
import React from 'react';
// import { getSession, login, logout } from '';

export default async function Home() {
	// const session = await getSession();

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
							href='/dashboard'
							className='hover:bg-[#af5efa54] p-2 border-b-2 border-b-transparent rounded-sm hover:border-b-purple-500'
						>
							<i className='fa-solid fa-right-to-bracket'></i> Login
						</a>
					</nav>
				</header>
				<div className='flex flex-col items-center'>
					<div className='flex flex-row items-center gap-x-7 justify-center'>
						<img src='/cat.png' alt='Catnips pfp' className='rounded-full w-[100px] h-[100px]' />
						<i className='fa-solid fa-x text-2xl text-slate-500 ml-1'></i>
						<img src='/blob (2).png' alt='' className='w-[100px]' />
					</div>

					<div className='flex flex-row font-semibold text-xl text-slate-500 gap-x-12'>
						<span className='bg-gradient-to-r from-purple-500 to-pink-300 bg-clip-text text-transparent'>Catnip</span>
            <i className='fa-solid fa-x text-2xl text-slate-500'></i>
						<span className='bg-gradient-to-r from-sky-500 to-sky-300 bg-clip-text text-transparent'>Jamie</span>
					</div>
				</div>
			</div>
		</main>
	);
}
