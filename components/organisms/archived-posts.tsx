import { Link, Box, Image } from '@chakra-ui/core';
import NextLink from 'next/link';
import { frontMatter as MrRobotWriteup} from '../../pages/archive/mr-robot-1-writeup.mdx';
import { frontMatter as NibblesWriteup } from '../../pages/archive/nibbles-hack-the-box-writeup.mdx';
import { frontMatter as picoCTFWriteup } from '../../pages/archive/picoctf-2018-crypto-writeups.mdx';
import { frontMatter as WhyDymergeSucks } from '../../pages/archive/why-dymerge-sucks.mdx';
import formatDate from '../../utils/format-date';
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
		<NextLink
			passHref
			href={`/${slug}`}
		>
			<Link
				_hover={{ textDecoration: 'none' }}
				_focus={{ outline: 'none' }}
			>
				<Card
					title={title}
					subtitle={formatDate(publishedAt)}
					icon={
						<Image
							src={iconPath}
							alt={title}
							pointerEvents="none"
							w={[10, 10, 10, 12]}
							ml={2}
						/>
					}
				/>
			</Link>
		</NextLink>
	);
};

const ArchivedPosts = () => {
	return (
		<Box
			id="archived-posts"
			mx="auto"
			mb={0}
			w={['85%', '85%', '85%', '90%']}
			boxSizing="border-box"
		>
			{archivedPosts.map(post => (
				<ArchivedPost
					key={post.title}
					title={post.title}
					publishedAt={post.publishedAt}
					slug={post.__resourcePath.replace('.mdx', '')}
				/>
			))}
		</Box>
	);
};

export default ArchivedPosts;
