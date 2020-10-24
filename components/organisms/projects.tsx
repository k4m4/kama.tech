import { projects } from '../../data/projects';
import logOutboundLink from '../../utils/log-outbound-link';
import Link from '../atoms/link';
import OutboundLink from '../atoms/outbound-link';
import Card from '../molecules/card';

type ProjectProps = {
	name: string;
	description: string;
	iconPath: string;
	url: string;
};

const Project = ({
	name,
	description,
	iconPath,
	url,
}: ProjectProps) => {
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

const Projects = () => {
	return (
		<div
			id="projects"
			className="relative mx-auto mb-0 w-10/12 lg:w-11/12 box-border"
		>
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
