import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';

function Header({ className }) {
	return (
		<header
			className={`flex sm:inline-flex justify-between bg-white sm:w-[520px] h-[66px] sm:mt-[90px] px-5 sm:px-0 pt-[10px] pb-4 z-10  ${className}`}>
			<Logo />
			<Navigation />
		</header>
	);
}

export default Header;

// className="inline-flex items-end gap-[113px] w-[520px] h-[66px] mt-[90px] ml-[80px]  px-[20px] pt-[10px] pb-4"
