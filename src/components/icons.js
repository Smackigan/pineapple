import { ReactComponent as FacebookIcon } from '../assets/ic_facebook-1.svg';
import { ReactComponent as InstagramIcon } from '../assets/ic_instagram-1.svg';
import { ReactComponent as TwitterIcon } from '../assets/ic_twitter-1.svg';
import { ReactComponent as YoutubeIcon } from '../assets/ic_youtube-1.svg';

const Icons = {
	Facebook: FacebookIcon,
	Instagram: InstagramIcon,
	Twitter: TwitterIcon,
	Youtube: YoutubeIcon,
};

export default Icons;

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
