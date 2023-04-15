import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

import { useDispatch } from 'react-redux';
import { addAsyncAlbums } from '../../features/albums/albumsSlice';

export default function AlbumModal() {
	let [isOpen, setIsOpen] = useState(false);

	let [newAlbum, setNewAlbum] = useState({
		userId: '',
		title: '',
	});

	const dispatch = useDispatch();

	const addNewAlbum = () => {
		dispatch(addAsyncAlbums(newAlbum));
		setNewAlbum({ userId: '', title: '' });
		setIsOpen(false);
	};

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	return (
		<div className="mx-8">
			<button
				type="button"
				onClick={openModal}
				className="mx-auto my-4 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-opacity-50 duration-300 shadow-xl"
			>
				Open Me
			</button>

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
									Add Album
								</Dialog.Title>
								<div className="mt-2 bg-slate-100 p-8 border-2 rounded-lg">
									<label>UserId: </label>
									<input
										className="border-2 rounded-lg m-4 p-2 w-full"
										type="text"
										placeholder="userId"
										id="titleInput"
										onChange={(e) =>
											setNewAlbum({ ...newAlbum, userId: e.target.value })
										}
										value={newAlbum.userId}
									/>
									<br />
									<label>Title: </label>
									<input
										className="border-2 rounded-lg m-4 p-2 w-full"
										type="text"
										placeholder="title"
										id="titleInput"
										onChange={(e) =>
											setNewAlbum({ ...newAlbum, title: e.target.value })
										}
										value={newAlbum.title}
									/>
								</div>
								<br />

								<div className="flex flex-row gap-4 mt-2">
									<button
										type="button"
										className="inline-flex justify-center px-4 py-2 text-sm text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 duration-300"
										onClick={addNewAlbum}
									>
										Add Album
									</button>

									<button
										type="button"
										className="inline-flex justify-center px-4 py-2 text-sm text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 duration-300"
										onClick={closeModal}
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