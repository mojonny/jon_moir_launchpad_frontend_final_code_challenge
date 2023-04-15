import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	deleteAlbum,
	updateAsyncAlbum,
} from '../../features/albums/albumsSlice';

export default function AlbumList() {
	const [id, setId] = useState('');
	const [userId, setUserId] = useState('');
	const [title, setTitle] = useState('');
	// const [editId, setEditId] = useState('');
	// const [editUserId, setEditUserId] = useState('');
	// const [editTitle, setEditTitle] = useState('');

	const { data } = useSelector((state) => state.albums);

	const dispatch = useDispatch();

	const handleDelete = (id) => {
		dispatch(deleteAlbum({ id }));
	};

	const handleEditMode = ({ id, userId, title }) => {
		setId(id);
		setUserId(userId);
		setTitle(title);
	};

	const handleSubmit = () => {
		dispatch(updateAsyncAlbum({ id, userId, title }));
		setId('');
		setUserId('');
		setTitle('');
	};

	return (
		<div className="p-10">
			<div className="text-xl w-full bg-slate-400 flex flex-row gap-10 p-10">
				<div>
					<label>Id: </label>
					<input
						type="text"
						placeholder=" Enter Id"
						onChange={(e) => setId(e.target.value)}
						value={id}
					/>
					<label>UserId: </label>
					<input
						type="text"
						placeholder=" Enter UserId"
						onChange={(e) => setUserId(e.target.value)}
						value={userId}
					/>
					<label>Title: </label>
					<input
						type="text"
						placeholder=" Enter Title"
						onChange={(e) => setTitle(e.target.value)}
						value={title}
					/>
				</div>
				<button onClick={() => handleSubmit({ id, userId, title })}>
					{' '}
					Edit{' '}
				</button>
			</div>
			<table>
				<tbody>
					{data
						.slice(0)
						.reverse()
						.map(({ id, userId, title }, i) => (
							<tr key={i}>
								<td className="p-2"> Id: {id} </td>
								<td> UserId: {userId} </td>
								<td> Title: {title} </td>
								<td>
									<button
										className="p-2"
										onClick={() => handleEditMode({ id, userId, title })}
									>
										Edit
									</button>
									<button className="p-2" onClick={() => handleDelete(id)}>
										Delete
									</button>
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
}
