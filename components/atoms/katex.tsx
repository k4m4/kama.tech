import Head from 'next/head';

const KaTeX = () => {
	return (
		<Head>
			<link
				crossOrigin="anonymous"
				href="https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css"
				integrity="sha384-BdGj8xC2eZkQaxoQ8nSLefg4AV4/AwB3Fj+8SUSo7pnKP6Eoy18liIKTPn9oBYNG"
				rel="stylesheet"
			/>
			<link
				href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/copy-tex.css"
				rel="stylesheet"
				type="text/css"
			/>
			<script
				crossOrigin="anonymous"
				integrity="sha384-XhWAe6BtVcvEdS3FFKT7Mcft4HJjPqMQvi5V4YhzH9Qxw497jC13TupOEvjoIPy7"
				src="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/copy-tex.min.js"
			/>
		</Head>
	);
};

export default KaTeX;
