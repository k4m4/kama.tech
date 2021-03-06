import { Link, Box } from '@chakra-ui/react';
import Image from 'next/image';
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
			_focus={{ outline: 'none' }}
			_hover={{ textDecoration: 'none' }}
			href={url}
			onClick={() => logOutboundLink(`Projects > ${name}`)}
		>
			<Card
				icon={
					<Image
						alt={name}
						height={50}
						src={iconPath}
						width={50}
					/>
				}
				subtitle={description}
				title={name}
			/>
		</Link>
	);
};

const Projects = () => {
	return (
		<Box
			boxSizing="border-box"
			id="projects"
			mb={0}
			mx="auto"
			w={{ base: '85%', md: '90%' }}
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
