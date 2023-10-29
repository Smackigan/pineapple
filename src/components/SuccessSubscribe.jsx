import { ReactComponent as SuccessIcon } from '../assets/ic_success.svg';

function SuccessSubscribe() {
	return (
		<>
			<SuccessIcon className="sm:mt-[113px]" />
			<div className="mt-[38px] sm:mt-[35px]">
				<h2 className="text-[#131821] font-georgia text-[24px] sm:text-[32px] font-normal leading-[34px] sm:leading-[44px]">
					Thanks for subscribing!
				</h2>
				<p className="text-[#6A707B] font-arial text-[14px] sm:text-[16px] font-normal leading-[26px] sm:leading-[28px] mt-[10px] sm:mt-[15px] mb-[38px]">
					You have successfully subscribed to our email listing. Check
					your email for the discount code.
				</p>
			</div>
		</>
	);
}

export default SuccessSubscribe;
