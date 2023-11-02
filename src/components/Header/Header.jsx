import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import styles from './Header.module.scss';

function Header() {
	return (
		<header>
			<Logo />
			<Navigation />
		</header>
	);
}

export default Header;

// className="inline-flex items-end gap-[113px] w-[520px] h-[66px] mt-[90px] ml-[80px]  px-[20px] pt-[10px] pb-4"
