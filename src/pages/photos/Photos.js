import React, { useState, useEffect } from 'react';
import Welcome from '../../components/lotties/welcome';
import PhotoList from '../../components/photoList/PhotoList';

export default function Photos() {
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 3000);
	}, []);

	return (
		<div className="bg-darkPurple">
			<PhotoList />
			{isLoading ? <Welcome /> : null}
		</div>
	);
}
