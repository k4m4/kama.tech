import { MDXProvider } from '@mdx-js/react';
import { parseISO, format } from 'date-fns';
import { node, shape, string } from 'prop-types';
import BlogPage from '../components/blog-page';
import MDXComponents from '../components/mdx-components';

const Layout = ({ children, frontMatter }) => {
	const isArchive = frontMatter.__resourcePath.includes('archive');
	const slug = frontMatter.__resourcePath
		.replace('archive/', '')
		.replace('.mdx', '');

	return (
		<BlogPage
			url={`https://k4m4.dev/archive/${slug}`}
			{...frontMatter}
		>
			<div className="bg-gray-300 dark:bg-black text-black dark:text-white font-space-mono">
				<div className="p-8 md:p-9 lg:p-10 bg-gray-100 dark:bg-gray-900">
					<h1 className="text-5xl font-mono font-semibold text-center pb-5 leading-tight">{frontMatter.title}</h1>
					<div className="text-sm flex items-center justify-center flex-wrap uppercase">
						<span className="pr-5">{format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}</span>
						<span>{frontMatter.readingTime.text}</span>
					</div>
				</div>
				{isArchive && (
					<div className="w-100 text-center bg-yellow-100 dark:bg-yellow-700 space-mono p-3">
						This belongs to my archived posts, carried over from the ancient &#123;NikolasKama&#125; blog.
					</div>
				)}
				<div className="w-full md:w-11/12 lg:w-4/5 m-auto p-10 md:p-15 lg:p-20 leading-loose">
					<MDXProvider components={MDXComponents}>
						{children}
					</MDXProvider>
				</div>
			</div>
		</BlogPage>
	);
};

Layout.propTypes = {
	children: node.isRequired,
	frontMatter: shape({
		title: string.isRequired,
		publishedAt: string.isRequired,
		readingTime: shape({
			text: string.isRequired,
		}),
	}).isRequired,
};

export default Layout;
