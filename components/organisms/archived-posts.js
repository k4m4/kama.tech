import { string } from 'prop-types';
import NextLink from 'next/link';
import formatDate from '../../utils/format-date';
import Link from '../atoms/link';
import Card from '../molecules/card';

import { frontMatter as picoCTFWriteup } from '../../pages/archive/picoctf-2018-crypto-writeups.mdx';
import { frontMatter as NibblesWriteup } from '../../pages/archive/nibbles-hack-the-box-writeup.mdx';
import { frontMatter as WhyDymergeSucks } from '../../pages/archive/why-dymerge-sucks.mdx';
import { frontMatter as MrRobotWriteup} from '../../pages/archive/mr-robot-1-writeup.mdx';

const archivedPosts = [
	picoCTFWriteup,
	NibblesWriteup,
	WhyDymergeSucks,
	MrRobotWriteup,
];

const ArchivedPost = ({ title, publishedAt, slug }) => {
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

ArchivedPost.propTypes = {
	title: string.isRequired,
	publishedAt: string.isRequired,
	slug: string.isRequired,
};

const ArchivedPosts = () => {
	return (
		<div className="relative mx-auto mb-0 w-10/12 lg:w-11/12 box-border">
			{archivedPosts.map(post => (
				<ArchivedPost
					key={post.title}
					slug={post.__resourcePath.replace('.mdx', '')}
					{...post}
				/>
			))}
		</div>
	);
};

export default ArchivedPosts;
