import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";

export const Dashboard = () => {
	return (
		<Flex direction="column" h="100vh">
			<Header />

			<Flex w="100%" my="10" maxWidth={1250} mx="auto" px="6">
				<SideBar />

				<SimpleGrid
					flex="1"
					gap="4"
					minChildWidth="320px"
					alignItems="flex-start"
				>
					<Box p={["6", "8"]} bg="gray.800" borderRadius={8}></Box>

					<Box p={["6", "8"]} bg="gray.800" borderRadius={8}></Box>
				</SimpleGrid>
			</Flex>
		</Flex>
	);
};
