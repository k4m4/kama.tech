type YoutubePlayerProps = {
	id: string;
};

const YoutubePlayer = ({ id }: YoutubePlayerProps) => {
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

export default YoutubePlayer;
