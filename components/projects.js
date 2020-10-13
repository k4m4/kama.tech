import { string } from 'prop-types';
import Link from '../components/link';
import OutboundLink from '../components/outbound-link';
import Card from '../components/card';
import logOutboundLink from '../utils/log-outbound-link';
import { projects } from '../data/projects';

const Project = ({ name, description, iconPath, url }) => {
	return (
		<Link
			as={OutboundLink}
			href={url}
			onClick={() => logOutboundLink(`Projects > ${name}`)}
		>
			<Card
				title={name}
				subtitle={description}
				iconPath={iconPath}
			/>
		</Link>
	);
};

Project.propTypes = {
	name: string.isRequired,
	description: string.isRequired,
	iconPath: string.isRequired,
	url: string.isRequired,
};

const Projects = () => {
	return (
		<div className="relative mx-auto mb-0 w-10/12 lg:w-11/12 box-border">
			{projects.map(project => (
				<Project
					key={project.name}
					{...project}
				/>
			))}
		</div>
	);
};

export default Projects;
