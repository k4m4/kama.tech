import Page from '../components/templates/page';
import Hero from '../components/organisms/hero';
import ArchivedPosts from '../components/organisms/archived-posts';

const Home = () => {
	return (
		<Page
			title="Archive"
			description="A collection of archived posts."
		>
			<div className="min-h-full w-full font-normal p-0 m-0 font-space-mono bg-black text-white lg:mb-16">
				<Hero
					title="Archive"
					subtitle="A collection of archived posts, carried over from the archaic <em>nikolaskama.me</em> blog."
				/>
				<ArchivedPosts />
			</div>
		</Page>
	);
};

export default Home;
