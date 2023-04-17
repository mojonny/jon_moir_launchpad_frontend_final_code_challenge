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
import AlbumModal from '../../components/modal/AlbumModal';

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
		<div className="p-8">
			<form className="sticky top-36 flex flex-row justify-items-center justify-center bg-midnight rounded-xl shadow-md shadow-purple p-8">
				<label className="flex flex-row gap-3  text-white font-bold mr-3">
					<div className="text-4xl mt-2">Search:</div>
					<input
						required
						type="text"
						placeholder=" id "
						value={id}
						onChange={(e) => setId(e.target.value)}
						className="border-2 rounded-lg p-2 border-purple bg-transparent text-white w-60"
					/>
					<button
						type="submit"
						className="px-4 py-4 bg-darkPurple rounded-md hover:bg-purple border-purple border-2 duration-300"
						onClick={handleSearch}
						disabled={!id}
					>
						<img src={searchButton} alt="looking glass" />
					</button>
				</label>
				<AlbumModal />
			</form>

			{showSearch && (
				<div className="flex flex-wrap rounded-xl gap-6 mb-40 m-8 p-4 bg-darkPurple shadow-purple shadow-xl">
					{
						<div
							className=" bg-midnight rounded-xl gap-6 m-8 p-4 text-purple w-1/4 shadow-purple shadow-lg"
							key={searchAlbum.id}
						>
							<div className="flex flex-row gap-4 p-4 justify-end">
								<button
									className="text-sm font-medium text-white rounded-md hover:bg-opacity-50 duration-300 shadow-xl bg-midnight py-2 px-4 border-2 border-lightPurple"
									onClick={() =>
										handleEditMode(
											searchAlbum.id,
											searchAlbum.userId,
											searchAlbum.title
										)
									}
								>
									EDIT
								</button>

								<button
									className="text-sm font-medium text-white rounded-md hover:bg-opacity-50 duration-300 shadow-xl bg-midnight py-2 px-4 border-2 border-lightPurple"
									onClick={() =>
										handleDelete(searchAlbum.id) ||
										setShowSearch(false) ||
										setShowAll(true)
									}
								>
									DEL
								</button>
							</div>

							<div className="flex flex-row -mt-14 p-4 gap-2 place-items-baseline">
								<div className="text-8xl">{searchAlbum.id} </div>
								<div className="text-white text-xs">ID</div>
								<div className="text-4xl">{searchAlbum.userId} </div>
								<div className="text-white text-xs">userID</div>
							</div>
							<div></div>
							<div className="border-t-lightPurple border-t-2 p-1">
								{' '}
								Title:{searchAlbum.title}
							</div>
						</div>
					}
				</div>
			)}

			{showAll && (
				<div className="flex flex-wrap rounded-xl gap-6 m-8 p-4 bg-darkPurple shadow-purple shadow-xl">
					{albums.map((album, i) => (
						<div
							className=" bg-midnight rounded-xl gap-6 m-8 p-4 text-purple w-1/4 shadow-purple shadow-lg"
							key={i}
						>
							<div className="flex flex-row gap-4 p-4 justify-end">
								<button
									className="text-sm font-medium text-white rounded-md hover:bg-opacity-50 duration-300 shadow-xl bg-midnight py-2 px-4 border-2 border-lightPurple"
									onClick={() =>
										handleEditMode(album.id, album.userId, album.title)
									}
								>
									EDIT
								</button>

								<button
									className="text-sm font-medium text-white rounded-md hover:bg-opacity-50 duration-300 shadow-xl bg-midnight py-2 px-4 border-2 border-lightPurple"
									onClick={() => handleDelete(album.id)}
								>
									DEL
								</button>
							</div>
							<div className="flex flex-row -mt-14 p-4 gap-2 place-items-baseline">
								<div className="text-8xl">{album.id}</div>
								<div className="text-white text-xs">ID</div>
								<div className="text-4xl">{album.userId}</div>
								<div className="text-white text-xs">userID</div>
							</div>
							<div className="border-t-lightPurple border-t-2 p-1">
								Title:{album.title}
							</div>
						</div>
					))}
				</div>
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
							<div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-midnight shadow-xl shadow-purple rounded-lg">
								<Dialog.Title
									as="h3"
									className="text-2xl font-medium leading-6 text-white"
								>
									EDIT ALBUM
								</Dialog.Title>
								<div className="mt-2 p-8 bg-darkPurple border-2 rounded-lg border-lightPurple text-white">
									<label>Id: </label>
									<div
										className="border-2 rounded-lg m-4 p-2 w-full border-lightPurple bg-transparent"
										type="text"
										placeholder=" Enter Id"
										value={id}
									>
										{id}
									</div>
									<label>UserId: </label>
									<input
										className="border-2 rounded-lg m-4 p-2 w-full border-lightPurple bg-transparent"
										type="text"
										placeholder=" Enter UserId"
										onChange={(e) => setUserId(e.target.value)}
										value={userId}
									/>
									<label>Title: </label>
									<input
										className="border-2 rounded-lg m-4 p-2 w-full border-lightPurple bg-transparent"
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
										className="inline-flex justify-center px-4 py-2 text-sm text-white bg-darkPurple rounded-md hover:bg-purple border-purple border-2 duration-300"
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
										className="inline-flex justify-center px-4 py-2 text-sm text-white bg-darkPurple rounded-md hover:bg-purple border-purple border-2 duration-300"
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
