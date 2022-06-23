import {
	Box,
	Button,
	Flex,
	Heading,
	Icon,
	Link,
	Table,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	useBreakpointValue,
} from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import { RiAddLine } from "react-icons/ri";

export const Peoples = () => {
	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true,
	});

	return (
		<Box>
			<Header />

			<Flex w="100%" my="10" maxWidth={1250} mx="auto" px="6">
				<SideBar />

				<Box flex="1" borderRadius={8} bg="gray.800" p="8">
					<Flex mb="8" justify="space-between" align="center">
						<Heading size="lg" fontWeight="normal">
							Usuário
							{/* <Spinner size="sm" color="gray.500" ml="4" /> */}
						</Heading>

						<Link href="#">
							<Button
								as="a"
								size="sm"
								cursor="pointer"
								fontSize="sm"
								colorScheme="rose"
								leftIcon={<Icon as={RiAddLine} fontSize="20" />}
							>
								Criar Novo
							</Button>
						</Link>
					</Flex>

					<>
						<Table colorScheme="whiteAlpha">
							<Thead>
								<Tr>
									<Th>Usuário</Th>
									{isWideVersion && <Th>Data de Cadastro</Th>}
								</Tr>
							</Thead>
							<Tbody>
								<Tr>
									<Td>
										<Box>
											<Link color="purple.400">
												<Text fontWeight="bold"></Text>
											</Link>
											<Text fontSize="sm" color="gray.300"></Text>
										</Box>
									</Td>
									{isWideVersion && <Td></Td>}
								</Tr>
							</Tbody>
						</Table>
					</>
				</Box>
			</Flex>
		</Box>
	);
};
