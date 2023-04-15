import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const albumsSlice = createSlice({
	name: 'albums',
	initialState: {
		data: [],
	},
	reducers: {
		getAlbums: (state, action) => {
			state.data = action.payload;
		},
	},
});

export const getAsyncAlbums = (data) => async (dispatch) => {
	try {
		const response = await axios.get(
			'https://jsonplaceholder.typicode.com/albums?_limit=20'
		);
		console.log('getAsyncAlbums:', response.data);
		dispatch(getAlbums(response.data));
	} catch (err) {
		console.log('err', err);
		throw new Error(err);
	}
};

export const { getAlbums } = albumsSlice.actions;
export const showAlbums = (state) => state.albums.data;
export default albumsSlice.reducer;
