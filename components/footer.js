import {
	FiGithub as GitHubIcon,
	FiTwitter as TwitterIcon,
	FiMail as MailIcon,
} from 'react-icons/fi';
import LatestCommit from './latest-commit';
import Link from './link';
import OutboundLink from './outbound-link';
import logOutboundLink from '../utils/log-outbound-link';

const Footer = () => {
	return (
		<footer className="text-black dark:text-white bg-gray-100 dark:bg-gray-900 px-5 py-10">
			<div className="pb-2">
				<LatestCommit />
			</div>
			<div className="flex items-center justify-center flex-wrap text-sm md:text-base lg:text-lg font-space-mono uppercase pt-5">
				<Link
					as={OutboundLink}
					href="https://github.com/k4m4"
					className="px-5 hover:text-red-500"
					aria-label="GitHub"
					onClick={() => logOutboundLink('Footer > GitHub')}
				>
					<GitHubIcon />
				</Link>
				<Link
					as={OutboundLink}
					href="https://twitter.com/nikolaskama"
					className="px-5 hover:text-red-500"
					aria-label="Twitter"
					onClick={() => logOutboundLink('Footer > Twitter')}
				>
					<TwitterIcon />
				</Link>
				<Link
					as={OutboundLink}
					href="mailto:nikolaskam@gmail.com"
					className="px-5 hover:text-red-500"
					aria-label="Email"
					onClick={() => logOutboundLink('Footer > Email')}
				>
					<MailIcon />
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
