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
			_focus={{
				borderColor: 'white',
				outline: 'none',
			}}
			_hover={{
				borderColor: 'white',
			}}
			backgroundColor="black"
			borderColor="gray.800"
			borderWidth="1px"
			mb={{ base: 10, md: 0 }}
			overflowX="scroll"
			p={{ base: 10, md: 16 }}
			transition="all 0.2s ease-in"
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
						fontSize="xl"
						fontWeight={700}
						mb={6}
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
