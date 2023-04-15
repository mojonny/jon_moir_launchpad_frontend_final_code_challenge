import { Link, Outlet } from 'react-router-dom';

export default function MainLayout() {
	return (
		<>
			<nav>
				<ul>
					<li>JM</li>
					<li>
						<Link to="/">Albums</Link>
					</li>
					<li>
						<Link to="/photos">Photos</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
		</>
	);
}
