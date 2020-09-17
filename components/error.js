import { number } from 'prop-types';
import Page from './page';

const Error = ({ status }) => {
	return (
		<Page title={status ? status.toString() : 'Error'}>
			<div className="h-screen bg-gray-300 dark:bg-black text-black dark:text-white text-center">
				{status === 404 ? (
					<>
						<h1 className="text-6xl lg:text-10vw p-8 md:p-9 lg:p-10 bg-gray-100 dark:bg-gray-900 font-mono">404</h1>
						<div className="p-5 font-space-mono">
							<h2 className="font-semibold text-lg md:text-xl lg:text-2vw m-10">Page Not Found</h2>
							<p className="text-base">Oops! This page doesn&apos;t seem to exist.</p>
						</div>
					</>
				) : (
					<>
						<h1 className="text-6xl lg:text-10vw p-8 md:p-9 lg:p-10 bg-gray-300 dark:bg-gray-900 font-mono">{status || '1337'}</h1>
						<div className="p-5 font-space-mono">
							<p className="text-base">Oops! An unexpected error has occured.</p>
						</div>
					</>
				)}
			</div>
		</Page>
	);
};

Error.propTypes = {
	status: number.isRequired,
};

export default Error;
