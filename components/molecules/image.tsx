import { Center } from '@chakra-ui/core';
import NextImage from 'next/image';

type ImageProps = {
	src: string;
	width?: string | number;
	height?: string | number;
};

const Image = ({ src, width, height, ...props }: ImageProps) => {
	const isUnsized = !width || !height;
	const commonProps = {
		quality: 90,
		src: `/static/images/${src}`,
		...props,
	};

	return (
		<Center
			mt={4}
			w="full"
		>
			{isUnsized ? (
				<NextImage
					unsized
					{...commonProps}
				/>
			) : (
				<NextImage
					height={height}
					width={width}
					{...commonProps}
				/>
			)}
		</Center>
	);
};

export default Image;
