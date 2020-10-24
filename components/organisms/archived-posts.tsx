import NextLink from 'next/link';
import { frontMatter as MrRobotWriteup} from '../../pages/archive/mr-robot-1-writeup.mdx';
import { frontMatter as NibblesWriteup } from '../../pages/archive/nibbles-hack-the-box-writeup.mdx';
import { frontMatter as picoCTFWriteup } from '../../pages/archive/picoctf-2018-crypto-writeups.mdx';
import { frontMatter as WhyDymergeSucks } from '../../pages/archive/why-dymerge-sucks.mdx';
import formatDate from '../../utils/format-date';
import Link from '../atoms/link';
import Card from '../molecules/card';

const archivedPosts: FrontMatter[] = [
	picoCTFWriteup,
	NibblesWriteup,
	WhyDymergeSucks,
	MrRobotWriteup,
];

type ArchivedPost = {
	title: string;
	publishedAt: string;
	slug: string;
};

const ArchivedPost = ({ title, publishedAt, slug }: ArchivedPost) => {
	const iconPath = `/static/images/${slug.replace('archive/', '')}/icon.svg`;
	return (
		<Link
			as={NextLink}
			href={`/${slug}`}
		>
			<a>
				<Card
					title={title}
					subtitle={formatDate(publishedAt)}
					iconPath={iconPath}
				/>
			</a>
		</Link>
	);
};

const ArchivedPosts = () => {
	return (
		<div
			id="archived-posts"
			className="relative mx-auto mb-0 w-10/12 lg:w-11/12 box-border"
		>
			{archivedPosts.map(post => (
				<ArchivedPost
					key={post.title}
					title={post.title}
					publishedAt={post.publishedAt}
					slug={post.__resourcePath.replace('.mdx', '')}
				/>
			))}
		</div>
	);
};

export default ArchivedPosts;
