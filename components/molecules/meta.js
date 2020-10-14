import GoogleAnalytics from '../atoms/google-analytics';

const Meta = () => {
	return (
		<>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta httpEquiv="Content-Language" content="en" />
			<meta name="apple-mobile-web-app-title" content="k4m4" />
			<meta name="author" content="Nikolaos Kamarinakis" />

			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/static/favicons/apple-touch-icon.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/static/favicons/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/static/favicons/favicon-16x16.png"
			/>
			<link rel="manifest" href="/static/favicons/site.webmanifest" />
			<link
				rel="mask-icon"
				href="/static/favicons/safari-pinned-tab.svg"
				color="#f56565"
			/>

			<meta name="msapplication-TileColor" content="#ffffff" />
			<meta name="theme-color" content="#ffffff" />

			<link
				href="https://fonts.googleapis.com/css?family=Space+Mono&display=swap"
				rel="stylesheet"
			/>

			<link
				href="https://fonts.googleapis.com/css2?family=Meie+Script&display=swap"
				rel="stylesheet"
			/>

			<GoogleAnalytics />
		</>
	);
};

export default Meta;
