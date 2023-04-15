import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAsyncAlbums = createAsyncThunk('getAsyncAlbums', async () => {
	try {
		const response = await axios.get(
			'https://jsonplaceholder.typicode.com/albums?_limit=20'
		);
		const albums = await response.data;
		console.log('getAsyncAlbums:', response.data);
		return albums;
	} catch (err) {
		console.log('err', err);
		throw new Error(err);
	}
});

export const albumsSlice = createSlice({
	name: 'albums',
	initialState: {
		data: [],
		loading: false,
	},
	reducers: {
		addAlbums: (state, action) => {
			state.push(action.payload);
		},
	},
	extraReducers: {
		[getAsyncAlbums.pending]: (state, action) => {
			state.loading = true;
		},
		[getAsyncAlbums.fulfilled]: (state, action) => {
			state.loading = false;
			state.data = [...state.data, ...action.payload];
		},
		[getAsyncAlbums.rejected]: (state, action) => {
			state.loading = false;
		},
	},
});

export const { addAlbums } = albumsSlice.actions;
export const showAlbums = (state) => state.albums.data;
export default albumsSlice.reducer;
