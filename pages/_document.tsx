import { Box } from '@chakra-ui/react';
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
			<Html lang="en">
				<Head>
					<Meta />
					<GoogleAnalytics />
					<Fonts />
					<Favicons />
				</Head>
				<Box as="body">
					<Main />
					<NextScript />
				</Box>
			</Html>
		);
	}
}

export default MyDocument;
