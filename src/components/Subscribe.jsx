import React from 'react';
import SubscribeInfo from './SubscribeInfo';
import SubscribeInput from './SubscribeInput';
import SubscribeTerms from './SubscribeTerms';

function Subscribe() {
	return (
		<div className="w-[480px] ml-[100px]">
			<SubscribeInfo />
			<SubscribeInput />
			<SubscribeTerms />
		</div>
	);
}

export default Subscribe;
