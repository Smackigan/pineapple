import { Link } from 'react-router-dom';

function NavigationElement({ to, text }) {
	return (
		<Link to={to}>
			<li className="hover:text-[#4066A5] hover:underline active:text-[#233759] active:underline">
				{text}
			</li>
		</Link>
	);
}

export default NavigationElement;
