import { NextSeo as NextSEO, ArticleJsonLd } from 'next-seo';

type PostSEOProps = {
	url: string;
} & FrontMatter;

const PostSEO = ({
	title,
	summary,
	publishedAt,
	updatedAt,
	url,
}: PostSEOProps) => {
	const datePublished = publishedAt && new Date(publishedAt).toISOString();
	const dateModified = updatedAt && new Date(updatedAt).toISOString();
	const fullTitle = `${title} – k4m4`;
	const subtitle = 'Archive';

	const cardURL = `https://cards.microlink.io/?p=2gXQPD4KICA8TGluawogICAgaHJlZj0naHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M_ZmFtaWx5PU1laWUrU2NyaXB0JmRpc3BsYXk9c3dhcCcKICAgIHJlbD0nc3R5bGVzaGVldCcKICAvPgogIDxGbGV4CiAgICBzeD17ewogICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsCiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLAogICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJywKICAgICAgYmc6ICdibGFjaycsCiAgICB9fQogID4KICAgIDxCb3gKICAgICAgc3g9e3sKICAgICAgICBjb2xvcjogJyNGNUY3RkEnLAogICAgICB9fQogICAgPgogICAgICA8SW1hZ2UKICAgICAgICBzcmM9Imh0dHBzOi8vazRtNC5kZXYvc3RhdGljL2ltYWdlcy9vZy1jYXJkL2xvZ28ucG5nIgogICAgICAgIHdpZHRoPXsyMDB9CiAgICAgIC8-CiAgICA8L0JveD4KICAgIDxUZXh0CiAgICAgIGFzPSJzcGFuIgogICAgICBzeD17ewogICAgICAgIGNvbG9yOiAnIzcxODA5NicsCiAgICAgICAgbWI6IDI1LAogICAgICAgIGZvbnRXZWlnaHQ6IDUwMCwKICAgICAgICBmb250U2l6ZTogMjAsCiAgICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsCiAgICAgICAgbGV0dGVyU3BhY2luZzogMywKICAgICAgfX0KICAgID4KICAgICAge3F1ZXJ5LnN1YnRpdGxlfQogICAgPC9UZXh0PgogICAgCiAgICA8RmxleAogICAgICBzeD17ewogICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLAogICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLAogICAgICAgIHdpZHRoOiAnNzUlJywKICAgICAgICBib3hTaGFkb3c6ICdyZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCAzMHB4IDYwcHgnLAogICAgICAgIGJvcmRlcjogJzJweCBzb2xpZCcsCiAgICAgICAgYm9yZGVyQ29sb3I6ICcjMmQzNzQ4JywKICAgICAgICBib3JkZXJSYWRpdXM6ICc0cHgnLAogICAgICAgIG1pbkhlaWdodDogMjAwLAogICAgICB9fQogICAgPgogICAgICA8Qm94CiAgICAgICAgc3g9e3sKICAgICAgICAgIGZvbnRGYW1pbHk6IFsnU3BhY2UnLCAnc2Fucy1zZXJpZiddLAogICAgICAgICAgZm9udFdlaWdodDogOTAwLAogICAgICAgICAgZm9udFNpemU6IDQwLAogICAgICAgICAgbGV0dGVyU3BhY2luZzogMSwKICAgICAgICAgIGNvbG9yOiAnI0Y1RjdGQScsCiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMWEyMDJjJywKICAgICAgICAgIHdpZHRoOiAnMTAwJScsCiAgICAgICAgICBoZWlnaHQ6ICcxMDAlJywKICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JywKICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywKICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLAogICAgICAgICAgcDogNCwKICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsCiAgICAgICAgfX0KICAgICAgPgogICAgICAgIDxUZXh0PgogICAgICAgICAge3F1ZXJ5LnRpdGxlfQogICAgICAgIDwvVGV4dD4KICAgICAgPC9Cb3g-CiAgICA8L0ZsZXg-CiAgPC9GbGV4Pgo8Lz4K&title=${title}&subtitle=${subtitle}`;
	const image = {
		url: `https://i.microlink.io/${encodeURIComponent(cardURL)}`,
		alt: title,
		width: 1686,
		height: 948,
	};

	return (
		<>
			<NextSEO
				title={fullTitle}
				description={summary}
				canonical={url}
				openGraph={{
					type: 'article',
					article: {
						publishedTime: datePublished,
						modifiedTime: dateModified,
					},
					url,
					title: fullTitle,
					description: summary,
					images: [image],
				}}
			/>
			<ArticleJsonLd
				authorName="Nikolaos Kamarinakis"
				datePublished={datePublished}
				dateModified={dateModified}
				description={summary}
				images={[image.url]}
				publisherLogo="/static/favicons/android-chrome-192x192.png"
				publisherName="k4m4"
				title={title}
				url={url}
			/>
		</>
	);
};

export default PostSEO;
