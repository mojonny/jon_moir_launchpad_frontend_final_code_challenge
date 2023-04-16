import { Link, Outlet } from 'react-router-dom';
import spaceType from '../../assets/spaceType.gif';

export default function MainLayout() {
	return (
		<>
			<nav className="p-1 bg-midnight">
				<div className="text-5xl text-purple bg-midnight">THE SEARCH</div>
				<ul className="flex flex-row gap-2 p-10">
					<li>
						<Link
							to="/"
							className="w-1/3 mx-auto my-4 px-4 py-2 text-sm font-medium text-white bg-darkPurple rounded-md hover:bg-opacity-50 duration-300 shadow-xl border-purple border-2"
						>
							Albums
						</Link>
					</li>
					<li>
						<Link
							to="/photos"
							className="w-1/3 mx-auto my-4 px-4 py-2 text-sm font-medium text-white bg-darkPurple rounded-md hover:bg-opacity-50 duration-300 shadow-xl  border-purple border-2"
						>
							Photos
						</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
			<img className="min-w-full" src={spaceType} alt="space" />
		</>
	);
}
