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
					height: ' 6rem',
					marginTop: '-6rem',
					visibility: 'hidden',
					content: '""',
				},
			}}
			{...props}
		>
			<Box
				d="inline-flex"
				alignItems="center"
			>
				{props.children}
				<Link
					as="a"
					d="inline-flex"
					alignItems="center"
					transition="all 0.2s ease-in-out"
					href={`#${props.id}`}
					aria-label="Anchor Link"
					ml={2}
				>
					<Box
						color="gray.400"
						cursor="pointer"
						opacity={0.5}
						_hover={{
							opacity: 1,
							color: 'red.400',
						}}
						fontSize="md"
						h="full"
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
			p={{ base: 6, md: 8, xl: 10 }}
			my={4}
			overflowX="scroll"
			fontFamily="mono"
			fontSize={{ base: 'xs', md: 'sm', xl: 'md' }}
			cursor="text"
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
		<Center
			as="span"
			w="full"
		>
			<LazyLoadImage
				effect="blur"
				src={`/static/images/${src}`}
				className="border-solid border-2 border-gray-800 p-3 md:p-4 lg:p-5"
				{...props}
			/>
		</Center>
	);
};

const MDXComponents = {
	h1: props => (
		<CustomHeading
			as="h1"
			textStyle="h1"
			mt={24}
			{...props}
		/>
	),
	h2: props => (
		<CustomHeading
			as="h2"
			textStyle="h2"
			mt={20}
			{...props}
		/>
	),
	h3: props => (
		<CustomHeading
			as="h3"
			textStyle="h3"
			mt={16}
			{...props}
		/>
	),
	h4: props => (
		<CustomHeading
			as="h4"
			textStyle="h4"
			mt={12}
			{...props}
		/>
	),
	p: props => (
		<Text
			color="gray.400"
			fontSize={{ base: 'md', md: 'lg', xl: 'xl' }}
			my={8}
			letterSpacing="wide"
			wordBreak="break-word"
			{...props}
		/>
	),
	a: props => (
		<CustomLink
			borderBottomWidth={1}
			borderColor="red.400"
			_hover={{ color: 'white' }}
			_focus={{ color: 'white' }}
			{...props}
		/>
	),
	code: CodeBlock,
	blockquote: props => (
		<Box
			as="blockquote"
			fontSize={{ base: 'md', md: 'lg', xl: 'xl' }}
			fontStyle="italic"
			borderLeftWidth={4}
			whiteSpace="pre-wrap"
			wordBreak="break-word"
			pl={3}
			cursor="text"
			{...props}
		/>
	),
	inlineCode: props => (
		<Text
			as="code"
			fontStyle="mono"
			color="purple.300"
			bg="gray.800"
			p={1}
			cursor="text"
			whiteSpace="pre-wrap"
			wordBreak="break-word"
			{...props}
		/>
	),
	hr: props => (
		<Box
			as="hr"
			my={10}
			borderColor="white"
			{...props}
		/>
	),
	ul: props => (
		<List
			styleType="disc"
			color="gray.400"
			mt={8}
			{...props}
		/>
	),
	ol: props => (
		<List
			as="ol"
			styleType="disc"
			color="gray.400"
			mt={8}
			{...props}
		/>
	),
	li: props => (
		<ListItem
			mb={2}
			fontSize={{ base: 'sm', md: 'md', xl: 'lg' }}
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
