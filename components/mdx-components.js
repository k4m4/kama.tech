import Highlight, { defaultProps } from 'prism-react-renderer';
import dracula from 'prism-react-renderer/themes/dracula';
import { FaAnchor } from 'react-icons/fa';
import { string, node } from 'prop-types';

const Heading = ({ as: Component, ...props }) => {
	const size = Number(Component.replace('h', ''));

	if (!props.id) {
		return (
			<Component {...props} />
		);
	}

	return (
		<Component className={`text-${5 - size}xl md:text-${6 - size}xl lg:text-${7 - size}xl mt-${7 - size}`} {...props}>
			{props.children}
			<a
				className="slug opacity-50 hover:opacity-100 transition-all duration-200 ease-in-out hover:text-red-500"
				href={`#${props.id}`}
			>
				<FaAnchor className="inline pl-2 text-2xl" />
			</a>
		</Component>
	);
};

Heading.propTypes = {
	as: string.isRequired,
	children: node.isRequired,
	id: string,
};

const Pre = ({ children }) => {
	return (
		<pre className="bg-gray-900 p-6 md:p-8 lg:p-10 rounded-lg my-4 overflow-x-scroll font-mono text-xs md:text-sm lg:text-base text-white cursor-text">
			{children}
		</pre>
	);
};

Pre.propTypes = {
	children: node.isRequired,
};

const CodeBlock = ({ children, className }) => {
	const language = className && className.replace(/language-/, '');
	if (!language) {
		return (
			<Pre>{children}</Pre>
		);
	}

	return (
		<Highlight theme={dracula} {...defaultProps} code={children} language={language}>
			{({ tokens, getLineProps, getTokenProps }) => (
				<Pre>
					{tokens.map((line, i) => (
						<div key={i} {...getLineProps({ line, key: i })}>
							{line.map((token, key) => (
								<span key={key} {...getTokenProps({ token, key })} />
							))}
						</div>
					))}
				</Pre>
			)}
		</Highlight>
	);
};

CodeBlock.propTypes = {
	children: node.isRequired,
	className: string,
};

const MDXComponents = {
	h1: props => <Heading as="h1" {...props} />,
	h2: props => <Heading as="h2" {...props} />,
	h3: props => <Heading as="h3" {...props} />,
	h4: props => <Heading as="h4" {...props} />,
	p: props => <p className="text-base md:text-lg lg:text-xl mt-4 leading-loose" {...props} />,
	a: props => <a className="border-b-2 border-red-500 hover:text-red-500" {...props} />,
	code: CodeBlock,
	blockquote: props => <blockquote className="text-base md:text-lg lg:text-xl italic border-l-4 pl-3 bg-neutral-100 text-neutral-600 border-gray-900 dark:border-neutral-500 quote whitespace-pre-wrap break-words cursor-text" {...props} />,
	inlineCode: props => <code className="font-mono bg-gray-400 dark:bg-gray-900 p-1 rounded-sm whitespace-pre-wrap break-words cursor-text" {...props} />,
	br: props => <br className="p-5" {...props} />,
	hr: props => <hr className="my-10 border-black dark:border-white" {...props} />,
	ul: props => <ul className="pt-2 pl-2 ml-2 list-disc" {...props} />,
	ol: props => <ol className="pt-2 pl-2 ml-2 list-decimal" {...props} />,
	li: props => <li className="pb-1" {...props} />,
	script: props => <script {...props} />,
	img: props => <img className="border-solid border-2 border-gray-400 dark:border-gray-800 rounded p-5" {...props} />,
};

export default MDXComponents;
