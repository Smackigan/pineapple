import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './SubscribeForm.module.scss';

function SubscribeInput({ setIsSuccess }) {
	const [value, setValue] = useState('');
	const [error, setError] = useState(null);
	const [checkboxError, setCheckboxError] = useState(null);

	const [isFormValid, setIsFormValid] = useState(false);

	const [isChecked, setIsChecked] = useState(false);
	const [isInputTouched, setIsInputTouched] = useState(false);

	const handleInputChange = (e) => {
		setValue(e.target.value);
		setIsInputTouched(true);
	};

	const handleCheckboxChange = (e) => {
		setIsChecked(e.target.checked);
		setIsInputTouched(true);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (isFormValid) {
			setIsSuccess(true);
		}
	};

	// Validation
	const validateInput = (value, isChecked) => {
		if (!value.trim()) {
			return 'Email address is required';
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
			return 'Please provide a valid email address';
		} else if (value.endsWith('.co')) {
			return 'We are not accepting subscriptions from Colombia';
		} else if (!isChecked) {
			return 'You must accept the terms and conditions';
		} else {
			return null;
		}
	};

	useEffect(() => {
		console.log(isChecked, value, isFormValid);
	}, [isChecked, value, isFormValid]);

	useEffect(() => {
		if (isInputTouched) {
			const validationError = validateInput(value, isChecked);
			setError(validationError);
			setIsFormValid(!validationError);
		}
	}, [value, isChecked, isInputTouched]);

	return (
		<>
			<div class="flex flex-col mb-5 sm:mb-0  mt-5 sm:mt-[50px]">
				<form
					onSubmit={handleSubmit}
					tabIndex="0"
					className={`${styles.formClass} ${
						error ? styles.error : ''
					}`}>
					<input
						type="email"
						name="email"
						placeholder="Type your email address here…"
						value={value}
						onChange={handleInputChange}
						className="outline-none w-full"
					/>
					<button
						className="py-[20px] px-[15px] absolute left-[236px] sm:left-[410px] top-[2px] sm:top-[8px] "
						type="submit"
						disabled={!isFormValid}>
						<svg
							className={`${styles.icon} icon`}
							width="24"
							height="14"
							viewBox="0 0 24 14"
							fill="rgba(19, 24, 33, 0.3)">
							<path d="M17.7071 0.2929C17.3166 -0.0976334 16.6834 -0.0976334 16.2929 0.2929C15.9023 0.683403 15.9023 1.31658 16.2929 1.70708L20.5858 5.99999H1C0.447693 5.99999 0 6.44772 0 6.99999C0 7.55227 0.447693 7.99999 1 7.99999H20.5858L16.2929 12.2929C15.9023 12.6834 15.9023 13.3166 16.2929 13.7071C16.6834 14.0976 17.3166 14.0976 17.7071 13.7071L23.7071 7.70708C24.0977 7.31658 24.0977 6.6834 23.7071 6.2929L17.7071 0.2929Z" />
						</svg>
					</button>
				</form>

				<div className="relative sm:min-h-[24px]">
					{error && (
						<span className={styles.errorMessage}>{error}</span>
					)}
					{checkboxError && (
						<span className={styles.errorMessage}>
							{checkboxError}
						</span>
					)}
				</div>
			</div>
			<div className="flex items-center sm:mt-[27px] z-50">
				<input
					type="checkbox"
					checked={isChecked}
					onChange={handleCheckboxChange}
					className={styles.checkboxInput}
				/>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="26"
					height="26"
					viewBox="0 0 26 26"
					fill="none"
					className="absolute peer-checked:block pointer-events-none">
					<path
						d="M19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071L6.29289 15.7071C5.90237 15.3166 5.90237 14.6834 6.29289 14.2929C6.68342 13.9024 7.31658 13.9024 7.70711 14.2929L10 16.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289Z"
						fill="white"
					/>
				</svg>

				<label className={styles.terms}>
					I agree to
					<Link to="#">
						<p className={styles.termsLink}>terms of service</p>
					</Link>
				</label>
			</div>
		</>
	);
}

export default SubscribeInput;
