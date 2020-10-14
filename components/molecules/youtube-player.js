import { string } from 'prop-types';

const YoutubePlayer = ({ id }) => {
	return (
		<div
			style={{
				position: 'relative',
				paddingBottom: '56.25%',
				paddingTop: 25,
				height: 0,
			}}
		>
			<iframe
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
				}}
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
