import React from 'react';

function Logo() {
	return (
		<div>
			<img src="/img/logo_pineapple_only.svg" className="sm:hidden" />
			<img src="/img/logo_pineapple.svg" className="hidden sm:block" />
		</div>
	);
}

export default Logo;
