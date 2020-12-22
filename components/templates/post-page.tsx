import { Box } from '@chakra-ui/react';
import { ReactNode, useEffect } from 'react';
import { initializeCopyText } from '../../utils/copy-tex';
import PostSEO from '../molecules/post-seo';
import Footer from '../organisms/footer';
import Nav from '../organisms/nav';
import 'katex/dist/katex.min.css';

type PostPageProps = {
	children: ReactNode;
	url: string;
} & FrontMatter;

const PostPage = ({ children, ...props }: PostPageProps) => {
	useEffect(() => {
		initializeCopyText();
	}, []);

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
