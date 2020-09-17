const withMdxEnhanced = require('next-mdx-enhanced');
const remarkAutolinkHeadings = require('remark-autolink-headings');
const remarkSlug = require('remark-slug');
const remarkMath = require('remark-math');
const rehypeKatex = require('rehype-katex');
const readingTime = require('reading-time');
const { archivedBlogSlugs } = require('./data/archive');

const archivedBlogRedirects = () => archivedBlogSlugs.map(slug => {
	return {
		source: `/${slug}`,
		destination: `/archive/${slug}`,
		permanent: true,
	};
});

module.exports = withMdxEnhanced({
	layoutPath: 'layouts',
	defaultLayout: true,
	fileExtensions: ['mdx'],
	remarkPlugins: [
		remarkSlug,
		remarkAutolinkHeadings,
		remarkMath,
	],
	rehypePlugins: [
		rehypeKatex,
	],
	extendFrontMatter: {
		process: mdxContent => ({
			wordCount: mdxContent.split(/\s+/gu).length,
			readingTime: readingTime(mdxContent),
		}),
	},
})({
	async redirects() {
		return archivedBlogRedirects();
	},
});
