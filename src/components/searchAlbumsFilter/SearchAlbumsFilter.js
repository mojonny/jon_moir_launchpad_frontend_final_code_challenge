import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { showAlbums } from '../../features/albums/albumsSlice';
import AlbumList from '../albumList/AlbumList';

export default function SearchAlbumsFilter() {
	const [filterTerm, setFilterTerm] = useState('');

	const albums = useSelector(showAlbums);

	console.log('filter term:', filterTerm);

	console.log('albums:', albums);

	// let bird = albums.find((album) => album.id === filterTerm);
	// console.log('bird', bird);

	function filterAlbums(filterTerm) {
		if (!filterTerm) {
			return albums;
		}
		return albums.filter((album) => album.id.includes(filterTerm));
	}

	const filteredAlbums = filterAlbums(filterTerm);

	// function updateFilterHandler(event) {
	// 	setFilterTerm(event.target.value);
	// }

	return (
		<div className="p-4 bg-slate-400">
			<div className="text-3xl">Albums List</div>

			<label>Search by id: </label>

			<input
				type="number"
				className="border-2 border-black rounded-lg"
				placeholder="Search ids"
				onChange={(e) => setFilterTerm(e.target.value)}
			/>

			<AlbumList albums={filteredAlbums} />
		</div>
	);
}
