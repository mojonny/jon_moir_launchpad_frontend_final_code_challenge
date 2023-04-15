import { useSelector } from 'react-redux';

export function AlbumList() {
	const albums = useSelector((state) => state.albums);

	return (
		<tbody>
			{albums.map(({ id, userId, title }, i) => (
				<tr key={i}>
					<td>{id}</td>
					<td>{userId}</td>
					<td>{title}</td>
					<td>
						<button>Delete</button>
						<button>Edit</button>
					</td>
				</tr>
			))}
		</tbody>
	);
}
