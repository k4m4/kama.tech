import { Link, Box, Flex, Center } from '@chakra-ui/react';
import { motion, useCycle, useViewportScroll } from 'framer-motion';
import NextLink from 'next/link';
import { useState, useEffect } from 'react';
import Logo from '../atoms/logo';
import MenuIcon from '../molecules/menu-icon';

const Nav = () => {
	const [isNavTop, setIsNavTop] = useState(true);
	const [isOpen, toggleOpen] = useCycle(false, true);

	const { scrollY } = useViewportScroll();
	useEffect(() => {
		const unsubscribe = scrollY.onChange(distance => setIsNavTop(distance < 10));
		return () => {
			unsubscribe();
		};
	}, [scrollY]);

	return (
		<Box
			as="nav"
			bg="black"
			color="gray.400"
			h={isNavTop ? 40 : 24}
			position="fixed"
			top={0}
			transition="all 0.2s ease-in"
			w="full"
			zIndex={10}
		>
			<Flex
				align="center"
				h="full"
				justify="space-between"
				mx="auto"
				w={{ base: '85%', md: '90%' }}
			>
				<NextLink href="/">
					<Link
						_focus={{
							color: isNavTop ? 'gray.400' : 'white',
							outline: 'none',
						}}
						_hover={{
							color: isNavTop ? 'gray.400' : 'white',
						}}
						as="a"
						color={isNavTop ? 'white' : 'gray.400'}
						pb={3}
						transition="all 0.2s ease-in"
					>
						<Logo />
					</Link>
				</NextLink>
				<Flex
					align="center"
					fontFamily="'Space', sans-serif"
					h="full"
					ml={2}
				>
					<motion.div
						animate={isOpen ? 'visible' : 'hidden'}
						initial="hidden"
						variants={{
							visible: { opacity: 1 },
							hidden: { opacity: 0 },
						}}
					>
						<Flex
							display={isOpen ? 'block' : 'none'}
							letterSpacing="wider"
							mr={{ base: 4, md: 7 }}
							textTransform="uppercase"
						>
							<NextLink href="/archive">
								<Link
									_focus={{
										outline: 'none',
										color: 'white',
									}}
									_hover={{ color: 'white' }}
									as="a"
									color="gray.400"
									fontSize="md"
									fontWeight="500"
									lineHeight="shorter"
									ml={{ base: 3, md: 4 }}
									px={{ base: 2, md: 3, xl: 4 }}
									py={2}
									transition="all 0.15s ease-in-out"
								>
									Archive
								</Link>
							</NextLink>
						</Flex>
					</motion.div>
					<Center>
						<motion.div
							animate={isOpen ? 'open' : 'closed'}
							initial={false}
						>
							<Box
								_focus={{
									outline: 'none',
									color: 'white',
								}}
								_hover={{ color: 'white' }}
								aria-expanded={isOpen}
								aria-label="Menu"
								cursor="pointer"
								mx={{ lg: 2 }}
								onClick={() => toggleOpen()}
							>
								<MenuIcon />
							</Box>
						</motion.div>
					</Center>
				</Flex>
			</Flex>
		</Box>
	);
};

export default Nav;
