import { AspectRatio } from '@chakra-ui/core';

type FacebookPostProps = {
	href: string;
	height: string;
};

const FacebookPost = ({ href, height }: FacebookPostProps) => {
	return (
		<AspectRatio maxWidth="550px">
			<iframe
				src={`https://www.facebook.com/plugins/post.php?href=${href}&show_text=true&width=auto`}
				height={height}
				allow="encrypted-media"
				width="full"
			/>
		</AspectRatio>
	);
};

export default FacebookPost;
