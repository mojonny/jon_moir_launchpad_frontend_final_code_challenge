import React from 'react';
import SearchAlbumsFilter from '../../components/searchAlbumsFilter/SearchAlbumsFilter';
import AlbumModal from '../../components/modal/AlbumModal';

export default function Albums() {
	return (
		<div>
			<AlbumModal />
			<SearchAlbumsFilter />
		</div>
	);
}
