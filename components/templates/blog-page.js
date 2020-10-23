import Head from 'next/head';
import { node } from 'prop-types';
import BlogSEO from '../molecules/blog-seo';
import Footer from '../organisms/footer';
import Nav from '../organisms/nav';

const BlogPage = ({ children, ...props }) => {
	return (
		<>
			<Head>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css"
					integrity="sha384-BdGj8xC2eZkQaxoQ8nSLefg4AV4/AwB3Fj+8SUSo7pnKP6Eoy18liIKTPn9oBYNG"
					crossOrigin="anonymous"
				/>
				<link
					href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/copy-tex.css"
					rel="stylesheet"
					type="text/css"
				/>
				<script
					src="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/copy-tex.min.js"
					integrity="sha384-XhWAe6BtVcvEdS3FFKT7Mcft4HJjPqMQvi5V4YhzH9Qxw497jC13TupOEvjoIPy7"
					crossOrigin="anonymous"
				/>
			</Head>
			<BlogSEO {...props} />
			<Nav />
			<main>{children}</main>
			<Footer />
		</>
	);
};

BlogPage.propTypes = {
	children: node.isRequired,
};

export default BlogPage;
