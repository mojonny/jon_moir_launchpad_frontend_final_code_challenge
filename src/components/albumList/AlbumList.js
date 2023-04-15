import { useSelector, useDispatch } from 'react-redux';
import { deleteAlbum } from '../../features/albums/albumsSlice';

export default function AlbumList() {
	const { data } = useSelector((state) => state.albums);

	const dispatch = useDispatch();

	const handleDelete = (id) => {
		dispatch(deleteAlbum({ id }));
	};

	return (
		<>
			<table>
				<tbody>
					{data.map(({ id, userId, title }, i) => (
						<tr key={i}>
							<td className="p-2"> Id: {id} </td>
							<td> UserId: {userId} </td>
							<td> Title: {title} </td>
							<td>
								<button className="p-2" onClick={() => handleDelete(id)}>
									Delete
								</button>
								<button className="p-2">Edit</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}
