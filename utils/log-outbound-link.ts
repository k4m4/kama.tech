import { event } from './gtag';

const logOutboundLink = (label: string): void => {
	if (typeof window.gtag === 'function') {
		event({
			action: 'outbound_link',
			category: 'link',
			label,
		});
	}
};

export default logOutboundLink;
