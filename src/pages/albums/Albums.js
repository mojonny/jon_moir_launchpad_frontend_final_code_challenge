import React from 'react';
import SearchFilter from '../../components/searchFilter/SearchFilter';
import AlbumModal from '../../components/modal/AlbumModal';

export default function Albums() {
	return (
		<div>
			<AlbumModal />
			<SearchFilter />
		</div>
	);
}
