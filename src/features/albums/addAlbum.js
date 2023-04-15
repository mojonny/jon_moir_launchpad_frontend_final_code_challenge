import { useState } from 'react';
//import { useDispatch } from 'react-redux';
//import { useNavigate } from 'react-router-dom';
//import { addAlbums } from './albumsSlice';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function AddAlbum() {
	//const dispatch = useDispatch();
	//const navigate = useNavigate();

	const [title, setTitle] = useState('');
	const [userId, setUserId] = useState('');
	const [error, setError] = useState('');

	const handleTitle = (e) => setTitle(e.target.value);
	const handleUserId = (e) => setUserId(e.target.value);

	const handleClick = () => {
		if (title) {
			addAlbum();
			setError(null);
		} else {
			setError('Please enter title');
		}
		setTitle('');
		setUserId('');
	};

	const Toast = Swal.mixin({
		toast: true,
		position: 'top-end',
		showConfirmButton: false,
		timer: 3000,
		timerProgressBar: true,
		didOpen: (toast) => {
			toast.addEventListener('mouseenter', Swal.stopTimer);
			toast.addEventListener('mouseleave', Swal.resumeTimer);
		},
	});

	function addAlbum() {
		axios
			.post('https://jsonplaceholder.typicode.com/albums', {
				userId: userId,
				title: title,
			})
			.then((res) => {
				Toast.fire({
					icon: 'success',
					title: `Album added successfully! 
                    Title:${res.data.title}, UserId:${res.data.userId}, Id:${res.data.id}`,
				});
				console.log('SUCCESS: album created!', res.data);
			})
			.catch((error) =>
				alert(
					'ERROR: Unable to create listing, make sure you have at least one image:',
					error
				)
			);
	}

	return (
		<div className="container">
			<div className="row">
				<h1>Add album</h1>
			</div>
			<div className="row">
				<div className="three columns">
					<label>Title: </label>
					<input
						className="u-full-width"
						type="text"
						placeholder="title"
						id="titleInput"
						onChange={handleTitle}
						value={title}
					/>
					<label>UserId: </label>
					<input
						className="u-full-width"
						type="text"
						placeholder="userId"
						id="titleInput"
						onChange={handleUserId}
						value={userId}
					/>
					{error && error}
					<button onClick={handleClick} className="bg-slate-500">
						Add album
					</button>
				</div>
			</div>
		</div>
	);
}
