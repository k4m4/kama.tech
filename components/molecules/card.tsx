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
			p={{ base: 10, md: 16 }}
			mb={{ base: 10, md: 0 }}
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
				align={{ base: 'flex-start', md: 'center' }}
				direction={{ base: 'column', md: 'row' }}
				justify={{ base: 'space-around', md: 'space-between' }}
			>
				<Box
					mt={{ base: 16, md: 0 }}
					order={{ base: 2, md: 0 }}
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
