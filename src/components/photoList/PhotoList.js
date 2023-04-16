import { useSelector, useDispatch } from 'react-redux';
import { getAsyncPhotos, showPhotos } from '../../features/photos/photosSlice';

export default function PhotoList() {
	const dispatch = useDispatch();
	const photos = useSelector(showPhotos);

	return (
		<>
			<div className="p-4">
				<button
					className="mx-auto my-4 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-opacity-50 duration-300 shadow-xl"
					onClick={() => dispatch(getAsyncPhotos())}
				>
					Reset
				</button>
			</div>
			<div>
				{photos.map(({ albumId, id, title, url, thumbnailUrl }, i) => (
					<div key={i} className="p-8">
						<div className="text-4xl">Title: {title}</div>
						<div>
							<div>Id: {id}</div>
							<div>AlbumId: {albumId}</div>
						</div>

						<div className="flex flex-row gap-8">
							<div className="object-contain">
								<img src={url} alt="photoUrl" />
							</div>
							<div className="object-contain">
								<img src={thumbnailUrl} alt="photoThumbnailUrl" />
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
