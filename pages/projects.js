import Page from '../components/page';
import Project from '../components/project';
import { projects } from '../data/projects';

const Projects = () => {
	return (
		<Page
			title="Projects"
			description="Past client and open-source projects"
		>
			<div className="bg-gray-300 dark:bg-black text-black dark:text-white font-space-mono">
				<h1 className="text-5xl md:text-6xl lg:text-10vw p-5 lg:px-10 bg-gray-100 dark:bg-gray-900 font-bold uppercase">
					Projects
				</h1>
				<ol className="divide-y lg:divide-y-2 divide-gray-600 dark:divide-white">
					{projects.map(project => (
						<Project
							key={project.name}
							name={project.name}
							url={project.url}
							year={project.year}
							at={project.at}
						/>
					))}
				</ol>
			</div>
		</Page>
	);
};

export default Projects;
