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
		<div className="p-8">
			<div className="flex flex-row mx-auto gap-4 bg-midnight rounded-xl shadow-md shadow-purple p-2">
				<label className="text-xl text-white font-bold p-2">Search: </label>
				<input
					type="text"
					placeholder="Album Id"
					value={albumId}
					onChange={(e) => setAlbumId(e.target.value)}
					className="border-2 rounded-lg p-2 border-purple bg-transparent text-white"
				/>

				<button
					className="inline-flex justify-center px-4 py-2 text-sm text-white bg-darkPurple rounded-md hover:bg-purple border-purple border-2 duration-300"
					onClick={handleSearch}
					disabled={!albumId}
				>
					<img src={searchButton} alt="looking glass" />
				</button>

				<button
					className="inline-flex justify-center px-4 py-3 text-sm text-white bg-darkPurple rounded-md hover:bg-purple border-purple border-2 duration-300"
					onClick={handleReset}
				>
					RESET
				</button>
			</div>

			<>
				{showSearch && (
					<div className="flex flex-wrap rounded-xl gap-6 m-8 p-4 bg-darkPurple shadow-purple shadow-xl">
						{searchPhotos.map((photo, i) => (
							<div
								key={i}
								className=" bg-midnight rounded-xl gap-6 m-8 p-4 text-purple w-1/4 shadow-purple shadow-lg"
							>
								<div
									div
									className="flex flex-row -mt-16 p-4 gap-2 place-items-baseline"
								>
									<div className="text-8xl">{photo.albumId}</div>
									<div className="text-white text-xs">albumID</div>
									<div className="text-4xl">{photo.id}</div>
									<div className="text-white text-xs">ID</div>
								</div>

								<div className="flex flex-row gap-2">
									<div className="object-cover">
										<img src={photo.url} alt="photoUrl" />
									</div>
									<div className="object-cover">
										<img src={photo.thumbnailUrl} alt="photoThumbnailUrl" />
									</div>
								</div>

								<div className="border-t-lightPurple border-t-2 p-1 mt-2">
									Title:{photo.title}
								</div>
							</div>
						))}
					</div>
				)}

				{showAll && (
					<div className="flex flex-wrap rounded-xl gap-6 m-8 p-4 bg-darkPurple shadow-purple shadow-xl">
						{photos.map((photo, i) => (
							<div
								key={i}
								className=" bg-midnight rounded-xl gap-6 m-8 p-4 text-purple w-1/4 shadow-purple shadow-lg"
							>
								<div
									div
									className="flex flex-row -mt-16 p-4 gap-2 place-items-baseline"
								>
									<div className="text-8xl">{photo.albumId}</div>
									<div className="text-white text-xs">albumID</div>
									<div className="text-4xl">{photo.id}</div>
									<div className="text-white text-xs">ID</div>
								</div>

								<div className="flex flex-row gap-2">
									<div className="object-cover">
										<img src={photo.url} alt="photoUrl" />
									</div>
									<div className="object-cover">
										<img src={photo.thumbnailUrl} alt="photoThumbnailUrl" />
									</div>
								</div>

								<div className="border-t-lightPurple border-t-2 p-1 mt-2">
									Title:{photo.title}
								</div>
							</div>
						))}
					</div>
				)}
			</>
		</div>
	);
}
