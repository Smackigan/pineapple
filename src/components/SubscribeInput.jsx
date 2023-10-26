import React, { useEffect, useState } from 'react';
import SubscribeError from './SubscribeError';

function SubscribeInput({
	isChecked,
	setIsChecked,
	isInputTouched,
	setIsInputTouched,
}) {
	const [input, setInput] = useState('');
	const [error, setError] = useState(null);

	const [isInputHovered, setIsInputHovered] = useState(false);
	const [isInputFocused, setIsInputFocused] = useState(false);

	const [isFormValid, setIsFormValid] = useState(false);
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);

	const handleFocus = () => {
		setIsInputFocused(true);
	};

	const handleBlur = () => {
		setIsInputFocused(false);
	};

	const handleHover = () => {
		setIsInputHovered(true);
	};

	const handleLeave = () => {
		setIsInputHovered(false);
	};

	const handleInputChange = (e) => {
		const inputValue = e.target.value;
		setInput(inputValue);
		setIsInputTouched(true);
		// validateInput(inputValue);
	};

	const validateInput = (input, isChecked) => {
		if (!input.trim()) {
			return 'Email address is required';
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(input)) {
			return 'Please provide a valid email address';
		} else if (input.endsWith('.co')) {
			return 'We are not accepting subscriptions from Colombia';
		} else if (!isChecked) {
			return 'You must accept the terms and conditions';
		} else {
			return null;
		}
	};

	useEffect(() => {
		console.log(isChecked, input);
	}, [isChecked, input]);

	const handleButtonClick = () => {
		if (isFormValid) {
			window.location.href = '/home';
		}
	};

	useEffect(() => {
		if (isInputTouched) {
			const validationError = validateInput(input, isChecked);
			setError(validationError);
			setIsFormValid(!validationError);
		}
	}, [input, isChecked, isInputTouched]);

	const inputClass = `leading-[24px] font-arial placeholder:text-[16px] placeholder:font-arial placeholder:font-normal relative w-full pl-[15px] sm:pl-[40px] py-[18px] sm:py-[23px] ${
		error
			? 'border-[#B80808] border-l-4 shadow-lg hover:border-[#B80808] '
			: 'border-l-4 border-l-[#4066A5]'
	} border  h-[60px] sm:h-[70px] bg-[#FFF] placeholder-[#6A707B] focus:shadow-lg hover:border-[#4066A5] hover:shadow-lg active:border-[#4066A5] outline-none`;

	return (
		<div class="flex flex-col mb-5 sm:mb-0  mt-5 sm:mt-[50px]">
			<form
				class="relative"
				onMouseEnter={handleHover}
				onMouseLeave={handleLeave}
				className={inputClass}>
				<input
					id="email"
					name="email"
					type="email"
					placeholder="Type your email address here…"
					onFocus={handleFocus}
					onBlur={handleBlur}
					value={input}
					onChange={handleInputChange}
					className="outline-none w-full"
				/>
				<button
					className="py-[20px] px-[15px] absolute left-[242px] sm:left-[414px] top-[2px] sm:top-[8px] "
					onClick={handleButtonClick}
					disabled={!isFormValid}>
					<svg
						width="24"
						height="14"
						viewBox="0 0 24 14"
						fill={
							error
								? 'rgba(19, 24, 33, 0.3)'
								: isInputHovered
								? '#4066A5'
								: isInputFocused
								? '#131821'
								: '#4066A5'
						}
						opacity={error ? 1 : isInputHovered ? 1 : 0.3}>
						<path d="M17.7071 0.2929C17.3166 -0.0976334 16.6834 -0.0976334 16.2929 0.2929C15.9023 0.683403 15.9023 1.31658 16.2929 1.70708L20.5858 5.99999H1C0.447693 5.99999 0 6.44772 0 6.99999C0 7.55227 0.447693 7.99999 1 7.99999H20.5858L16.2929 12.2929C15.9023 12.6834 15.9023 13.3166 16.2929 13.7071C16.6834 14.0976 17.3166 14.0976 17.7071 13.7071L23.7071 7.70708C24.0977 7.31658 24.0977 6.6834 23.7071 6.2929L17.7071 0.2929Z" />
					</svg>
				</button>
			</form>
			<SubscribeError error={error} />
		</div>
	);
}

export default SubscribeInput;

// className="leading-[24px] font-arial placeholder:text-16px placeholder:font-arial placeholder:font-normal relative w-full border border-[#E3E3E4] h-[70px] bg-[#FFF] placeholder-[#6A707B] hover:border-[#4066A5] focus:shadow-lg pl-[40px] py-[23px] border-l-4 border-l-[#4066A5] hover:shadow-lg "

// const validateInput = (inputValue) => {
// 	// Validate the email input
// 	if (!inputValue.trim()) {
// 		setError('Email address is required');
// 	} else if (
// 		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputValue)
// 	) {
// 		setError('Please provide a valid email address');
// 	} else if (inputValue.endsWith('.co')) {
// 		setError('We are not accepting subscriptions from Colombia');
// 	} else if (!isChecked) {
// 		setError('You must accept the terms and conditions');
// 	} else {
// 		setError(null);
// 	}

// 	// const isCheckboxValid = isChecked;
// 	const isFormValid = !error && isChecked;

// 	setIsFormValid(isFormValid);
// };
