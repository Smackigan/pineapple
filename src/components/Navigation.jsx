import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
	return (
		<nav>
			<ul className="flex items-end sm:items-start pt-[11px] sm:pt-[15px] pb-[5px] px-0 sm:px-10 gap-[20px] sm:gap-[30px] text-[#6A707B] text-[14px] sm:text-[16px] font-normal font-arial leading-[24px] sm:leading-[26px] ">
				<li className="hover:text-[#4066A5] hover:underline active:text-[#233759] active:underline">
					<Link to="/">About</Link>
				</li>
				<li className="hover:text-[#4066A5] hover:underline active:text-[#233759] active:underline">
					<Link to="/">How it works</Link>
				</li>

				<li className="hover:text-[#4066A5] hover:underline active:text-[#233759] active:underline">
					<Link to="/">Contact</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
