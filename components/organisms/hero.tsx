import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Center } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

type HeroProps = {
	title: string;
	subtitle?: string;
};

const Hero = ({ title, subtitle }: HeroProps) => {
	return (
		<Box
			h="100vh"
			position="relative"
			w="full"
		>
			<Flex
				direction="column"
				h="full"
				mx="auto"
				position="relative"
				w={{ base: '85%', md: '90%' }}
			>
				<motion.div
					animate={{
						opacity: 1,
						transition: {
							delay: 0.1,
						},
					}}
					exit={{ opacity: 0 }}
					initial={{ opacity: 0 }}
				>
					<Flex
						align="center"
						bottom={0}
						justify="space-between"
						mb={{ base: 40, md: 16 }}
						position="absolute"
						w="full"
					>
						<Box maxW="3xl">
							<Heading
								as="h1"
								fontFamily="body"
								fontSize={{ base: '2xl', md: '3xl', xl: '4xl' }}
								fontWeight={500}
								lineHeight="taller"
							>
								{title}
							</Heading>
							{subtitle && (
								<Heading
									as="h2"
									color="gray.300"
									dangerouslySetInnerHTML={{ __html: subtitle }}
									fontSize={{ base: 'md', md: 'lg', xl: 'xl' }}
									fontWeight={100}
									lineHeight="taller"
									mt={2}
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
									duration={500}
									offset={-100}
									to={title.toLowerCase() === 'archive' ? 'archived-posts' : 'projects'}
								>
									<Box
										_focus={{ color: 'white' }}
										_hover={{ color: 'white '}}
										color="gray.400"
										cursor="pointer"
										p={{ lg: 2 }}
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
