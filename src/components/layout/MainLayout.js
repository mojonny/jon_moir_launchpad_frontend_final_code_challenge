import { Link, Outlet } from 'react-router-dom';
import spaceType from '../../assets/spaceType.gif';
import fun from '../../assets/fun.png';

export default function MainLayout() {
	return (
		<>
			<nav className="p-1 bg-darkPurple">
				<div className="text-5xl text-purple p-4">THE SEARCH</div>
				<img className="h-40 object-fill rounded-xl m-2" src={fun} alt="fun" />
				<ul className="flex flex-row gap-2 p-10 bg-midnight">
					<li>
						<Link
							to="/"
							className="w-1/3 mx-auto my-4 px-4 py-2 text-lg font-medium text-white bg-darkPurple rounded-md hover:bg-opacity-50 duration-300 shadow-xl border-purple border-2"
						>
							Albums
						</Link>
					</li>
					<li>
						<Link
							to="/photos"
							className="w-1/3 mx-auto my-4 px-4 py-2 text-lg font-medium text-white bg-darkPurple rounded-md hover:bg-opacity-50 duration-300 shadow-xl  border-purple border-2"
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
