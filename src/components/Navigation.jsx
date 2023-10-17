import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
	return (
		<nav>
			<ul className="flex flex-start gap-[30px] text-[#6A707B] text-[16px] font-normal font-arial leading-[26px] ">
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
