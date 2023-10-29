import { ReactComponent as LogoPineapple } from '../assets/logo_pineapple.svg';
import { ReactComponent as LogoPineappleOnly } from '../assets/logo_pineapple_only.svg';

function Logo() {
	return (
		<div>
			<LogoPineappleOnly className="sm:hidden" />
			<LogoPineapple className="hidden sm:block" />
		</div>
	);
}

export default Logo;
