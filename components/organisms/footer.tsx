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
				w={['85%', '85%', '85%', '90%']}
				mx="auto"
				direction="column"
			>
				<Flex
					align="center"
					justify="space-between"
					direction={['column', 'column', 'column', 'row']}
					h={['auto', 'auto', 'auto', 40]}
					py={[10, 10, 10, 0]}
					overflow="hidden"
					borderWidth={1}
					borderBottomWidth={0}
					borderColor="gray.800"
				>
					<Flex
						w={['full', 'full', 'full', '33.3%']}
						h="full"
						align="center"
						justify="center"
						borderColor="gray.800"
						borderRightWidth={[0, 0, 0, 1]}
						order={[2, 2, 2, 0]}
						mt={[12, 12, 12, 0]}
						mb={[7, 7, 7, 0]}
					>
						<Text
							fontFamily="mono"
							fontSize="lg"
						>
							&copy; 2020
						</Text>
					</Flex>
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
							mb={[12, 12, 12, 0]}
						>
							<Center h="full">
								<Logo />
							</Center>
						</Box>
					</NextLink>
					<Center
						px={[16, 16, 16, 0]}
						h="full"
						w={['full', 'full', 'full', '33.3%']}
						borderLeftWidth={[0, 0, 0, 1]}
						borderColor="gray.800"
						fontSize={['2xl', '2xl', '2xl', 'xl']}
					>
						<SocialLink
							href="https://github.com/k4m4"
							name="GitHub"
							ml={{ lg: 4 }}
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
							mr={{ lg: 4 }}
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
