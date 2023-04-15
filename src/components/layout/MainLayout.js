import { Link, Outlet } from 'react-router-dom';

export function MainLayout() {
	return (
		<>
			<nav>
				<ul>
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
