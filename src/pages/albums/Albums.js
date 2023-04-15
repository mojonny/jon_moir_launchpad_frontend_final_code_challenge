import React from 'react';
import AlbumList from '../../components/albumList/AlbumList';
import AlbumModal from '../../components/modal/AlbumModal';

export default function Albums() {
	return (
		<div>
			<AlbumModal />
			<AlbumList />
		</div>
	);
}
