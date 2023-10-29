import React, { useState } from 'react';
import Header from './Header';
import Subscribe from './Subscribe';
import Footer from './Footer';
import SuccessSubscribe from './SuccessSubscribe';

function Content() {
	const [isSuccess, setIsSuccess] = useState(false);

	return (
		<div>
			<div className="relative mt-[189px] sm:mt-0 ml-[20px] sm:ml-0 w-[335px] sm:w-[680px] h-[368px] sm:h-[1194px] md:h-[1080px] bg-gradient z-10 sm:z-1 py-[30px] sm:py-0 px-[20px] sm:px-[100px]">
				<Header className="hidden sm:block" />
				{isSuccess ? (
					<SuccessSubscribe />
				) : (
					<Subscribe
						isSuccess={isSuccess}
						setIsSuccess={setIsSuccess}
					/>
				)}
				<Footer />
			</div>
		</div>
	);
}

export default Content;
