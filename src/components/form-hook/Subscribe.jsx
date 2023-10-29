import React, { useState } from 'react';
import SubscribeInfo from './SubscribeInfo';
import SubscribeInput from './SubscribeInput';
import SubscribeTerms from './SubscribeTerms';

function Subscribe() {
	return (
		<div className="flex flex-col">
			<SubscribeInfo />
			<SubscribeInput />
			<SubscribeTerms />
		</div>
	);
}

export default Subscribe;

// w-[480px] ml-[100px]
