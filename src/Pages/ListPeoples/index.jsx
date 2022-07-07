import React, { useState, useEffect, useRef } from "react";
import {
	Box,
	Button,
	Flex,
	Heading,
	Icon,
	Link,
	Table,
	Avatar,
	Input,
	Tbody,
	Td,
	Text,
	Tr,
	useBreakpointValue,
} from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import { RiAddLine, RiSearchLine } from "react-icons/ri";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";

import moment from "moment";
import "moment/locale/pt-br";

import { api } from "../../services/api";

export const ListPeoples = () => {
	const [loading, setLoading] = useState(true);
	const [peoples, setPeoples] = useState([]);
	const searchInputRef = useRef(null);

	// const isWideVersion = useBreakpointValue({
	// 	base: false,
	// 	lg: true,
	// });

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
						<Flex mb="8" justify="space-between" alignItems="center">
							<Flex
								as="label"
								flex="1"
								py="1.5"
								px="2"
								maxW="400"
								alignSelf="center"
								color="gray.200"
								position="relative"
								bg="gray.700"
								borderRadius={5}
							>
								<Input
									color="gray.50"
									variant="unstyled"
									px="4"
									// mr="4"
									placeholder="Buscar Jovem..."
									_placeholder={{ color: "gray.400" }}
									ref={searchInputRef}
								/>
								<Icon as={RiSearchLine} cursor="pointer" fontSize="20" />
							</Flex>

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
												<Td
													pl={2}
													display="flex"
													justifyContent="space-between"
													alignItems="center"
												>
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
													<Box>
														<Icon
															as={FaRegEdit}
															mr={2}
															cursor="pointer"
															fontSize="20"
														/>
														<Icon
															as={FaRegTrashAlt}
															cursor="pointer"
															fontSize="20"
															color="rose.500"
														/>
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
