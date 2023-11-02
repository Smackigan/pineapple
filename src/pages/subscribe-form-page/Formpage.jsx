import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Subscribe from './subscribe-form/Subscribe';
import Footer from '../../components/Footer/Footer';
import SuccessSubscribe from './subscribe-form/success-subscribe-form/SuccessSubscribe';
// import style from './formpage.module.scss';

function Formpage() {
	const [isSuccess, setIsSuccess] = useState(false);

	return (
		<div>
			<div>
				{isSuccess ? (
					<SuccessSubscribe />
				) : (
					<Subscribe
						isSuccess={isSuccess}
						setIsSuccess={setIsSuccess}
					/>
				)}
			</div>
		</div>
	);
}

export default Formpage;
