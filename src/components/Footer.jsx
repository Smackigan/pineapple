import Icons from './icons';

function Footer() {
	const socialLinks = [
		{
			icon: <Icons.Facebook />,
			url: '#',
			hoverColor: '#4267B2',
			activeColor: '#2F4A80',
		},
		{
			icon: <Icons.Instagram />,
			url: '#',
			hoverColor: '#C13584',
			activeColor: '#8F2762',
		},
		{
			icon: <Icons.Twitter />,
			url: '#',
			hoverColor: '#1DA1F2',
			activeColor: '#177FBF',
		},
		{
			icon: <Icons.Youtube />,
			url: '#',
			hoverColor: '#FF0000',
			activeColor: '#CC0000',
		},
	];

	return (
		<>
			<div className="w-[480px] h-[1px] bg-[#E3E3E4] mt-[50px] mx-[100px]"></div>
			<div className="flex mt-[50px] mx-[218px] justify-between">
				{socialLinks.map((link, index) => (
					<a key={index} href={link.url}>
						<div
							className={`icon-container w-[46px] h-[46px] border-[2px] border-[#E2E3E4] rounded-full flex items-center justify-center hover:bg-[${link.hoverColor}] hover:border-[${link.hoverColor}] active:bg-[${link.activeColor}] active:border-[${link.activeColor}]`}>
							{link.icon}
						</div>
					</a>
				))}
			</div>
		</>
	);
}

export default Footer;
