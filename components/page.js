import { useRouter } from 'next/router';
import { node, string, bool } from 'prop-types';
import { NextSeo as NextSEO } from 'next-seo';
import Nav from './nav';
import Footer from './footer';

const Page = ({ children, title, description, showNav = true }) => {
	const router = useRouter();
	const url = `https://${process.env.DEFAULT_DOMAIN}${router.pathname}`;
	const fullTitle = title && `${title} – k4m4`;
	const cardURL = `https://cards.microlink.io/?p=2gKXPD4KICA8TGluawogICAgaHJlZj0naHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M_ZmFtaWx5PU1laWUrU2NyaXB0JmRpc3BsYXk9c3dhcCcKICAgIHJlbD0nc3R5bGVzaGVldCcKICAvPgogIDxGbGV4CiAgICBzeD17ewogICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsCiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLAogICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJywKICAgICAgYmc6ICdibGFjaycsCiAgICB9fQogID4KICAgIDxCb3gKICAgICAgc3g9e3sKICAgICAgICBjb2xvcjogJyNGNUY3RkEnLAogICAgICB9fQogICAgPgogICAgICA8SW1hZ2UKICAgICAgICBzcmM9Imh0dHBzOi8vazRtNC5kZXYvc3RhdGljL2ltYWdlcy9vZy1jYXJkL2xvZ28ucG5nIgogICAgICAgIHdpZHRoPXsyMDB9CiAgICAgIC8-CiAgICA8L0JveD4KICAgIDxUZXh0CiAgICAgIGFzPSJzcGFuIgogICAgICBzeD17ewogICAgICAgIGNvbG9yOiAnIzcxODA5NicsCiAgICAgICAgZm9udFdlaWdodDogNTAwLAogICAgICAgIGZvbnRTaXplOiAyMCwKICAgICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJywKICAgICAgICBsZXR0ZXJTcGFjaW5nOiAzLAogICAgICB9fQogICAgPgogICAgICB7cXVlcnkudGl0bGV9CiAgICA8L1RleHQ-CiAgPC9GbGV4Pgo8Lz4K&title=${title}`;
	const openGraph = {
		title: fullTitle,
		description,
		url,
	};

	if (title) {
		openGraph.images = [{
			url: `https://i.microlink.io/${encodeURIComponent(cardURL)}`,
			alt: title,
			width: 1686,
			height: 948,
		}];
	}

	return (
		<>
			<NextSEO
				title={fullTitle}
				description={description}
				canonical={url}
				openGraph={openGraph}
			/>
			{showNav && <Nav />}
			<main>{children}</main>
			<Footer />
		</>
	);
};

Page.propTypes = {
	children: node.isRequired,
	title: string,
	description: string,
	showNav: bool,
};

export default Page;
