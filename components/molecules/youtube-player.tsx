import { AspectRatio } from '@chakra-ui/react';

type YoutubePlayerProps = {
	id: string;
};

const YoutubePlayer = ({ id }: YoutubePlayerProps) => {
	return (
		<AspectRatio ratio={16 / 9}>
			<iframe
				allowFullScreen
				src={`https://www.youtube.com/embed/${id}`}
			/>
		</AspectRatio>
	);
};

export default YoutubePlayer;
