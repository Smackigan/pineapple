import React, { useState } from 'react';
import SubscribeInfo from './SubscribeInfo';
import SubscribeInput from './SubscribeForm';
import SubscribeTerms from './form/SubscribeTerms';
import style from './Subscribe.module.scss';

function Subscribe({ isSuccess, setIsSuccess }) {
	return (
		<div className={style.form}>
			<SubscribeInfo />
			<SubscribeInput isSuccess={isSuccess} setIsSuccess={setIsSuccess} />
		</div>
	);
}

export default Subscribe;
