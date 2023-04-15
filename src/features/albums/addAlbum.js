import { useState, useId } from 'react';

export function AddAlbum() {
	const [title, setTitle] = useState('');
	const userId = useId();

	const handleTitle = (e) => setTitle(e.target.value);

	return (
		<div className="container">
			<div className="row">
				<h1>Add album</h1>
			</div>
			<div className="row">
				<div className="three columns">
					<label for="nameInput">Title</label>
					<input
						className="u-full-width"
						type="text"
						placeholder="test@mailbox.com"
						id="nameInput"
						onChange={handleTitle}
						value={title}
					/>
					<label for="emailInput">Your userId is {userId}</label>

					<button className="button-primary">Add album</button>
				</div>
			</div>
		</div>
	);
}
