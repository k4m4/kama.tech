import {
	Box,
	Link,
	Center,
	Heading,
	HeadingProps,
	List,
	ListItem,
	Text,
} from '@chakra-ui/core';
import NextLink from 'next/link';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import { CSSProperties, ReactNode } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AnchorIcon } from '../../theme/icons';
import prismTheme from '../../theme/prism';

const CustomHeading = (props: HeadingProps) => {
	if (!props.id) {
		return (
			<Heading {...props} />
		);
	}

	return (
		<Heading
			css={{
				'&[id]::before': {
					display: 'block',
					height: '6rem',
					marginTop: '-6rem',
					visibility: 'hidden',
					content: '""',
				},
			}}
			{...props}
		>
			<Box
				alignItems="center"
				d="inline-flex"
				wordBreak="break-all"
			>
				{props.children}
				<Link
					alignItems="center"
					aria-label="Anchor Link"
					as="a"
					d="inline-flex"
					href={`#${props.id}`}
					ml={2}
					transition="all 0.2s ease-in-out"
				>
					<Box
						_hover={{
							opacity: 1,
							color: 'red.400',
						}}
						color="gray.400"
						cursor="pointer"
						fontSize="md"
						h="full"
						opacity={0.5}
					>
						<AnchorIcon />
					</Box>
				</Link>
			</Box>
		</Heading>
	);
};

type CustomLinkProps = {
	href: string;
};

const CustomLink = ({ href, ...props }: CustomLinkProps) => {
	const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

	if (isInternalLink) {
		return (
			<NextLink
				passHref
				href={href}
			>
				<Link
					as="a"
					{...props}
				/>
			</NextLink>
		);
	}

	return (
		<Link
			isExternal
			{...props}
		/>
	);
};

type PreProps = {
	children: ReactNode;
	className?: string;
	style?: CSSProperties;
};

const Pre = (props: PreProps) => {
	return (
		<Box
			as="pre"
			bg="gray.800"
			color="purple.300"
			cursor="text"
			fontFamily="mono"
			fontSize={{ base: 'xs', md: 'sm', xl: 'md' }}
			my={4}
			overflowX="scroll"
			p={{ base: 6, md: 8, xl: 10 }}
			{...props}
		/>
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
			code={String(children)}
			language={language}
			theme={prismTheme}
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
		<Center
			as="span"
			w="full"
		>
			<LazyLoadImage
				className="border-solid border-2 border-gray-800 p-3 md:p-4 lg:p-5"
				effect="blur"
				src={`/static/images/${src}`}
				{...props}
			/>
		</Center>
	);
};

const MDXComponents = {
	h1: props => (
		<CustomHeading
			as="h1"
			mt={24}
			textStyle="h1"
			{...props}
		/>
	),
	h2: props => (
		<CustomHeading
			as="h2"
			mt={20}
			textStyle="h2"
			{...props}
		/>
	),
	h3: props => (
		<CustomHeading
			as="h3"
			mt={16}
			textStyle="h3"
			{...props}
		/>
	),
	h4: props => (
		<CustomHeading
			as="h4"
			mt={12}
			textStyle="h4"
			{...props}
		/>
	),
	p: props => (
		<Text
			color="gray.400"
			fontSize={{ base: 'md', md: 'lg', xl: 'xl' }}
			letterSpacing="wide"
			my={8}
			wordBreak="break-word"
			{...props}
		/>
	),
	a: props => (
		<CustomLink
			_focus={{ color: 'white' }}
			_hover={{ color: 'white' }}
			borderBottomWidth={1}
			borderColor="red.400"
			{...props}
		/>
	),
	code: CodeBlock,
	blockquote: props => (
		<Box
			as="blockquote"
			borderLeftWidth={4}
			cursor="text"
			fontSize={{ base: 'md', md: 'lg', xl: 'xl' }}
			fontStyle="italic"
			pl={3}
			whiteSpace="pre-wrap"
			wordBreak="break-word"
			{...props}
		/>
	),
	inlineCode: props => (
		<Text
			as="code"
			bg="gray.800"
			color="purple.300"
			cursor="text"
			fontStyle="mono"
			p={1}
			whiteSpace="pre-wrap"
			wordBreak="break-word"
			{...props}
		/>
	),
	hr: props => (
		<Box
			as="hr"
			borderColor="white"
			my={10}
			{...props}
		/>
	),
	ul: props => (
		<List
			color="gray.400"
			mt={8}
			styleType="disc"
			{...props}
		/>
	),
	ol: props => (
		<List
			as="ol"
			color="gray.400"
			mt={8}
			styleType="disc"
			{...props}
		/>
	),
	li: props => (
		<ListItem
			fontSize={{ base: 'sm', md: 'md', xl: 'lg' }}
			mb={2}
			{...props}
		/>
	),
	img: Image,
	strong: props => (
		<Text
			as="strong"
			fontWeight={700}
			{...props}
		/>
	),
};

export default MDXComponents;
