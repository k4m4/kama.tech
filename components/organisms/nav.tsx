import { Link, Box, Flex, Center } from '@chakra-ui/core';
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
			transition="all 0.2s ease-in"
			w="full"
			position="fixed"
			color="gray.400"
			top={0}
			zIndex={10}
			h={isNavTop ? 40 : 24}
			bg={isNavTop ? 'transparent' : 'black'}
		>
			<Flex
				align="center"
				justify="space-between"
				w={{ base: '85%', md: '90%' }}
				mx="auto"
				h="full"
			>
				<NextLink href="/">
					<Link
						as="a"
						transition="all 0.2s ease-in"
						color={isNavTop ? 'white' : 'gray.400'}
						_hover={{
							color: isNavTop ? 'gray.400' : 'white',
						}}
						_focus={{
							color: isNavTop ? 'gray.400' : 'white',
							outline: 'none',
						}}
						pb={4}
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
						initial="hidden"
						animate={isOpen ? 'visible' : 'hidden'}
						variants={{
							visible: { opacity: 1 },
							hidden: { opacity: 0 },
						}}
					>
						<Flex
							mr={{ base: 4, md: 7 }}
							display={isOpen ? 'block' : 'none'}
							letterSpacing="wider"
							textTransform="uppercase"
						>
							<NextLink href="/archive">
								<Link
									as="a"
									transition="all 0.15s ease-in-out"
									ml={{ base: 3, md: 4 }}
									px={{ base: 2, md: 3, xl: 4 }}
									py={2}
									fontSize="md"
									fontWeight="500"
									lineHeight="shorter"
									color="gray.400"
									_focus={{
										outline: 'none',
										color: 'white',
									}}
									_hover={{ color: 'white' }}
								>
									Archive
								</Link>
							</NextLink>
						</Flex>
					</motion.div>
					<Center>
						<motion.div
							initial={false}
							animate={isOpen ? 'open' : 'closed'}
						>
							<Box
								aria-label="Menu"
								aria-expanded={isOpen}
								_hover={{ color: 'white' }}
								_focus={{
									outline: 'none',
									color: 'white',
								}}
								mx={{ lg: 2 }}
								cursor="pointer"
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
