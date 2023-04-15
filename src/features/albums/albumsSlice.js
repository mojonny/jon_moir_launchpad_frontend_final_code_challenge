import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
import axios from 'axios';

const Toast = Swal.mixin({
	toast: true,
	position: 'top-end',
	showConfirmButton: false,
	timer: 3000,
	timerProgressBar: true,
	didOpen: (toast) => {
		toast.addEventListener('mouseenter', Swal.stopTimer);
		toast.addEventListener('mouseleave', Swal.resumeTimer);
	},
});

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

export const addAsyncAlbums = (data) => async (dispatch) => {
	try {
		const response = await axios.post(
			'https://jsonplaceholder.typicode.com/albums?_limit=20',
			data
		);
		console.log('addAsyncAlbums:', response.data);
		Toast.fire({
			icon: 'success',
			title: `Album added successfully!
			Title:${response.data.title}, UserId:${response.data.userId}, Id:${response.data.id}`,
		});
		dispatch(addAlbum(response.data));
	} catch (err) {
		console.log('err', err);
		throw new Error(err);
	}
};

export const albumsSlice = createSlice({
	name: 'albums',
	initialState: {
		data: [],
		loading: false,
	},
	reducers: {
		addAlbum: (state, action) => {
			state.data.push(action.payload);
		},
		updateAlbum(state, action) {
			const { id, userId, title } = action.payload;
			const existingAlbum = state.data.find((album) => album.id === id);
			if (existingAlbum) {
				existingAlbum.title = title;
				existingAlbum.userId = userId;
			}
		},
		deleteAlbum(state, action) {
			const { id } = action.payload;
			const existingAlbum = state.data.find((album) => album.id === id);
			if (existingAlbum) {
				state.data = state.data.filter((album) => album.id !== id);
			}
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

export const { addAlbum, updateAlbum, deleteAlbum } = albumsSlice.actions;
export const showAlbums = (state) => state.albums.data;
export default albumsSlice.reducer;
