import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { showAlbums } from '../../features/albums/albumsSlice';
import AlbumList from '../albumList/AlbumList';

export default function SearchAlbumsFilter() {
	const [filterTerm, setFilterTerm] = useState('');

	const albums = useSelector(showAlbums);

	console.log(filterTerm);

	function filterAlbums(filterTerm) {
		if (!filterTerm) {
			return albums;
		}
		return albums.filter((item) => {
			return Object.values(item).join('').includes(filterTerm);
		});
	}

	const filteredAlbums = filterAlbums(filterTerm);

	function updateFilterHandler(event) {
		setFilterTerm(event.target.value);
	}

	return (
		<div className="p-4 bg-slate-400">
			<div className="text-3xl">Albums List</div>

			<label>Search by id: </label>

			<input
				type="text"
				className="border-2 border-black rounded-lg"
				placeholder="Pick a number between 1 and 20"
				onChange={updateFilterHandler}
			/>

			<AlbumList albums={filteredAlbums} />
		</div>
	);
}
