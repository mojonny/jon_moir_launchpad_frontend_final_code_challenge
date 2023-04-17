import React, { useState, useEffect } from 'react';
import Welcome from '../../components/lotties/welcome';
import AlbumList from '../../components/albumList/AlbumList';

export default function Albums() {
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 3000);
	}, []);

	return (
		<div className="bg-darkPurple">
			<AlbumList />
			{isLoading ? <Welcome /> : null}
		</div>
	);
}
