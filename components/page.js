import { node, string } from 'prop-types';
import { NextSeo as NextSEO } from 'next-seo';
import Nav from './nav';
import Footer from './footer';

const Page = ({ children, title, description }) => {
	return (
		<>
			<NextSEO
				title={title}
				description={description}
				openGraph={{ title, description }}
			/>
			<div className="min-h-screen min-w-full bg-gray-300 dark:bg-black text-black dark:text-white">
				<Nav page={title.toLowerCase()} />
				<main>{children}</main>
			</div>
			<Footer />
		</>
	);
};

Page.propTypes = {
	children: node,
	title: string,
	description: string,
};

export default Page;
