import { Link, Outlet } from 'react-router-dom';
import spaceType from '../../assets/spaceType.gif';
import pizza from '../../assets/pizzabox_cutout_rgb.png';
import Github from '../../assets/github.svg';
import Web from '../../assets/web.png';
import Linkedin from '../../assets/linkedin.svg';

export default function MainLayout() {
	return (
		<>
			{/* This has my links and cool gif made on a space type generator */}
			<header className=" bg-midnight flex flex-col place-items-center p-4 border-t-8 border-t-lightPurple">
				<h1 className="text-7xl text-white font-bold">"The Search"</h1>

				<img className="h-1/5 w-1/5 object-contain" src={pizza} alt="space" />

				<div className="flex flex-row justify-between gap-20 w-3/4">
					<a href="https://github.com/mojonny/jon_moir_launchpad_frontend_final_code_challenge">
						<img
							className="h-10 w-10 object-contain"
							src={Github}
							alt="github"
						/>
					</a>
					<a href="https://www.jonnymoir.com">
						<img className="h-10 w-10 object-contain" src={Web} alt="website" />
					</a>
					<a href="https://www.linkedin.com/in/jonathanmoir/">
						<img
							className="h-10 w-10 object-contain"
							src={Linkedin}
							alt="linkedin"
						/>
					</a>
				</div>
			</header>

			<nav className="sticky top-0 p-1 bg-midnight border-t-8 border-t-lightPurple ">
				<ul
					className="
				 }
				 flex flex-row gap-8 justify-end my-4
				 sm:flex xs:flex-row sm:gap-8 sm:justify-end 
				md:flex md:flex-row md:gap-8 md:justify-end 
				lg:flex lg:flex-row lg:justify-end lg:gap-8"
				>
					<li>
						<Link
							to="/"
							className="text-xs sm:px-9 sm:text-sm md:px-18 xl:px-20 md:text-xl p-2 font-medium text-white bg-darkPurple rounded-md hover:bg-purple duration-300 shadow-md shadow-purple border-purple border-b-2 "
						>
							Albums
						</Link>
					</li>
					<li>
						<Link
							to="/photos"
							className="text-xs sm:px-9 sm:text-sm md:px-18 md:text-xl xl:px-20 p-2 font-medium text-white bg-darkPurple rounded-md hover:bg-purple duration-300 shadow-md shadow-purple border-purple border-b-2 "
						>
							Photos
						</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
			<footer>
				<div className="overflow-hidden border-t-8 border-t-lightPurple">
					<img
						className=" -mb-40 -mt-52 min-w-full"
						src={spaceType}
						alt="space"
					/>
				</div>
			</footer>
		</>
	);
}
