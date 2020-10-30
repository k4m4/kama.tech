import { Box, Flex, Heading, Center } from '@chakra-ui/core';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

type HeroProps = {
	title: string;
	subtitle?: string;
};

const Hero = ({ title, subtitle }: HeroProps) => {
	return (
		<Box
			position="relative"
			h="100vh"
			w="full"
		>
			<Flex
				position="relative"
				direction="column"
				h="full"
				w={['85%', '85%', '85%', '90%']}
				mx="auto"
			>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: {
							delay: 0.1,
						},
					}}
					exit={{ opacity: 0 }}
				>
					<Flex
						position="absolute"
						justify="space-between"
						align="center"
						w="full"
						bottom={0}
						mb={[40, 40, 40, 16]}
					>
						<Box maxW="3xl">
							<Heading
								as="h1"
								fontFamily="body"
								fontWeight={500}
								lineHeight="taller"
								fontSize={['2xl', '2xl', '3xl', '4xl']}
							>
								{title}
							</Heading>
							{subtitle && (
								<Heading
									as="h2"
									lineHeight="taller"
									color="gray.300"
									fontWeight={100}
									mt={2}
									fontSize={['md', 'md', 'lg', 'xl']}
									dangerouslySetInnerHTML={{ __html: subtitle }}
								/>
							)}
						</Box>
						<Center
							d="inline-flex"
							ml={2}
						>
							<motion.div whileHover={{ scale: 1.2 }}>
								<Link
									smooth
									to={title.toLowerCase() === 'archive' ? 'archived-posts' : 'projects'}
									duration={500}
									offset={-100}
								>
									<Box
										color="gray.400"
										cursor="pointer"
										p={{ lg: 2 }}
										_hover={{ color: 'white '}}
										_focus={{ color: 'white' }}
									>
										<ChevronDownIcon boxSize="22px" />
									</Box>
								</Link>
							</motion.div>
						</Center>
					</Flex>
				</motion.div>
			</Flex>
		</Box>
	);
};

export default Hero;
