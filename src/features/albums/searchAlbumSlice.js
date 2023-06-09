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

export const searchAsyncAlbum =
	({ id }) =>
	async (dispatch) => {
		// Search the jsonplaceholder api which only has ids from 1 to 100
		if (id <= 100 && id > 0) {
			try {
				const response = await axios.get(
					`https://jsonplaceholder.typicode.com/albums/${id}`
				);
				console.log('searchAsyncAlbums:', response.data);
				Toast.fire({
					icon: 'success',
					title: `Album ${id} found!`,
				});
				dispatch(searchAlbum(response.data));
			} catch (err) {
				console.log('err', err);
				throw new Error(err);
			}
		} else {
			Toast.fire({
				icon: 'error',
				title: `Sorry, we don't have that id`,
			});
		}
	};

export const searchAlbumSlice = createSlice({
	name: 'searchAlbums',
	initialState: {
		data: [],
	},
	reducers: {
		searchAlbum: (state, action) => {
			state.data = action.payload;
		},
	},
});

export const { searchAlbum } = searchAlbumSlice.actions;
export const showAlbumSearch = (state) => state.searchAlbums.data;
export default searchAlbumSlice.reducer;
