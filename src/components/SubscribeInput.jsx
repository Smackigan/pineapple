import React, { useState } from 'react';
import SubscribeError from './SubscribeError';

function SubscribeInput() {
	const [isInputFocused, setIsInputFocused] = useState(false);

	const handleFocus = () => {
		setIsInputFocused(true);
	};

	const handleBlur = () => {
		setIsInputFocused(false);
	};

	return (
		<div class="flex flex-col mb-4 mt-[50px]">
			<div class="relative focus-within:fill-[#4066A5]">
				<input
					id="email"
					name="email"
					type="email"
					placeholder="Type your email address here…"
					onFocus={handleFocus}
					onBlur={handleBlur}
					className="leading-[24px] font-arial placeholder:text-16px placeholder:font-arial placeholder:font-normal relative w-full border border-[#E3E3E4] h-[70px] bg-[#FFF] placeholder-[#6A707B] focus:border-[#4066A5] focus:outline-none pl-[40px] py-[23px] border-l-4 border-l-[#4066A5] hover:shadow-lg "
				/>
				<div className="py-[20px] px-[15px] absolute left-[414px] top-[8px] ">
					<svg
						className={`fill-${
							isInputFocused ? '#4066A5' : '#131821'
						} opacity-${isInputFocused ? '100' : '30'}`}>
						<path d="M17.7071 0.2929C17.3166 -0.0976334 16.6834 -0.0976334 16.2929 0.2929C15.9023 0.683403 15.9023 1.31658 16.2929 1.70708L20.5858 5.99999H1C0.447693 5.99999 0 6.44772 0 6.99999C0 7.55227 0.447693 7.99999 1 7.99999H20.5858L16.2929 12.2929C15.9023 12.6834 15.9023 13.3166 16.2929 13.7071C16.6834 14.0976 17.3166 14.0976 17.7071 13.7071L23.7071 7.70708C24.0977 7.31658 24.0977 6.6834 23.7071 6.2929L17.7071 0.2929Z" />
					</svg>
				</div>
			</div>
			<SubscribeError />
		</div>
	);
}

export default SubscribeInput;