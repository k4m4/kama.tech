import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import { CSSProperties, ReactNode, HTMLAttributes, DetailedHTMLProps } from 'react';
import { FaAnchor } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import prismTheme from '../../prism-theme';

type HeadingProps = {
	as: 'h1' | 'h2' | 'h3' | 'h4';
	children: ReactNode;
} & DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

const Heading = ({ as: Component, className, ...props }: HeadingProps) => {
	const size = Number(Component.replace('h', ''));

	if (!props.id) {
		return (
			<Component
				className={className}
				{...props}
			/>
		);
	}

	return (
		<Component
			className={`text-white font-medium text-${5 - size}xl lg:text-${6 - size}xl anchor-link ${className ? className : ''}`}
			{...props}
		>
			<div className="inline-flex items-center">
				{props.children}
				<a
					className="inline-flex items-center opacity-50 hover:opacity-100 transition-all duration-200 ease-in-out hover:text-red-500"
					href={`#${props.id}`}
					aria-label="Anchor Link"
				>
					<FaAnchor className="pl-2 text-2xl h-full" />
				</a>
			</div>
		</Component>
	);
};

type PreProps = {
	children: ReactNode;
	className?: string;
	style?: CSSProperties;
};

const Pre = ({ children, className, style }: PreProps) => {
	return (
		<pre
			className={`bg-gray-900 text-purple-400 p-6 md:p-8 lg:p-10 rounded-lg my-4 overflow-x-scroll font-mono text-xs md:text-sm lg:text-base cursor-text${className ? className : ''}`}
			style={style}
		>
			{children}
		</pre>
	);
};

type CodeBlockProps = {
	children: ReactNode;
	className?: string;
};

const CodeBlock = ({ children, className }: CodeBlockProps) => {
	const language = className?.replace(/language-/, '') as Language;
	if (!language) {
		return (
			<Pre>{children}</Pre>
		);
	}

	return (
		<Highlight
			{...defaultProps}
			theme={prismTheme}
			code={String(children)}
			language={language}
		>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<Pre
					className={className}
					style={style}
				>
					{tokens.map((line, i) => (
						<div
							key={i}
							{...getLineProps({ line, key: i })}
						>
							{line.map((token, key) => (
								<span
									key={key}
									{...getTokenProps({ token, key })}
								/>
							))}
						</div>
					))}
				</Pre>
			)}
		</Highlight>
	);
};

type ImageProps = {
	src: string;
};

const Image = ({ src, ...props }: ImageProps) => {
	return (
		<span className="flex justify-center items-center w-full">
			<LazyLoadImage
				effect="blur"
				src={`/static/images/${src}`}
				className="border-solid border-2 border-gray-800 rounded p-3 md:p-4 lg:p-5"
				{...props}
			/>
		</span>
	);
};

const MDXComponents = {
	h1: props => (
		<Heading
			as="h1"
			className="mt-24"
			{...props}
		/>
	),
	h2: props => (
		<Heading
			as="h2"
			className="mt-20"
			{...props}
		/>
	),
	h3: props => (
		<Heading
			as="h3"
			className="mt-16"
			{...props}
		/>
	),
	h4: props => (
		<Heading
			as="h4"
			className="mt-12"
			{...props}
		/>
	),
	p: props => (
		<p
			className="text-base md:text-lg lg:text-xl my-8 tracking-wide break-words"
			{...props}
		/>
	),
	a: props => (
		<a
			className="border-b border-red-500 hover:text-white focus:text-white"
			{...props}
		/>
	),
	code: CodeBlock,
	blockquote: props => (
		<blockquote
			className="text-base md:text-lg lg:text-xl italic border-l-4 pl-3 quote whitespace-pre-wrap break-words cursor-text"
			{...props}
		/>
	),
	inlineCode: props => (
		<code
			className="font-mono text-purple-400 bg-gray-900 p-1 rounded-sm whitespace-pre-wrap break-words cursor-text"
			{...props}
		/>
	),
	br: props => (
		<br
			className="p-5"
			{...props}
		/>
	),
	hr: props => (
		<hr
			className="my-10 border-white"
			{...props}
		/>
	),
	ul: props => (
		<ul
			className="mt-8 ml-4 list-disc"
			{...props}
		/>
	),
	ol: props => (
		<ol
			className="mt-8 ml-4 list-decimal"
			{...props}
		/>
	),
	li: props => (
		<li
			className="mb-2 text-base md:text-lg lg:text-xl"
			{...props}
		/>
	),
	img: Image,
	script: props => <script {...props} />,
	strong: props => (
		<strong
			className="font-bold"
			{...props}
		/>
	),
};

export default MDXComponents;
