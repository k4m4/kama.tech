declare module '*.mdx' {
	const MDXComponent: (props: any) => JSX.Element;
	export default MDXComponent;
	export const frontMatter: FrontMatter;
}

interface FrontMatter {
	__resourcePath: string;
	title: string;
	publishedAt: string;
	updatedAt?: string;
	summary: string;
}
