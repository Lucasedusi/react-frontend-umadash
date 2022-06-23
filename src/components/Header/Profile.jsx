import { React } from "react";
import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

export function Profile({ showProfileData }) {
	return (
		<Flex align="center">
			{showProfileData && (
				<Box mr="4" textAlign="right">
					<Text fontWeight="bold">Lucas Eduardo</Text>
					<Text color="gray.500" fontSize="small">
						Secretário
					</Text>
				</Box>
			)}

			<Avatar
				borderWidth="1px"
				borderColor="rose.400"
				mr={["1", "0"]}
				size="md"
				src="https://avatars.githubusercontent.com/u/33089713?v=4"
			/>
		</Flex>
	);
}
