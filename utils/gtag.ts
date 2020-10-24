export const GA_TRACKING_ID = 'UA-63068365-2';

export const pageview = (url: string): void => {
	window.gtag('config', GA_TRACKING_ID, {
		page_location: url,
	});
};

type Event = {
	action: string;
	category: string;
	label: string;
	value?: string;
};

export const event = ({ action, category, label }: Event): void => {
	window.gtag('event', action, {
		event_category: category,
		event_label: label,
	});
};
