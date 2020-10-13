import { useState, useEffect } from 'react';
import NextLink from 'next/link';
import {
	FiMenu as MenuIcon,
	FiX as CrossIcon,
} from 'react-icons/fi';
import Link from './link';
import Logo from './logo';

const Nav = () => {
	const [isNavTop, setIsNavTop] = useState(true);
	const [isNavToggled, setIsNavToggled] = useState(false);

	const handleScroll = () => {
		const scroll = document.body.scrollTop || document.documentElement.scrollTop;
		setIsNavTop(!(scroll > 0));
	};

	useEffect(() => {
		document.addEventListener('scroll', handleScroll);
		return () => document.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav className={`transition-all ease-in duration-200 fixed w-full ${isNavTop ? 'h-40 text-white' : 'h-24 text-gray-500 bg-black'} z-10 top-0`}>
			<div className="relative flex items-center justify-between h-full w-10/12 lg:w-11/12 m-auto">
				<Link
					as={NextLink}
					href="/"
				>
					<a className={`transition duration-200 ease-in ${isNavTop ? 'hover:text-gray-500 focus:text-gray-500' : 'hover:text-white focus:text-white'} focus:outline-none pb-4`}>
						<Logo />
					</a>
				</Link>
				<div className="flex items-center font-space h-full ml-2">
					<div className="flex-1 flex items-stretch justify-start">
						<div className={`${isNavToggled ? 'block opacity-100' : 'hidden opacity-0'} mr-4 lg:mr-7 flex tracking-wider uppercase`}>
							<Link
								as={NextLink}
								href="/archive"
							>
								<a className="ml-3 lg:ml-4 px-2 md:px-3 lg:px-4 py-2 text-base font-medium leading-5 text-gray-500 hover:text-white focus:outline-none focus:text-white transition duration-150 ease-in-out">
									Archive
								</a>
							</Link>
						</div>
						<button
							className="inline-flex items-center justify-center lg:px-2 text-gray-500 hover:text-white focus:outline-none transition duration-150 ease-in-out w-full"
							aria-label="Menu"
							aria-expanded={isNavToggled}
							type="button"
							onClick={() => setIsNavToggled(!isNavToggled)}
						>
							{isNavToggled ? (
								<CrossIcon size={22} />
							) : (
								<MenuIcon size={22} />
							)}
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
