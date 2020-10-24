import Document, {
	Html,
	Main,
	Head,
	NextScript,
	DocumentContext,
} from 'next/document';
import React from 'react';
import Favicons from '../components/atoms/favicons';
import Fonts from '../components/atoms/fonts';
import GoogleAnalytics from '../components/atoms/google-analytics';
import Meta from '../components/atoms/meta';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return initialProps;
	}

	render() {
		return (
			<Html
				lang="en"
				className="bg-black"
			>
				<Head>
					<Meta />
					<GoogleAnalytics />
					<Fonts />
					<Favicons />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
