import { Box } from '@chakra-ui/core';
import Hero from '../components/organisms/hero';
import Projects from '../components/organisms/projects';
import Page from '../components/templates/page';

const Home = () => {
	return (
		<Page>
			<Box
				color="white"
				mb={{ lg: 16 }}
			>
				<Hero title="Full-stack Software Engineer &amp; Open Sourcerer." />
				<Projects />
			</Box>
		</Page>
	);
};

export default Home;
