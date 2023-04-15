import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';

export default function Albums() {
	const [albums, setAlbums] = useState([]);

	useEffect(() => {
		const url = 'https://jsonplaceholder.typicode.com/albums?_limit=20';

		axios
			.get(url)
			.then((res) => {
				setAlbums(res.data);
				console.log(res.data);
			})
			.catch((error) => console.log('ERROR: Unable to retrieve deals:', error));
	}, []);

	const albumComponents = albums.map((product) => (
		<div key={product.id}>
			{product.userId}
			{product.title}
		</div>
	));
	return <div>{albumComponents}</div>;
}
