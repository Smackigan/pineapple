import React from 'react';
import SubscribeInfo from './SubscribeInfo';
import SubscribeInput from './SubscribeInput';
import SubscribeTerms from './SubscribeTerms';
import Footer from './Footer';

function Subscribe() {
	return (
		<div className="flex flex-col">
			<SubscribeInfo />
			<SubscribeInput />
			<SubscribeTerms />
			{/* <Footer /> */}
		</div>
	);
}

export default Subscribe;

// w-[480px] ml-[100px]
