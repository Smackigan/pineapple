import React from 'react';

function SubscribeError({ error, checkboxError }) {
	return (
		<div className="relative min-h-[24px]">
			{error && (
				<span className="font-arial leading-[18px] font-bold text-[#B80808] text-[12px] mt-[6px] ">
					{error}
				</span>
			)}
			{checkboxError && (
				<span className="font-arial leading-[18px] font-bold text-[#B80808] text-[12px] mt-[6px] ">
					{checkboxError}
				</span>
			)}
		</div>
	);
}

export default SubscribeError;
