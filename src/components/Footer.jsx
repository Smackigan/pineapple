import React from 'react';
import Social from './Social';
// import facebook from './img/ic_facebook-1.svg';

function Footer() {
	return (
		<>
			<div className="w-[480px] h-[1px] bg-[#E3E3E4] mt-[50px] mx-[100px]"></div>
			<div className="flex mt-[50px] mx-[218px] justify-between">
				<Social />
				<Social />
				<Social />
				<Social />
			</div>
		</>
	);
}

export default Footer;
