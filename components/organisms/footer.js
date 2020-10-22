import NextLink from 'next/link';
import {
	FiGithub as GitHubIcon,
	FiTwitter as TwitterIcon,
	FiAtSign as MailIcon,
} from 'react-icons/fi';
import Link from '../atoms/link';
import OutboundLink from '../atoms/outbound-link';
import Logo from '../atoms/logo';
import logOutboundLink from '../../utils/log-outbound-link';

const Footer = () => {
	return (
		<footer className="text-gray-500 font-mono">
			<div className="flex flex-col h-full w-10/12 lg:w-11/12 m-auto">
				<div className="flex flex-col lg:flex-row items-center justify-between h-auto lg:h-40 py-10 lg:py-0 overflow-hidden border bg-black border-b-0 border-gray-900">
					<p className="flex items-center justify-center w-full lg:w-1/3 h-full text-lg lg:border-r border-gray-900 order-2 lg:order-none mt-12 lg:mt-0 mb-7 lg:mb-0">
						&copy; 2020
					</p>
					<Link
						as={NextLink}
						href="/"
					>
						<a className="flex items-center justify-center h-full w-full text-center mb-6 lg:mb-3 transition duration-200 ease-in hover:text-white focus:text-white focus:outline-none">
							<Logo />
						</a>
					</Link>
					<div className="flex items-center justify-center w-full lg:w-1/3 h-full px-16 lg:px-0 lg:border-l border-gray-900 text-2xl lg:text-xl">
						<Link
							as={OutboundLink}
							href="https://github.com/k4m4"
							className="relative flex items-center justify-center flex-row flex-1 lg:ml-4 transition duration-200 ease-in hover:text-white focus:text-white focus:outline-none"
							aria-label="GitHub"
							onClick={() => logOutboundLink('Footer > GitHub')}
						>
							<GitHubIcon />
						</Link>
						<Link
							as={OutboundLink}
							href="https://twitter.com/nikolaskama"
							className="relative flex items-center justify-center flex-row flex-1 transition duration-200 ease-in hover:text-white focus:text-white focus:outline-none"
							aria-label="Twitter"
							onClick={() => logOutboundLink('Footer > Twitter')}
						>
							<TwitterIcon />
						</Link>
						<Link
							as={OutboundLink}
							href="mailto:nikolaskam@gmail.com"
							className="relative flex items-center justify-center flex-row flex-1 lg:mr-4 transition duration-200 ease-in hover:text-white focus:text-white focus:outline-none"
							aria-label="Email"
							onClick={() => logOutboundLink('Footer > Email')}
						>
							<MailIcon />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
