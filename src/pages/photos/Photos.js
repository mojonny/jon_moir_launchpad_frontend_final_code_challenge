import React from 'react';
import './Photos.css';

export default function Photos() {
	return (
		<div>
			<h1>Photos Page</h1>
			"Photos" page https://jsonplaceholder.typicode.com/photos?_limit=20 on
			this page, it should display 20 photos with information provided by the
			api above. Then you should have a filter by albumId (from albumId=1 to
			100) then display photos with the selected albumId. for example:
			https://jsonplaceholder.typicode.com/photos?albumId=1&_limit=20. You
			should also have a reset functionality to reset the page with the initial
			20 photos.
		</div>
	);
}
