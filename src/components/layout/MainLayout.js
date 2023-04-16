import { Link, Outlet } from 'react-router-dom';

export default function MainLayout() {
	return (
		<>
			<nav className="p-1 bg-slate-400">
				<ul className="flex flex-row justify-center items-center gap-2 p-4">
					<li>
						<div>JM</div>
					</li>
					<li>
						<Link
							to="/"
							className="mx-auto my-4 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-opacity-50 duration-300 shadow-xl"
						>
							Albums
						</Link>
					</li>
					<li>
						<Link
							to="/photos"
							className="mx-auto my-4 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-opacity-50 duration-300 shadow-xl"
						>
							Photos
						</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
		</>
	);
}
