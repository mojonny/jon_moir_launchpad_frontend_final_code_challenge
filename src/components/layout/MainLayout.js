import { Link, Outlet } from 'react-router-dom';
import spaceType from '../../assets/spaceType.gif';
import Github from '../../assets/github.svg';
import Web from '../../assets/web.png';
import Linkedin from '../../assets/linkedin.svg';

export default function MainLayout() {
	return (
		<>
			<header className="flex flex-row justify-center bg-midnight">
				<h1 className="text-7xl  text-white px-8 pt-10 pb-2 ml-20 font-bold">
					The Search
				</h1>
				<div className="overflow-hidden">
					<img className=" -mb-48 -mt-52 -ml-80" src={spaceType} alt="space" />
				</div>
				<div className="links">
					<a href="https://github.com/mojonny">
						<img className="mt-10 h-10 w-10" src={Github} alt="github" />
					</a>
					<a href="https://www.jonnymoir.com">
						<img className="h-10 w-10" src={Web} alt="website" />
					</a>
					<a href="https://www.linkedin.com/in/jonathanmoir/">
						<img className="h-10 w-10" src={Linkedin} alt="linkedin" />
					</a>
				</div>
			</header>

			<nav className="sticky top-0 p-1 bg-midnight border-t-2 border-t-lightPurple">
				<ul className="flex flex-row justify-end gap-8 p-10">
					<li>
						<Link
							to="/"
							className="px-20 py-2 text-xl font-medium text-white bg-darkPurple rounded-md hover:bg-opacity-50 duration-300 shadow-xl border-purple border-2"
						>
							Albums
						</Link>
					</li>
					<li>
						<Link
							to="/photos"
							className="px-20 py-2 text-xl font-medium text-white bg-darkPurple rounded-md hover:bg-opacity-50 duration-300 shadow-xl  border-purple border-2"
						>
							Photos
						</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
			<footer>
				<div className="overflow-hidden ">
					<img
						className=" -mb-52 -mt-60 min-w-full"
						src={spaceType}
						alt="space"
					/>
				</div>
			</footer>
		</>
	);
}
