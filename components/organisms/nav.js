import { motion, useCycle, useViewportScroll } from 'framer-motion';
import NextLink from 'next/link';
import { useState } from 'react';
import Link from '../atoms/link';
import Logo from '../atoms/logo';
import MenuIcon from '../molecules/menu-icon';

const Nav = () => {
	const [isNavTop, setIsNavTop] = useState(true);
	const [isOpen, toggleOpen] = useCycle(false, true);

	const { scrollY } = useViewportScroll();
	scrollY.onChange(distance => setIsNavTop(distance < 10));

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
						<motion.div
							initial="hidden"
							animate={isOpen ? 'visible' : 'hidden'}
							variants={{
								visible: { opacity: 1 },
								hidden: { opacity: 0 },
							}}
							className={`${isOpen ? 'block' : 'hidden'} mr-4 lg:mr-7 flex tracking-wider uppercase`}
						>
							<Link
								as={NextLink}
								href="/archive"
							>
								<a className="ml-3 lg:ml-4 px-2 md:px-3 lg:px-4 py-2 text-base font-medium leading-5 text-gray-500 hover:text-white focus:outline-none focus:text-white transition duration-150 ease-in-out">
									Archive
								</a>
							</Link>
						</motion.div>
						<motion.div
							initial={false}
							animate={isOpen ? 'open' : 'closed'}
							className="inline-flex items-center justify-center w-full"
						>
							<button
								className={`lg:px-2 focus:outline-none ${isNavTop ? 'hover:text-gray-500' : 'hover:text-white'} transition-all ease-in duration-200`}
								aria-label="Menu"
								aria-expanded={isOpen}
								type="button"
								onClick={() => toggleOpen()}
							>
								<MenuIcon />
							</button>
						</motion.div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
