import { number } from 'prop-types';
import Error from '../components/error';

const E = ({ status }) => {
	return (
		<Error status={status} />
	);
};

E.getInitialProps = ({ res, err }) => {
	const status = res ? res.statusCode : (err ? err.statusCode : 404);
	return { status };
};

E.propTypes = {
	status: number.isRequired,
};

export default E;
