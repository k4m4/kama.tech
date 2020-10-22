import { any } from 'prop-types';

const Link = ({ as: Component, ...props }) => {
	return (
		<Component {...props} />
	);
};

Link.propTypes = {
	as: any,
};

Link.defaultProps = {
	as: 'a',
};

export default Link;
