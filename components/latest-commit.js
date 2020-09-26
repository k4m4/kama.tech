import useSWR from 'swr';
import { format } from 'timeago.js';
import truncate from 'truncate';
import fetcher from '../utils/fetcher';
import Link from './link';
import OutboundLink from './outbound-link';
import logOutboundLink from '../utils/log-outbound-link';

const LatestCommit = () => {
	const { data } = useSWR('/api/latest-commit', fetcher);

	return (
		<div className="flex justify-center items-center">
			<div className="text-sm text-light transform -rotate-90 uppercase">
				latest
			</div>
			<div className="w-80 bg-gray-300 dark:bg-black text-black dark:text-white p-4 md:p-5 lg:p-6 rounded-lg text-center">
				{data ? (
					<>
						<div className="font-semibold text-lg mb-1">
							<Link
								as={OutboundLink}
								href={data?.commitURL}
								className="border-b-2 border-red-500 hover:text-red-500"
								onClick={() => logOutboundLink('Latest Commit > Commit')}
							>
								{data && truncate(data?.commitMessage || 'No Commit Found', 50)}
							</Link>
						</div>
						<div className="font-light tracking-widers">
							{data && (
								data?.createdAt ? (
									<>
										<span className="italic">
											{format(data.createdAt)}
										</span>
										{' in '}
									</>
								) : '¯\\_(ツ)_/¯'
							)}
							<Link
								as={OutboundLink}
								href={data?.repoURL}
								className="italic hover:text-red-500"
								onClick={() => logOutboundLink('Latest Commit > Repo')}
							>
								{data && (data?.repoName || '')}
							</Link>
						</div>
					</>
				) : (
					<div className="animate-pulse flex space-x-4">
						<div className="flex-1 space-y-4 py-1">
							<div className="w-3/5 m-auto h-4 bg-gray-400 rounded" />
							<div className="h-4 bg-gray-400 rounded" />
						</div>
					</div>
				)}
			</div>
			<div className="text-sm text-light transform rotate-90 uppercase">
				commit
			</div>
		</div>
	);
};

export default LatestCommit;
