import { createSlice } from '@reduxjs/toolkit';
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

export const searchAsyncPhotos =
	({ albumId }) =>
	async (dispatch) => {
		if (albumId <= 100) {
			try {
				const response = await axios.get(
					`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}&_limit=20`
				);
				console.log('searchAsyncAlbums:', response.data);
				Toast.fire({
					icon: 'success',
					title: `Album ${albumId} found!`,
				});
				dispatch(searchPhotos(response.data));
			} catch (err) {
				console.log('err', err);
				throw new Error(err);
			}
		} else {
			Toast.fire({
				icon: 'error',
				title: `Sorry, we don't have that album`,
			});
		}
	};

export const searchPhotosSlice = createSlice({
	name: 'searchPhotos',
	initialState: {
		data: [],
	},
	reducers: {
		searchPhotos: (state, action) => {
			state.data = action.payload;
		},
	},
});

export const { searchPhotos } = searchPhotosSlice.actions;
export const showPhotosSearch = (state) => state.searchPhotos.data;
export default searchPhotosSlice.reducer;
