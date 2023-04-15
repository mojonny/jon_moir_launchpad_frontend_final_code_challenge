import React from 'react';
import AlbumList from '../../components/albumList/AlbumList';
import AddAlbum from '../../features/albums/addAlbum';

export default function Albums() {
	return (
		<div>
			<AddAlbum />
			<AlbumList />
		</div>
	);
}
