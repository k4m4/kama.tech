import { string, number } from 'prop-types';
import Link from '../components/link';
import OutboundLink from '../components/outbound-link';
import logOutboundLink from '../utils/log-outbound-link';

const Project = ({ name, url, year, at }) => {
	return (
		<li key={name}>
			<Link
				as={OutboundLink}
				className="w-screen inline-flex items-center py-6 md:py-7 lg:py-8 px-2 md:px-4 lg:px-6 border-b-2 border-gray-600 dark:border-white hover:bg-red-500"
				href={url}
				onClick={() => logOutboundLink(`Projects > ${name}`)}
			>
				<p className="transform -rotate-90 text-xs lg:text-sm">
					{year}
				</p>
				<h2 className="flex-1 text-lg md:text-2xl lg:text-5vw pl-2 md:pl-8 lg:pl-10 uppercase font-semibold">
					{name}
				</h2>
				{at && <span className="pr-2">{`@${at}`}</span>}
			</Link>
		</li>
	);
};

Project.propTypes = {
	name: string.isRequired,
	url: string.isRequired,
	year: number.isRequired,
	at: string,
};

export default Project;
