import Hero from '../components/organisms/hero';
import Projects from '../components/organisms/projects';
import Page from '../components/templates/page';

const Home = () => {
	return (
		<Page>
			<div className="min-h-full w-full font-normal p-0 m-0 font-space-mono bg-black text-white lg:mb-16">
				<Hero title="Full-stack Software Engineer &amp; Open Sourcerer." />
				<Projects />
			</div>
		</Page>
	);
};

export default Home;
