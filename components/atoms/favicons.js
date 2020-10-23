const Favicons = () => {
	return (
		<>
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
			<link
				rel="mask-icon"
				href="/static/favicons/safari-pinned-tab.svg"
				color="#f56565"
			/>
		</>
	);
};

export default Favicons;
