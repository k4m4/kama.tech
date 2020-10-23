import Document, { Html, Main, Head, NextScript } from 'next/document';
import React from 'react';
import Meta from '../components/atoms/meta';
import GoogleAnalytics from '../components/atoms/google-analytics';
import Fonts from '../components/atoms/fonts';
import Favicons from '../components/atoms/favicons';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en" className="bg-black">
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
