import {
	Box,
	Flex,
	Heading,
	Text,
} from '@chakra-ui/core';

type CardProps = {
	title: string;
	subtitle: string;
	icon: JSX.Element;
};

const Card = ({ title, subtitle, icon }: CardProps) => {
	return (
		<Box
			backgroundColor="black"
			borderColor="gray.800"
			borderWidth="1px"
			p={[10, 10, 10, 16]}
			mb={[10, 10, 10, 0]}
			transition="all 0.2s ease-in"
			overflowX="scroll"
			_hover={{
				borderColor: 'white',
			}}
			_focus={{
				borderColor: 'white',
				outline: 'none',
			}}
		>
			<Flex
				align={['flex-start', 'flex-start', 'flex-start', 'center']}
				direction={['column', 'column', 'column', 'row']}
				justify={{ base: 'space-around', xl: 'space-between' }}
			>
				<Box
					mt={[16, 16, 16, 0]}
					order={[2, 2, 2, 0]}
				>
					<Heading
						as="h2"
						mb={6}
						fontSize="xl"
						fontWeight={700}
					>
						{title}
					</Heading>
					<Text
						color="gray.400"
						fontWeight={300}
					>
						{subtitle}
					</Text>
				</Box>
				{icon}
			</Flex>
		</Box>
	);
};

export default Card;
