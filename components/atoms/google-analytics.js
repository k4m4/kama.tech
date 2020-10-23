import { GA_TRACKING_ID } from '../../utils/gtag';

const GoogleAnalytics = () => {
	return (
		<>
			<link
				rel="dns-prefetch"
				href="https://www.google-analytics.com"
			/>
			<script
				async
				src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
			/>
			<script
				dangerouslySetInnerHTML={{
					__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', '${GA_TRACKING_ID}');
					`,
				}}
			/>
		</>
	);
};

export default GoogleAnalytics;
