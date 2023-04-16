import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	deleteAsyncAlbum,
	updateAsyncAlbum,
	showAlbums,
} from '../../features/albums/albumsSlice';
import {
	searchAsyncAlbum,
	showAlbumSearch,
} from '../../features/albums/searchAlbumSlice';
import searchButton from '../../assets/LookingGlass.png';

export default function AlbumList() {
	const [id, setId] = useState('');
	const [userId, setUserId] = useState('');
	const [title, setTitle] = useState('');
	let [isOpen, setIsOpen] = useState(false);
	const [showSearch, setShowSearch] = useState(false);
	const [showAll, setShowAll] = useState(true);

	const dispatch = useDispatch();
	const albums = useSelector(showAlbums);
	const searchAlbum = useSelector(showAlbumSearch);

	const handleDelete = (id) => {
		dispatch(deleteAsyncAlbum({ id }));
	};

	const handleEditMode = (id, userId, title) => {
		setId(id);
		setUserId(userId);
		setTitle(title);
		setIsOpen(true);
	};

	const handleSubmit = () => {
		dispatch(updateAsyncAlbum({ id, userId, title }));
		setId('');
		setUserId('');
		setTitle('');
		setIsOpen(false);
	};

	const handleSearch = () => {
		dispatch(searchAsyncAlbum({ id }));
		setShowSearch(true);
		setShowAll(false);
		setId('');
	};

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<div className="mt-2 bg-slate-100 p-8 border-2 rounded-lg">
			<div className="flex flex-row align-middle gap-4">
				<label className="text-3xl font-bold">Search by id: </label>
				<input
					type="text"
					placeholder=" id "
					value={id}
					onChange={(e) => setId(e.target.value)}
					className="h-12 p-2 border-4 border-black"
				/>

				<button onClick={handleSearch} disabled={!id}>
					<img src={searchButton} alt="looking glass" />
				</button>
			</div>

			{showSearch && (
				<table>
					<tbody>
						{
							<tr key={searchAlbum.id}>
								<td className="p-2"> Id: {searchAlbum.id} </td>
								<td> UserId: {searchAlbum.userId} </td>
								<td> Title: {searchAlbum.title} </td>
								<td className="flex flex-row gap-4 p-4">
									<button
										className="mx-auto my-4 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-opacity-50 duration-300 shadow-xl"
										onClick={() =>
											handleEditMode(
												searchAlbum.id,
												searchAlbum.userId,
												searchAlbum.title
											)
										}
									>
										Edit
									</button>

									<button
										className="mx-auto my-4 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-opacity-50 duration-300 shadow-xl"
										onClick={() =>
											handleDelete(searchAlbum.id) ||
											setShowSearch(false) ||
											setShowAll(true)
										}
									>
										Delete
									</button>
								</td>
							</tr>
						}
					</tbody>
				</table>
			)}

			{showAll && (
				<table>
					<tbody>
						{albums.map((album, i) => (
							<tr key={i}>
								<td className="p-2"> Id: {album.id} </td>
								{/* <td> UserId: {album.userId} </td> */}
								<td> Title: {album.title} </td>
								<td className="flex flex-row gap-4 p-4">
									<button
										className="mx-auto my-4 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-opacity-50 duration-300 shadow-xl"
										onClick={() =>
											handleEditMode(album.id, album.userId, album.title)
										}
									>
										Edit
									</button>

									<button
										className="mx-auto my-4 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-opacity-50 duration-300 shadow-xl"
										onClick={() => handleDelete(album.id)}
									>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog
					as="div"
					className="fixed inset-0 z-10 overflow-y-auto"
					onClose={closeModal}
				>
					<div className="min-h-screen px-4 text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Dialog.Overlay className="fixed inset-0" />
						</Transition.Child>

						{/* This element is to trick the browser into centering the modal contents. */}
						<span
							className="inline-block h-screen align-middle"
							aria-hidden="true"
						>
							&#8203;
						</span>
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
								<Dialog.Title
									as="h3"
									className="text-2xl font-medium leading-6 text-gray-900"
								>
									Edit Album
								</Dialog.Title>
								<div className="mt-2 bg-slate-100 p-8 border-2 rounded-lg">
									<label>Id: </label>
									<div
										className="border-2 rounded-lg m-4 p-2 w-full"
										type="text"
										placeholder=" Enter Id"
										value={id}
									>
										{id}
									</div>
									<label>UserId: </label>
									<input
										className="border-2 rounded-lg m-4 p-2 w-full"
										type="text"
										placeholder=" Enter UserId"
										onChange={(e) => setUserId(e.target.value)}
										value={userId}
									/>
									<label>Title: </label>
									<input
										className="border-2 rounded-lg m-4 p-2 w-full"
										type="text"
										placeholder=" Enter Title"
										onChange={(e) => setTitle(e.target.value)}
										value={title}
									/>
								</div>
								<br />

								<div className="flex flex-row gap-4 mt-2">
									<button
										type="button"
										className="inline-flex justify-center px-4 py-2 text-sm text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 duration-300"
										onClick={() =>
											handleSubmit({ id, userId, title }) ||
											setShowSearch(false) ||
											setShowAll(true)
										}
									>
										Save
									</button>

									<button
										type="button"
										className="inline-flex justify-center px-4 py-2 text-sm text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 duration-300"
										onClick={
											closeModal || setShowSearch(false) || setShowAll(true)
										}
									>
										Close
									</button>
								</div>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
		</div>
	);
}
