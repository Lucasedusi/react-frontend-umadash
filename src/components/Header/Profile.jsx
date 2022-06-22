import { React } from "react";
import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

export function Profile() {
	return (
		<Flex align="center">
			<Box mr="4" textAlign="right">
				<Text fontWeight="bold">Lucas Eduardo</Text>
				<Text color="gray.300" fontSize="small">
					Secretário Umadep
				</Text>
			</Box>

			<Avatar
				size="md"
				src="https://avatars.githubusercontent.com/u/33089713?v=4"
			/>
		</Flex>
	);
}
