import Logo from '../components/logo';
import Nav from '../components/nav';
import Footer from '../components/footer';

const Home = () => {
	return (
		<>
			<div className="flex flex-col content-center justify-center h-screen max-h-wfa max-h-ma bg-gray-300 dark:bg-black text-black dark:text-white">
				<div className="m-auto p-6">
					<h2 className="text-xl font-space-mono italic font-thin inline-block align-middle pr-2">Call me</h2>{' '}
					<span className="text-6xl font-mono font-bold inline-block align-middle"><Logo animated /></span>
				</div>
				<Nav bottom />
			</div>
			<Footer />
		</>
	);
};

export default Home;
