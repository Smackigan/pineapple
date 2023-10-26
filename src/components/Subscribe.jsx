import React, { useState } from 'react';
import SubscribeInfo from './SubscribeInfo';
import SubscribeInput from './SubscribeInput';
import SubscribeTerms from './SubscribeTerms';

function Subscribe() {
	const [isChecked, setIsChecked] = useState(false);
	const [error, setError] = useState('');
	const [isInputTouched, setIsInputTouched] = useState(false);

	const handleInputError = (inputError) => {
		setError(inputError);
	};

	const handleCheckboxError = (checkboxError) => {
		setError(checkboxError);
	};

	return (
		<div className="flex flex-col">
			<SubscribeInfo />
			<SubscribeInput
				isChecked={isChecked}
				setIsChecked={setIsChecked}
				error={error}
				setError={setError}
				isInputTouched={isInputTouched}
				setIsInputTouched={setIsInputTouched}
			/>
			<SubscribeTerms
				isChecked={isChecked}
				setIsChecked={setIsChecked}
				setError={setError}
				isInputTouched={isInputTouched}
				setIsInputTouched={setIsInputTouched}
			/>
		</div>
	);
}

export default Subscribe;

// w-[480px] ml-[100px]
