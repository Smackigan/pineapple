import React, { useState } from 'react';

function App() {
	const [email, setEmail] = useState('');
	const [isChecked, setIsChecked] = useState(false);
	const [emailError, setEmailError] = useState('');
	const [checkboxError, setCheckboxError] = useState('');

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
		setEmailError(''); // Reset email error when changing the value
	};

	const handleCheckboxChange = (e) => {
		setIsChecked(e.target.checked);
		setCheckboxError(''); // Reset checkbox error when changing the value
	};

	const validateEmail = (email) => {
		const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
		return regex.test(email);
	};

	const handleSubmit = () => {
		let isValid = true;

		if (!validateEmail(email)) {
			setEmailError('Email is bad');
			isValid = false;
		}

		if (!isChecked) {
			setCheckboxError('Required');
			isValid = false;
		}

		if (isValid) {
			// Add code to submit the form data
			console.log('Form submitted successfully!');
		}
	};

	return (
		<div className="p-4">
			<div className="mb-4">
				<input
					type="text"
					placeholder="Type your email address here..."
					onChange={handleEmailChange}
					value={email}
					className="border px-2 py-1 w-full"
				/>
				<span className="cursor-pointer ml-2" onClick={handleSubmit}>
					➔
				</span>
				{emailError && (
					<div className="text-red-500 mt-1">{emailError}</div>
				)}
			</div>
			<div className="mb-4">
				<input
					type="checkbox"
					onChange={handleCheckboxChange}
					checked={isChecked}
					className="mr-2"
				/>
				I agree to terms of service
				{checkboxError && (
					<div className="text-red-500 mt-1">{checkboxError}</div>
				)}
			</div>
		</div>
	);
}

export default App;
