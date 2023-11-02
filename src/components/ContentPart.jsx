import React from 'react';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';

function LeftPart() {
	return (
		<div className=" sm:h-[1194px] md:h-[1080px] sm:bg-gradient z-10 w-[335px] sm:w-[680px]">
			<Header />

			<Outlet />

			<Footer />
		</div>
	);
}

export default LeftPart;

// sm:h-[1194px] md:h-[1080px] sm:bg-gradient z-10 w-[335px] sm:w-[680px]
