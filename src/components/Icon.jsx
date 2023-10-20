import React, { useState } from 'react';
import Icons from './icons';

function Icon({ iconName, hoverColor, defaultColor }) {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const icon = Icons[iconName];

	return (
		<div
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className={`relative ${isHovered ? `hover:bg-${hoverColor}` : ''}`}>
			<svg
				width="8"
				height="16"
				fill={`#${isHovered ? hoverColor : defaultColor}`}
				opacity={isHovered ? '1' : '0.3'}>
				<path d={icon.path} />
			</svg>
		</div>
	);
}

export default Icon;
