import { Flex, Box, Heading, Text } from '@chakra-ui/core';
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
			<Box
				mt={40}
				mb={16}
			>
				<Box
					color="white"
					px={[16, 16, 20, 24]}
					py={16}
				>
					<Heading
						as="h1"
						fontSize={['3xl', '3xl', '3xl', '4xl']}
						fontWeight={600}
						textAlign="center"
						pb={5}
						lineHeight="tall"
					>
						{frontMatter.title}
					</Heading>
					<Flex
						align="center"
						justify="center"
						flexWrap="wrap"
						textTransform="uppercase"
					>
						<Text
							as="span"
							fontSize="sm"
						>
							{formatDate(frontMatter.publishedAt)}
						</Text>
					</Flex>
				</Box>
				<Box
					w={['full', 'full', '90%', '80%']}
					mx="auto"
					p={[10, 10, 15, 20]}
					lineHeight="taller"
				>
					<MDXProvider components={MDXComponents}>
						{children}
					</MDXProvider>
				</Box>
			</Box>
		</PostPage>
	);
};

export default Layout;
