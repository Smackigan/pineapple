import React, { useState } from 'react';
import Subscribe from './subscribe-form/Subscribe';
import SuccessSubscribe from './subscribe-form/success-subscribe-form/SuccessSubscribe';

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
