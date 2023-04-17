import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
import axios from 'axios';

//This defined the toast popup when a mutation or query is performed
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

//These are my async api calls using axios
export const getAsyncAlbums = createAsyncThunk('getAsyncAlbums', async () => {
	try {
		const response = await axios.get(
			'https://jsonplaceholder.typicode.com/albums?_limit=20'
		);
		const albums = await response.data;
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

export const updateAsyncAlbum =
	({ id, userId, title }) =>
	async (dispatch) => {
		// Since the results only have Ids up to 100
		if (id <= 100) {
			try {
				const response = await axios.put(
					`https://jsonplaceholder.typicode.com/albums/${id}`,
					{ id: id, userId: userId, title: title }
				);
				console.log('updateAsyncAlbums:', response.data);
				Toast.fire({
					icon: 'success',
					title: `Album ${id} updated successfully!`,
				});
				dispatch(updateAlbum(response.data));
			} catch (err) {
				console.log('err', err);
				throw new Error(err);
			}
		} else {
			dispatch(updateAlbum({ id: id, userId: userId, title: title }));
			Toast.fire({
				icon: 'success',
				title: `Album ${id} updated successfully!`,
			});
		}
	};

export const deleteAsyncAlbum =
	({ id }) =>
	async (dispatch) => {
		try {
			const response = await axios.delete(
				`https://jsonplaceholder.typicode.com/albums/${id}`
			);
			console.log('deleteAsyncAlbums:', response.data);
			Toast.fire({
				icon: 'success',
				title: `Album ${id} deleted successfully!`,
			});
			dispatch(deleteAlbum({ id }));
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

export const { addAlbum, updateAlbum, deleteAlbum, searchAlbum } =
	albumsSlice.actions;
export const showAlbums = (state) => state.albums.data;
export default albumsSlice.reducer;
