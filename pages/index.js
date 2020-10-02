import Logo from '../components/logo';
import Nav from '../components/nav';
import Footer from '../components/footer';

const Home = () => {
	return (
		<>
			<div className="flex flex-col content-center justify-center h-screen max-h-wfa max-h-ma bg-gray-300 dark:bg-black text-black dark:text-white">
				<div className="m-auto p-6">
					<span className="text-6xl inline-block align-middle"><Logo /></span>
				</div>
				<Nav bottom />
			</div>
			<Footer />
		</>
	);
};

export default Home;
