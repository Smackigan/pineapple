import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function SubscribeTerms({ setIsInputTouched }) {
	const { control } = useForm();

	return (
		<div className="flex items-center sm:mt-[27px]">
			<Controller
				name="terms"
				control={control}
				defaultValue={false}
				rules={{
					validate: (value) =>
						value || 'You must accept the terms and conditions',
				}}
				render={({ field }) => (
					<>
						<input
							{...field}
							type="checkbox"
							className="w-[26px] h-[26px] relative peer appearance-none text-blue-600 border-[#E3E3E4] rounded-[3px] border-[1px] bg-white checked:bg-[#233759] active:bg-[#4066A5] checked:border-0 focus:outline-none focus:ring-offset-0"
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
					</>
				)}
			/>

			<label className="ml-4 inline-flex text-[#6A707B] font-arial text-[16px] font-normal leading-[26px]">
				I agree to
				<Link to="/">
					<p className="text-[#131821] ml-1 underline font-arial text-[16px] font-normal leading-[26px] hover:text-[#4066A5] visited:text-[#233759]">
						terms of service
					</p>
				</Link>
			</label>
		</div>
	);
}

export default SubscribeTerms;

/* <a
					href="/"
					className="text-[#131821] underline font-arial text-[16px] font-normal leading-[26px] hover:text-[#4066A5] active:text-[#233759]">
					terms of service
				</a> */
