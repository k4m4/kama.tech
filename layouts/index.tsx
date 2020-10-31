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
				mb={16}
				mt={40}
			>
				<Box
					color="white"
					px={{ base: 16, md: 20, xl: 24 }}
					py={16}
				>
					<Heading
						as="h1"
						fontSize={{ base: '3xl', lg: '4xl' }}
						fontWeight={600}
						lineHeight="tall"
						pb={5}
						textAlign="center"
					>
						{frontMatter.title}
					</Heading>
					<Flex
						align="center"
						flexWrap="wrap"
						justify="center"
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
					lineHeight="taller"
					mx="auto"
					p={{ base: 10, md: 15, xl: 20 }}
					w={{ base: 'full', md: '90%', xl: '80%' }}
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
