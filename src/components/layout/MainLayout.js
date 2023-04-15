import { Link, Outlet } from 'react-router-dom';

export default function MainLayout() {
	return (
		<>
			<nav className="p-1 bg-slate-400">
				<ul className="flex flex-row justify-center items-center gap-2 p-4">
					<li>
						<div className="text-3xl">JM</div>
					</li>
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
