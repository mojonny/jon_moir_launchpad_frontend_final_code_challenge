import { useSelector } from 'react-redux';

export default function AlbumList() {
	const { data } = useSelector((state) => state.albums);

	return (
		<table>
			<tbody>
				{data.map(({ id, userId, title }, i) => (
					<tr key={i}>
						<td className="p-2"> id: {id} </td>
						<td> userId: {userId} </td>
						<td> Title: {title} </td>
						<td>
							<button className="p-2">Delete</button>
							<button className="p-2">Edit</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
