import NextLink from 'next/link';
import { string, bool } from 'prop-types';
import Logo from './logo';
import Link from './link';

const Nav = ({ page, bottom }) => {
	return (
		<nav className={`flex ${bottom ? 'justify-center' : 'justify-between'} items-center flex-wrap p-6 md:p-8 lg:p-10 text-black dark:text-white bg-gray-100 dark:bg-gray-900`}>
			{!bottom && (
				<div className="flex items-center flex-shrink-0 font-mono">
					<Link
						as={NextLink}
						href="/"
					>
						<a className="font-semibold text-2xl md:text-3xl lg:text-4xl hover:text-red-500">
							<Logo />
						</a>
					</Link>
				</div>
			)}
			<div className="flex items-center w-auto text-sm md:text-base lg:text-lg font-space-mono uppercase">
				<div className="mr-6 md:mr-8 lg:mr-10">
					<Link
						as={NextLink}
						href="/projects"
					>
						<a className={`${page === 'projects' && 'text-red-500'} hover:text-red-500`}>
							Projects
						</a>
					</Link>
				</div>
				<div className="mr-6 md:mr-8 lg:mr-10">
					<Link
						as={NextLink}
						href="/about"
					>
						<a className={`${page === 'about' && 'text-red-500'} hover:text-red-500`}>
							About
						</a>
					</Link>
				</div>
				<div>
					<Link
						as={NextLink}
						href="/contact"
					>
						<a className={`${page === 'contact' && 'text-red-500'} hover:text-red-500`}>
							Contact
						</a>
					</Link>
				</div>
			</div>
		</nav>
	);
};

Nav.propTypes = {
	page: string,
	bottom: bool,
};

export default Nav;
