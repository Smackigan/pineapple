import React from 'react';
import Header from './Header';
import Subscribe from './Subscribe';
import Footer from './Footer';

function Sidebar() {
	return (
		<div>
			<div className="w-[680px] bg-gradient-to-t from-[#FFFFFF] to-[#F2F5FA]  left-[80px]">
				<Header />
				<Subscribe />
				<Footer />
			</div>
		</div>
	);
}

export default Sidebar;
