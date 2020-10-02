import { bool } from 'prop-types';

const Logo = ({ animated = false }) => {
	if (animated) {
		return (
			<div
				className="glitch"
				data-trick="k4m4"
			>
				kama
			</div>
		);
	}

	return (
		<h1 className="font-meie mb-1">k4m4</h1>
	);
};

Logo.propTypes = {
	animated: bool,
};

export default Logo;
