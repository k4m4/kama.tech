import { AspectRatio } from '@chakra-ui/react';

type FacebookPostProps = {
	href: string;
	height: string;
};

const FacebookPost = ({ href, height }: FacebookPostProps) => {
	return (
		<AspectRatio maxWidth="550px">
			<iframe
				allow="encrypted-media"
				height={height}
				src={`https://www.facebook.com/plugins/post.php?href=${href}&show_text=true&width=auto`}
				width="full"
			/>
		</AspectRatio>
	);
};

export default FacebookPost;
