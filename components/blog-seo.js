import { NextSeo as NextSEO, ArticleJsonLd } from 'next-seo';
import { string } from 'prop-types';

const BlogSEO = ({ title, summary, publishedAt, url }) => {
	const date = new Date(publishedAt).toISOString();
	const fullTitle = `${title} – k4m4`;
	const featuredImage = {
		url: `https://og-image.k4m4.dev/${encodeURIComponent(title)}.png?theme=light&md=1&fontSize=100px&images=https://k4m4.dev/static/assets/design/profile-black.svg&widths=350&heights=350`,
		alt: fullTitle,
		width: 350,
		height: 350,
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
						publishedTime: date,
					},
					url,
					title: fullTitle,
					description: summary,
					images: [featuredImage],
				}}
			/>
			<ArticleJsonLd
				authorName="Nikolaos Kamarinakis"
				dateModified={date}
				datePublished={date}
				description={summary}
				images={[featuredImage]}
				publisherLogo="/static/favicons/android-chrome-192x192.png"
				publisherName="Nikolaos Kamarinakis"
				title={title}
				url={url}
			/>
		</>
	);
};

BlogSEO.propTypes = {
	title: string.isRequired,
	summary: string.isRequired,
	publishedAt: string.isRequired,
	url: string.isRequired,
};

export default BlogSEO;
