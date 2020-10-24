import { MDXProvider } from '@mdx-js/react';
import { ReactNode } from 'react';
import MDXComponents from '../components/organisms/mdx-components';
import PostPage from '../components/templates/post-page';
import formatDate from '../utils/format-date';

type LayoutProps = {
	children: ReactNode;
	frontMatter: FrontMatter;
};

const Layout = ({ children, frontMatter }: LayoutProps) => {
	const slug: string = frontMatter.__resourcePath
		.replace('archive/', '')
		.replace('.mdx', '');

	return (
		<PostPage
			url={`https://${process.env.DEFAULT_DOMAIN}/archive/${slug}`}
			{...frontMatter}
		>
			<div className="bg-black text-gray-400 font-space font-light leading-loose mt-40 mb-16">
				<div className="text-white px-16 md:px-20 lg:px-24 py-16">
					<h1 className="text-4xl lg:text-5xl font-semibold text-center pb-5 leading-relaxed">{frontMatter.title}</h1>
					<span className="text-sm font-space-mono flex items-center justify-center flex-wrap uppercase">
						{formatDate(frontMatter.publishedAt)}
					</span>
				</div>
				<div className="w-full md:w-11/12 lg:w-4/5 m-auto p-10 md:p-15 lg:p-20 leading-loose">
					<MDXProvider components={MDXComponents}>
						{children}
					</MDXProvider>
				</div>
			</div>
		</PostPage>
	);
};

export default Layout;
