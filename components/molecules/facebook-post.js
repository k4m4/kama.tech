import { string } from 'prop-types';

const FacebookPost = ({ href, height }) => {
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

FacebookPost.propTypes = {
	href: string.isRequired,
	height: string.isRequired,
};

export default FacebookPost;
