import {
	Box,
	Flex,
	Text,
	Center,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import {
	GitHubIcon,
	TwitterIcon,
	KeybaseIcon,
	EmailIcon,
} from '../../theme/icons';
import Logo from '../atoms/logo';
import SocialLink from '../atoms/social-link';

const Footer = () => {
	return (
		<Box
			as="footer"
			color="gray.400"
		>
			<Flex
				direction="column"
				mx="auto"
				w={{ base: '85%', md: '90%' }}
			>
				<Flex
					align="center"
					borderBottom="none"
					borderColor="gray.800"
					borderWidth={1}
					direction={{ base: 'column', md: 'row' }}
					h={{ base: 'auto', md: 40 }}
					justify="space-between"
					overflow="hidden"
					py={{ base: 10, md: 0 }}
				>
					<Center
						borderColor="gray.800"
						borderRightWidth={{ base: 0, md: 1 }}
						h={{ base: '60px', md: 'full' }}
						order={{ base: 2, md: 0 }}
						w={{ base: 'full', md: '33.3%' }}
					>
						<Text
							fontFamily="mono"
							fontSize="lg"
						>
							&copy; 2020
						</Text>
					</Center>
					<NextLink href="/">
						<Box
							_focus={{
								outline: 'none',
								color: 'white',
							}}
							_hover={{ color: 'white' }}
							as="a"
							cursor="pointer"
							h="52px"
							transition="all 0.2s ease-in"
							w="full"
						>
							<Center
								h="full"
								pb={3}
							>
								<Logo />
							</Center>
						</Box>
					</NextLink>
					<Center
						borderColor="gray.800"
						borderLeftWidth={{ base: 0, md: 1 }}
						fontSize={{ base: '2xl', md: 'xl' }}
						h={{ base: '60px', md: 'full' }}
						my={{ base: 6, md: 0 }}
						px={{ base: 16, md: 0 }}
						w={{ base: 'full', md: '33.3%' }}
					>
						<SocialLink
							href="https://github.com/k4m4"
							ml={{ md: 4 }}
							name="GitHub"
						>
							<GitHubIcon />
						</SocialLink>
						<SocialLink
							href="https://twitter.com/nikolaskama"
							name="Twitter"
						>
							<TwitterIcon />
						</SocialLink>
						<SocialLink
							href="https://keybase.io/k4m4"
							name="Keybase"
						>
							<KeybaseIcon />
						</SocialLink>
						<SocialLink
							href="mailto:nikolaskam@gmail.com"
							mr={{ md: 4 }}
							name="Email"
						>
							<EmailIcon />
						</SocialLink>
					</Center>
				</Flex>
			</Flex>
		</Box>
	);
};

export default Footer;
