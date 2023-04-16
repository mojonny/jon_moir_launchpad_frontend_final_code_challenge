export default function PhotoList({ photos }) {
	return (
		<div>
			{photos.map(({ albumId, id, title, url, thumbnailUrl }, i) => (
				<div key={i} className="p-8">
					<div className="text-4xl">Title: {title}</div>
					<div>
						<div>Id: {id}</div>
						<div>AlbumId: {albumId}</div>
					</div>

					<div className="flex flex-row gap-8">
						<div className="object-contain h-4 w-4">
							<img src={url} alt="photoUrl" />
						</div>
						<div className="object-contain">
							<img src={thumbnailUrl} alt="photoThumbnailUrl" />
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
