import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const getAsyncPhotos = createAsyncThunk('getAsyncPhotos', async () => {
	try {
		const response = await axios.get(
			'https://jsonplaceholder.typicode.com/photos?_limit=20'
		);
		const photos = await response.data;
		console.log('getAsyncPhotos:', response.data);
		return photos;
	} catch (err) {
		console.log('err', err);
		throw new Error(err);
	}
});

export const photosSlice = createSlice({
	name: 'photos',
	initialState: {
		data: [],
		loading: false,
	},
	reducers: {
		addPhoto: (state, action) => {
			state.data.push(action.payload);
		},
	},
	extraReducers: {
		[getAsyncPhotos.pending]: (state, action) => {
			state.loading = true;
		},
		[getAsyncPhotos.fulfilled]: (state, action) => {
			state.loading = false;
			state.data = [...state.data, ...action.payload];
		},
		[getAsyncPhotos.rejected]: (state, action) => {
			state.loading = false;
		},
	},
});

export const showPhotos = (state) => state.photos.data;
export default photosSlice.reducer;
