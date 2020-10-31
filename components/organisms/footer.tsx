import {
	Link,
	Box,
	Flex,
	Text,
	Center,
	LinkProps,
} from '@chakra-ui/core';
import NextLink from 'next/link';
import {
	GitHubIcon,
	TwitterIcon,
	EmailIcon,
} from '../../theme/icons';
import logOutboundLink from '../../utils/log-outbound-link';
import Logo from '../atoms/logo';

type SocialLinkProps = {
	name: string;
} & LinkProps;

const SocialLink = ({ name, children, ...props }: SocialLinkProps) => {
	return (
		<Link
			isExternal
			transition="all 0.2s ease-in"
			aria-label={name}
			_hover={{ color: 'white' }}
			_focus={{
				outline: 'none',
				color: 'white',
			}}
			flex="1"
			py={{ base: 8, md: 0 }}
			onClick={() => logOutboundLink(`Footer > ${name}`)}
			{...props}
		>
			<Center>
				{children}
			</Center>
		</Link>
	);
};

const Footer = () => {
	return (
		<Box
			as="footer"
			color="gray.400"
		>
			<Flex
				w={{ base: '85%', md: '90%' }}
				mx="auto"
				direction="column"
			>
				<Flex
					align="center"
					justify="space-between"
					direction={{ base: 'column', md: 'row' }}
					h={{ base: 'auto', md: 40 }}
					py={{ base: 10, md: 0 }}
					overflow="hidden"
					borderWidth={1}
					borderBottomWidth={0}
					borderColor="gray.800"
				>
					<Center
						borderColor="gray.800"
						borderRightWidth={{ base: 0, md: 1 }}
						order={{ base: 2, md: 0 }}
						w={{ base: 'full', md: '33.3%' }}
						h={{ base: '60px', md: 'full' }}
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
							as="a"
							w="full"
							transition="all 0.2s ease-in"
							_focus={{
								outline: 'none',
								color: 'white',
							}}
							_hover={{ color: 'white' }}
							cursor="pointer"
							h="52px"
						>
							<Center
								h="full"
								pb={4}
							>
								<Logo />
							</Center>
						</Box>
					</NextLink>
					<Center
						h={{ base: '60px', md: 'full' }}
						w={{ base: 'full', md: '33.3%' }}
						borderLeftWidth={{ base: 0, md: 1 }}
						borderColor="gray.800"
						fontSize={{ base: '2xl', md: 'xl' }}
						px={{ base: 16, md: 0 }}
						my={{ base: 6, md: 0 }}
					>
						<SocialLink
							href="https://github.com/k4m4"
							name="GitHub"
							ml={{ md: 4 }}
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
							href="mailto:nikolaskam@gmail.com"
							name="Email"
							mr={{ md: 4 }}
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
