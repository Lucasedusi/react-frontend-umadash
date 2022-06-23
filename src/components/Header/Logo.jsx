import { Text } from "@chakra-ui/react";

export function Logo() {
	return (
		<Text
			fontSize={["2xl", "3xl"]}
			fontWeight="bold"
			letterSpacing="tight"
			w="64"
			mr={["20", "0"]}
		>
			UmaDash
			<Text as="span" ml="1" color="rose.500">
				.
			</Text>
		</Text>
	);
}
