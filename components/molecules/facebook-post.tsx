type FacebookPostProps = {
	href: string;
	height: string;
};

const FacebookPost = ({ href, height }: FacebookPostProps) => {
	return (
		<iframe
			src={`https://www.facebook.com/plugins/post.php?href=${href}&show_text=true&width=auto`}
			height={height}
			scrolling="no"
			frameBorder="0"
			allow="encrypted-media"
			className="w-full"
			style={{ maxWidth: '550px' }}
		/>
	);
};

export default FacebookPost;
