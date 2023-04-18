import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showPhotos } from '../../features/photos/photosSlice';
import {
	searchAsyncPhotos,
	showPhotosSearch,
} from '../../features/photos/searchPhotosSlice';
import searchButton from '../../assets/LookingGlass.png';

export default function PhotoList() {
	const [albumId, setAlbumId] = useState('');
	const [showSearch, setShowSearch] = useState(false);
	const [showAll, setShowAll] = useState(true);

	const dispatch = useDispatch();
	const photos = useSelector(showPhotos);
	const searchPhotos = useSelector(showPhotosSearch);

	const handleSearch = (e) => {
		dispatch(searchAsyncPhotos({ albumId }));
		e.preventDefault();
		setShowSearch(true);
		setShowAll(false);
		setAlbumId('');
	};

	const handleReset = () => {
		if (showSearch === true) {
			setShowSearch(false);
			setShowAll(true);
			setAlbumId('');
		}
	};

	return (
		<div className="p-2">
			<div className="sticky top-20 flex flex-col md:flex-row md:place-content-end gap-4 place-items-center bg-midnight rounded-xl shadow-md shadow-purple p-4">
				<form>
					<label className="flex flex-row md:justify-end gap-3 place-items-center text-white">
						<div className="text-xs sm:text-xl font-bold">Photos search:</div>
						<input
							required
							type="text"
							placeholder="Insert album Id"
							value={albumId}
							onChange={(e) => setAlbumId(e.target.value)}
							className="border-2 rounded-lg p-2 border-purple bg-transparent text-white w-1/2 text-xs sm:text-xl"
						/>
						<button
							type="submit"
							className="p-2 bg-darkPurple rounded-md hover:bg-purple border-purple border-2 duration-300"
							onClick={handleSearch}
							disabled={!albumId}
						>
							<img src={searchButton} alt="looking glass" />
						</button>
					</label>
				</form>
				<button
					className="px-8 py-2 text-md font-bold text-white bg-darkPurple rounded-md hover:bg-purple border-purple border-2 duration-300"
					onClick={
						handleReset || window.scrollTo({ top: 0, behavior: 'smooth' })
					}
				>
					RESET
				</button>
			</div>

			{/* Hide search results until a search is performed */}
			{showSearch && (
				<div className="flex flex-wrap rounded-xl gap-6 m-8 p-4 bg-darkPurple shadow-purple shadow-xl">
					{searchPhotos.map((photo, i) => (
						<div
							key={i}
							className=" bg-midnight rounded-xl gap-6 m-8 p-4 text-purple w-64 shadow-purple shadow-lg"
						>
							<div className="flex flex-col xl:flex xl:flex-row p-4 gap-2 place-items-baseline">
								<div className="text-4xl md:text-8xl">{photo.albumId}</div>
								<div className="text-white text-xs">albumID</div>
								<div className="text-2xl md:text-4xl">{photo.id}</div>
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

			{/* Hide the original 20 photos when a search is performed */}
			{showAll && (
				<div className="flex flex-wrap rounded-xl gap-6 m-8 p-4 bg-darkPurple shadow-purple shadow-xl">
					{photos.map((photo, i) => (
						<div
							key={i}
							className=" bg-midnight rounded-xl gap-6 m-8 p-4 text-purple w-64 shadow-purple shadow-lg"
						>
							<div className="flex flex-col md:flex md:flex-row p-4 gap-2 place-items-baseline">
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
		</div>
	);
}
