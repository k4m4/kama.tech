import { Link, Box, Image } from '@chakra-ui/core';
import { projects } from '../../data/projects';
import logOutboundLink from '../../utils/log-outbound-link';
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
			isExternal
			href={url}
			_hover={{ textDecoration: 'none' }}
			_focus={{ outline: 'none' }}
			onClick={() => logOutboundLink(`Projects > ${name}`)}
		>
			<Card
				title={name}
				subtitle={description}
				icon={
					<Image
						src={iconPath}
						alt={name}
						pointerEvents="none"
						w={[10, 10, 10, 12]}
						ml={2}
					/>
				}
			/>
		</Link>
	);
};

const Projects = () => {
	return (
		<Box
			id="projects"
			mx="auto"
			mb={0}
			w={['85%', '85%', '85%', '90%']}
			boxSizing="border-box"
		>
			{projects.map(project => (
				<Project
					key={project.name}
					{...project}
				/>
			))}
		</Box>
	);
};

export default Projects;
