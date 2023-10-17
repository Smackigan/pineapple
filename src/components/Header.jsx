import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Navigation from './Navigation';

function Header() {
	return (
		<header className="inline-flex items-end gap-[113px] w-[520px] h-[66px] mt-[90px] ml-[80px] bg-slate-200 px-[20px] pt-[10px] pb-4">
			<Logo />
			<Navigation />
		</header>
	);
}

export default Header;
