import React, { useState, useEffect } from "react";
import {
	Box,
	Button,
	Flex,
	Heading,
	Icon,
	Link,
	Table,
	Spinner,
	Avatar,
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

import moment from "moment";
import "moment/locale/pt-br";

import { api } from "../../services/api";

export const ListPeoples = () => {
	const [loading, setLoading] = useState(true);
	const [peoples, setPeoples] = useState([]);

	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true,
	});

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await api.get("/peoples");
				setPeoples(response.data);
			} catch (error) {
				console.error(error.message);
			}

			setLoading(false);
		};

		fetchData();
	}, []);

	return (
		<>
			<Box>
				<Header />

				<Flex w="100%" my="10" maxWidth={1250} mx="auto" px="6">
					<SideBar />

					<Box flex="1" borderRadius={8} bg="gray.800" p="8">
						<Flex mb="8" justify="space-between" align="center">
							<Heading size="lg" fontWeight="normal">
								Lista de Jovens UMADEP
							</Heading>

							<Link href="peoples/create">
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
								<Tbody>
									{peoples.map((people, index) => {
										return (
											<Tr key={index}>
												<Td pl={2}>
													<Box display="flex" alignItems="center">
														<Avatar name={people.name} size="md" />
														<Box ml={3}>
															<Text
																display="flex"
																color="purple.400"
																alignItems="center"
															>
																<Text color="#FF8B8B" fontWeight="bold">
																	{people.name}
																</Text>
																<Text
																	color="gray.300"
																	ml={3}
																	bg="#187498"
																	padding="1"
																	borderRadius={5}
																	fontSize="14"
																	fontWeight="bold"
																>
																	{people.church}
																</Text>
																<Text
																	color="gray.300"
																	ml={3}
																	bg="#E8630A"
																	padding="1"
																	borderRadius={5}
																	fontSize="14"
																	fontWeight="bold"
																>
																	{people.marital_status}
																</Text>
															</Text>

															<Box
																display="flex"
																justifyContent="space-between"
																alignItems="center"
															>
																<Text
																	display="flex"
																	alignItems="center"
																	fontWeight="bold"
																	fontSize="14"
																	color="gray.500"
																	lineHeight={2.5}
																>
																	Telefone:
																	<Text
																		fontSize="13"
																		ml={1.5}
																		mr={5}
																		color="#fff"
																	>
																		{people.phone}
																	</Text>
																</Text>

																<Text
																	display="flex"
																	alignItems="center"
																	fontWeight="bold"
																	fontSize="14"
																	color="gray.500"
																	lineHeight={2.5}
																>
																	Data de Nascimento:
																	<Text
																		fontSize="13"
																		ml={1.5}
																		mr={5}
																		color="#fff"
																	>
																		{moment(people.birthday).format(
																			"DD/MM/YYYY"
																		)}
																	</Text>
																</Text>

																<Text
																	display="flex"
																	alignItems="center"
																	fontWeight="bold"
																	fontSize="14"
																	color="gray.500"
																	lineHeight={2.5}
																>
																	RG:
																	<Text
																		fontSize="13"
																		ml={1.5}
																		mr={5}
																		color="#fff"
																	>
																		{people.rg}
																	</Text>
																</Text>

																<Text
																	display="flex"
																	alignItems="center"
																	fontWeight="bold"
																	fontSize="14"
																	color="gray.500"
																	lineHeight={2.5}
																>
																	CPF:
																	<Text
																		fontSize="13"
																		ml={1.5}
																		mr={5}
																		color="#fff"
																	>
																		{people.cpf}
																	</Text>
																</Text>
															</Box>
														</Box>
													</Box>
												</Td>
											</Tr>
										);
									})}
								</Tbody>
							</Table>
						</>
					</Box>
				</Flex>
			</Box>
		</>
	);
};
