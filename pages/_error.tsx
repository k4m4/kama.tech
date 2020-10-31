import { Box, Flex, Heading, Text } from '@chakra-ui/core';
import { NextPage, NextPageContext } from 'next';
import Page from '../components/templates/page';

type ErrorProps = {
	status: number;
};

const Error: NextPage<ErrorProps> = ({ status }: ErrorProps) => {
	return (
		<Page
			description={status === 404 ? 'This page got lost in the void.' : 'Not a good place to be in.'}
			showNav={false}
			title={status.toString()}
		>
			<Flex
				align="center"
				bg="black"
				color="white"
				h="100vh"
				justify="center"
				w="full"
			>
				<Heading
					as="h1"
					fontSize={{ base: '6xl', md: '7xl', xl: '6vw' }}
					fontStyle="mono"
					fontWeight={600}
				>
					{status || '1337'}
				</Heading>
				{status !== 404 && (
					<Box fontFamily="mono">
						<Text fontSize="md">
							An unexpected error has occured.
						</Text>
					</Box>
				)}
			</Flex>
		</Page>
	);
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
	const status = res ? res.statusCode : (err ? err.statusCode : 404);
	return { status };
};

export default Error;
