import {
	Box,
	Flex,
	Heading,
	Text,
	Center,
} from '@chakra-ui/react';
import { ArrowUpRightIcon } from '../../theme/icons';

type CardProps = {
	title: string;
	subtitle: string;
	icon: JSX.Element;
};

const Card = ({ title, subtitle, icon }: CardProps) => {
	return (
		<Box
			_focus={{
				borderColor: {
					base: 'none',
					md: 'white',
				},
				outline: 'none',
			}}
			_hover={{
				borderColor: {
					base: 'none',
					md: 'white',
				},
			}}
			backgroundColor="black"
			borderColor="gray.800"
			borderWidth="1px"
			mb={{ base: 10, md: 0 }}
			overflowX="scroll"
			p={{ base: 10, md: 16 }}
			position="relative"
			transition="all 0.2s ease-in"
		>
			<Flex
				align={{ base: 'flex-start', md: 'center' }}
				direction={{ base: 'column', md: 'row' }}
				justify={{ base: 'space-around', md: 'space-between' }}
			>
				<Box
					mt={{ base: 20, md: 0 }}
					order={{ base: 2, md: 0 }}
				>
					<Heading
						as="h2"
						fontSize="xl"
						fontWeight={700}
						mb={6}
					>
						{title}
					</Heading>
					<Text
						color="gray.400"
						fontFamily="'Space Mono', monospace"
						fontWeight={300}
						lineHeight="tall"
					>
						{subtitle}
					</Text>
				</Box>
				<Box>
					<Center
						borderBottomWidth="1px"
						borderColor="gray.800"
						borderLeftWidth="1px"
						className="block-icon icon"
						color="gray.500"
						display={{ base: 'block', md: 'none' }}
						p={5}
						position="absolute"
						right={0}
						top={0}
					>
						<ArrowUpRightIcon boxSize={5} />
					</Center>
					{icon}
				</Box>
			</Flex>
		</Box>
	);
};

export default Card;
