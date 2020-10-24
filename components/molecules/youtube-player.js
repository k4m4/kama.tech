import { string } from 'prop-types';

const YoutubePlayer = ({ id }) => {
	return (
		<div
			className="relative pt-25 h-0"
			style={{ paddingBottom: '56.25%' }}
		>
			<iframe
				className="absolute top-0 left-0 w-full h-full"
				src={`https://www.youtube.com/embed/${id}`}
				frameBorder="0"
			/>
		</div>
	);
};

YoutubePlayer.propTypes = {
	id: string.isRequired,
};

export default YoutubePlayer;
