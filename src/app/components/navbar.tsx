'use client';
import { useState, useEffect } from 'react';

const Navbar = () => {
	const [activeTab, setActiveTab] = useState('');

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const { pathname } = window.location;
			if (pathname.includes('/dashboard')) {
				setActiveTab('dashboard');
			} else if (pathname.includes('/settings')) {
				setActiveTab('settings');
			} else if (pathname.includes('/commands') || pathname.includes('/events')) {
				setActiveTab('builder');
			} else if (pathname.includes('/variables')) {
				setActiveTab('variables');
			}
		}
	}, []);

	const toggleCollapse = () => {
		setActiveTab(activeTab === 'builder' ? '' : 'builder');
	};

	return (
		<div id='parent' className='w-max h-[100dvh]'>
			<h3></h3>
			<aside
				id='navbar'
				className='h-full w-auto bg-zinc-900 flex flex-col justify-between'>
				<div
					className='flex flex-col text-slate-400 w-full pt-3 h-full gap-y-3'
					id='elements'>
					<div className='flex flex-col gap-y-7'>
						<a
							href='/dashboard'
							className={`relative px-5 py-2 hover:pl-6 ${
								activeTab === 'dashboard' ? 'bg-[#69696938]' : 'bg-opacity-hover'
							}`}
							onClick={() => setActiveTab('dashboard')}>
							<i className='fa-solid fa-bars'></i> Dashboard
						</a>
						<a
							href='/settings'
							className={`relative px-5 py-2 hover:pl-6 ${
								activeTab === 'settings' ? 'bg-[#69696938]' : 'bg-opacity-hover'
							}`}
							onClick={() => setActiveTab('settings')}>
							<i className='fa-solid fa-gear'></i> Settings
						</a>
						<a
							href='/variables'
							className={`relative px-5 py-2 hover:pl-6 ${
								activeTab === 'variables' ? 'bg-[#69696938]' : 'bg-opacity-hover'
							}`}
							onClick={() => setActiveTab('variables')}>
							<i className="fa-solid fa-square-root-variable"></i> Variables
						</a>
						<div
							className={`relative px-5 py-2 hover:pl-6 cursor-pointer gap-y-0 ${
								activeTab === 'builder' ? 'bg-[#69696938]' : 'bg-opacity-hover'
							}`}
							onClick={toggleCollapse}
							id='builder'>
							<i className='fa-solid fa-hammer'></i> Builder
						</div>
					</div>

					<div
						className={`transition-all ease-in-out duration-300 overflow-hidden ${
							activeTab === 'builder' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
						}`}>
						<div
							className='flex flex-col mt-2 text-sm border-l-zinc-600 border-l-2 ml-5 gap-2'
							id='commands'>
							<a
								href='/builder/commands'
								className='relative px-5 py-2 hover:pl-6 bg-opacity-hover'>
								<i className='fa-solid fa-terminal'></i> Commands
							</a>
							<a
								href='/builder/events'
								className='relative px-5 py-2 hover:pl-6 bg-opacity-hover'
								id='events'>
								<i className='fa-solid fa-calendar'></i> Events
							</a>
						</div>
					</div>
					<a
						href='/login'
						className='relative px-5 py-2 hover:pl-6 bg-opacity-hover text-slate-400 mt-[100%]'>
						<i className='fa-solid fa-plus'></i> Login
					</a>
				</div>
			</aside>
		</div>
	);
};

export default Navbar;
