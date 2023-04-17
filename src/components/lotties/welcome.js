import React from 'react';
import { useLottie } from 'lottie-react';
import welcome from './welcome.json';

import './welcome.css';

export default function Welcome() {
	const options = {
		animationData: welcome,
		loop: true,
	};

	const { View } = useLottie(options);
	return (
		<div className="welcome-layout fadeout">
			<div className="animation">{View}</div>
		</div>
	);
}
