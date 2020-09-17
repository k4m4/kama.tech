import Page from '../components/page';
import Link from '../components/link';
import OutboundLink from '../components/outbound-link';
import logOutboundLink from '../utils/log-outbound-link';

const Contact = () => {
	return (
		<Page
			title="Contact"
			description="How you can get in touch with me."
		>
			<div className="bg-gray-300 dark:bg-black text-black dark:text-white font-space-mono">
				<h1 className="text-5xl md:text-6xl lg:text-10vw p-5 lg:px-10 bg-gray-100 dark:bg-gray-900 font-bold uppercase">
					Contact
				</h1>
				<div className="text-base lg:text-lg p-5 lg:p-10 font-thin leading-loose">
					<p>
						Get in touch.
					</p>
					<blockquote className="border-l-4 pl-3 bg-neutral-100 text-neutral-600 border-gray-900 dark:border-neutral-500">
						<Link
							as={OutboundLink}
							className="border-b-2 border-red-500 hover:text-red-500"
							href="mailto:nikolaskam@gmail.com?subject=Hello"
							onClick={() => logOutboundLink('Contact > Email')}
						>
							nikolaskam{'{'}at{'}'}gmail{'{'}dot{'}'}com
						</Link>
					</blockquote>
				</div>
			</div>
		</Page>
	);
};

export default Contact;
