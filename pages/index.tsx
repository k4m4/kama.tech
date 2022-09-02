import { Box } from '@chakra-ui/react';
import Hero from '../components/organisms/hero';
import Projects from '../components/organisms/projects';
import Page from '../components/templates/page';

const Home = () => {
	return (
		<Page>
			<Box
				color="white"
				mb={{ md: 16 }}
			>
				<Hero title="Into smart contracts, these days." />
				<Projects />
			</Box>
		</Page>
	);
};

export default Home;
