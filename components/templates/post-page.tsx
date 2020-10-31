import { Box } from '@chakra-ui/core';
import { ReactNode } from 'react';
import PostSEO from '../molecules/post-seo';
import Footer from '../organisms/footer';
import Nav from '../organisms/nav';

type PostPageProps = {
	children: ReactNode;
	url: string;
} & FrontMatter;

const PostPage = ({ children, ...props }: PostPageProps) => {
	return (
		<>
			<PostSEO {...props} />
			<Nav />
			<Box as="main">
				{children}
			</Box>
			<Footer />
		</>
	);
};

export default PostPage;
