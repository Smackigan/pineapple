import React from 'react';
import NavigationElement from '../NavigationElement';

function Navigation() {
	return (
		<nav>
			<ul className="flex items-end sm:items-start pt-[11px] sm:pt-[15px] pb-[5px] px-0  gap-[20px] sm:gap-[30px] text-[#6A707B] text-[14px] sm:text-[16px] font-normal font-arial leading-[24px] sm:leading-[26px] ">
				<NavigationElement to="#" text="About" />
				<NavigationElement to="#" text="How it works" />
				<NavigationElement to="#" text="Contact" />
			</ul>
		</nav>
	);
}

export default Navigation;
