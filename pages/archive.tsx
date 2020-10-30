import { Box } from '@chakra-ui/core';
import ArchivedPosts from '../components/organisms/archived-posts';
import Hero from '../components/organisms/hero';
import Page from '../components/templates/page';

const Home = () => {
	return (
		<Page
			title="Archive"
			description="A collection of archived posts."
		>
			<Box
				color="white"
				mb={{ lg: 16 }}
			>
				<Hero
					title="Archive"
					subtitle="A collection of archived posts, carried over from the archaic <em>nikolaskama.me</em> blog."
				/>
				<ArchivedPosts />
			</Box>
		</Page>
	);
};

export default Home;
