import { configureStore } from '@reduxjs/toolkit';
import albumsSlice from '../features/albums/albumsSlice';
import searchAlbumSlice from '../features/albums/searchAlbumSlice';
import photosSlice from '../features/photos/photosSlice';

export default configureStore({
	reducer: {
		albums: albumsSlice,
		photos: photosSlice,
		searchAlbums: searchAlbumSlice,
	},
});
