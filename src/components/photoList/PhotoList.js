import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showPhotos } from '../../features/photos/photosSlice';
import {
	searchAsyncPhotos,
	showPhotosSearch,
} from '../../features/photos/searchPhotosSlice';
import { getAsyncPhotos } from '../../features/photos/photosSlice';
import searchButton from '../../assets/LookingGlass.png';

export default function PhotoList() {
	const [albumId, setAlbumId] = useState('');
	const [showSearch, setShowSearch] = useState(false);
	const [showAll, setShowAll] = useState(true);

	const dispatch = useDispatch();
	const photos = useSelector(showPhotos);
	const searchPhotos = useSelector(showPhotosSearch);
	console.log('search photos:', searchPhotos);

	const handleSearch = () => {
		dispatch(searchAsyncPhotos({ albumId }));
		setShowSearch(true);
		setShowAll(false);
		setAlbumId('');
	};

	const handleReset = () => {
		dispatch(getAsyncPhotos());
		setShowSearch(false);
		setShowAll(true);
		setAlbumId('');
	};

	return (
		<div className="mt-2 bg-slate-100 p-8 border-2">
			<div className="flex flex-row align-middle gap-3">
				<label className="text-3xl font-bold">Search by Album Id: </label>
				<input
					type="text"
					placeholder="Album Id "
					value={albumId}
					onChange={(e) => setAlbumId(e.target.value)}
					className="h-12 p-2 border-4 border-black"
				/>

				<button
					className="w-20 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-opacity-50 duration-300 shadow-xl"
					onClick={handleSearch}
				>
					<img src={searchButton} alt="looking glass" />
				</button>

				<button
					className="w-20 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-opacity-50 duration-300 shadow-xl"
					onClick={handleReset}
				>
					Reset
				</button>
			</div>

			<>
				{showSearch &&
					searchPhotos.map((photo, i) => (
						<div key={i} className="p-8">
							<div className="text-4xl">Title: {photo.title}</div>
							<div>
								<div>Id: {photo.id}</div>
								<div>AlbumId: {photo.albumId}</div>
							</div>

							<div className="flex flex-row gap-8">
								<div className="object-contain h-4 w-4">
									<img src={photo.url} alt="photoUrl" />
								</div>
								<div className="object-contain">
									<img src={photo.thumbnailUrl} alt="photoThumbnailUrl" />
								</div>
							</div>
						</div>
					))}

				{showAll &&
					photos.map((photo, i) => (
						<div key={i} className="p-8">
							<div className="text-4xl">Title: {photo.title}</div>
							<div>
								<div>Id: {photo.id}</div>
								<div>AlbumId: {photo.albumId}</div>
							</div>

							<div className="flex flex-row gap-8">
								<div className="object-contain h-4 w-4">
									<img src={photo.url} alt="photoUrl" />
								</div>
								<div className="object-contain">
									<img src={photo.thumbnailUrl} alt="photoThumbnailUrl" />
								</div>
							</div>
						</div>
					))}
			</>
		</div>
	);
}
