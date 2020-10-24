const title = 'k4m4 — Nikolaos Kamarinakis';
const description = 'Full-stack software engineer and open sourcerer.';
const imageURL = 'https://i.microlink.io/https%3A%2F%2Fcards.microlink.io%2F%3Fp%3D2gGcPD4KICA8TGluawogICAgaHJlZj0naHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M_ZmFtaWx5PU1laWUrU2NyaXB0JmRpc3BsYXk9c3dhcCcKICAgIHJlbD0nc3R5bGVzaGVldCcKICAvPgogIDxGbGV4CiAgICBzeD17ewogICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsCiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLAogICAgICBiZzogJ2JsYWNrJywKICAgIH19CiAgPgogICAgPEJveAogICAgICBzeD17ewogICAgICAgIGNvbG9yOiAnI0Y1RjdGQScsCiAgICAgIH19CiAgICA-CiAgICAgIDxJbWFnZQogICAgICAgIHNyYz0iaHR0cHM6Ly9rNG00LmRldi9zdGF0aWMvaW1hZ2VzL29nLWNhcmQvbG9nby5wbmciCiAgICAgICAgd2lkdGg9ezIwMH0KICAgICAgLz4KICAgIDwvQm94PgogIDwvRmxleD4KPC8-Cg';
const domain = process.env.DEFAULT_DOMAIN;

const NextSEOConfig = {
	title,
	description,
	canonical: `https://${domain}`,
	openGraph: {
		title,
		description,
		type: 'website',
		locale: 'en_US',
		url: `https://${domain}`,
		images: [{
			url: imageURL,
			alt: title,
			width: 1686,
			height: 948,
		}],
	},
	twitter: {
		handle: '@nikolaskama',
		site: '@nikolaskama',
		cardType: 'summary_large_image',
	},
};

export default NextSEOConfig;
