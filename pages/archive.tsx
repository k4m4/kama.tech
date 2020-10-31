import { Box } from '@chakra-ui/core';
import ArchivedPosts from '../components/organisms/archived-posts';
import Hero from '../components/organisms/hero';
import Page from '../components/templates/page';

const Home = () => {
	return (
		<Page
			description="A collection of archived posts."
			title="Archive"
		>
			<Box
				color="white"
				mb={{ md: 16 }}
			>
				<Hero
					subtitle="A collection of archived posts, carried over from the archaic <em>nikolaskama.me</em> blog."
					title="Archive"
				/>
				<ArchivedPosts />
			</Box>
		</Page>
	);
};

export default Home;
