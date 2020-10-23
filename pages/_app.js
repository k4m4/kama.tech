import debounce from 'lodash.debounce';
import { DefaultSeo as DefaultSEO } from 'next-seo';
import Router from 'next/router';
import NProgress from 'nprogress';
import { elementType, object } from 'prop-types';
import SEO from '../next-seo.config';
import { pageview } from '../utils/gtag';
import 'nprogress/nprogress.css';
import '../styles/index.css';

NProgress.configure({ showSpinner: false });

const start = debounce(NProgress.start, 200);

Router.onRouteChangeStart = () => start();

Router.onRouteChangeComplete = url => {
	start.cancel();
	NProgress.done();
	pageview(url);
};

Router.onRouteChangeError = () => {
	start.cancel();
	NProgress.done();
};

const App = ({ Component, pageProps }) => {
	return (
		<>
			<DefaultSEO {...SEO} />
			<Component {...pageProps} />
		</>
	);
};

App.propTypes = {
	Component: elementType,
	pageProps: object,
};

export default App;
