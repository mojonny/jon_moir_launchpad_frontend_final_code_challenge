import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showPhotos, getAsyncPhotos } from '../../features/photos/photosSlice';
import PhotoList from '../photoList/PhotoList';

export default function SearchPhotosFilter() {
	const [filterTerm, setFilterTerm] = useState('');
	const dispatch = useDispatch();

	const photos = useSelector(showPhotos);

	function filterPhotos(filterTerm) {
		if (!filterTerm) {
			return photos;
		}
		return photos.filter((item) => {
			return Object.values(item).join('').includes(filterTerm);
		});
	}

	const filteredPhotos = filterPhotos(filterTerm);

	function updateFilterHandler(event) {
		setFilterTerm(event.target.value);
	}

	return (
		<div className="p-4 bg-slate-400">
			<div className="text-3xl">Photos List</div>

			<label>Search by id: </label>

			<input
				type="text"
				className="border-2 border-black rounded-lg"
				onChange={updateFilterHandler}
			/>

			<div className="p-4">
				<button
					className="mx-auto my-4 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-opacity-50 duration-300 shadow-xl"
					onClick={() => dispatch(getAsyncPhotos())}
				>
					Reset
				</button>
			</div>

			<PhotoList photos={filteredPhotos} />
		</div>
	);
}
