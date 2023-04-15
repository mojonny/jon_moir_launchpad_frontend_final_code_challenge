import { configureStore } from '@reduxjs/toolkit';
import albumsSlice from '../features/albums/albumsSlice';

export default configureStore({
	reducer: {
		albums: albumsSlice,
	},
});
