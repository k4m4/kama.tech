import { NextPage, NextPageContext } from 'next';
import Page from '../components/templates/page';

type ErrorProps = {
	status: number;
};

const Error: NextPage<ErrorProps> = ({ status }: ErrorProps) => {
	return (
		<Page
			title={status.toString()}
			description={status === 404 ? 'This page got lost in the void.' : 'Not a good place to be in.'}
			showNav={false}
		>
			<div className="h-screen w-full flex flex-col items-center justify-center bg-black text-white">
				<h1 className="text-6xl md:text-7xl lg:text-6vw font-mono">{status || '1337'}</h1>
				{status !== 404 && (
					<div className="font-mono">
						<p className="text-base">An unexpected error has occured.</p>
					</div>
				)}
			</div>
		</Page>
	);
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
	const status = res ? res.statusCode : (err ? err.statusCode : 404);
	return { status };
};

export default Error;
