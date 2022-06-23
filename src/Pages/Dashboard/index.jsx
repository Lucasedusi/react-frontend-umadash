import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";

import Chart from "react-apexcharts";
import { theme } from "../../styles/theme";

const series = [40, 62];
const options = {
	series: [10, 16],
	labels: ["Masculino", "Feminino"],
	colors: ["#001D6E", "#F24C4C"],
	plotOptions: {
		pie: {
			expandOnClick: false,
			donut: {
				size: "48px",
				labels: {
					show: true,
					total: {
						show: true,
						showAlways: true,
						fontSize: "16px",
						color: "#fff",
					},
				},
			},
		},
	},

	legend: {
		position: "bottom",
	},

	responsive: [
		{
			breakpoint: 480,
			options: {
				chart: {
					width: "100%",
				},
				legend: {
					position: "bottom",
				},
			},
		},
	],
};

const ser = [36, 16, 18, 12, 20, 8];
const opt = {
	series: [36, 16, 18, 12, 20, 8],
	labels: [
		"Sede",
		"Vila Record",
		"Vila Operária",
		"Sol Nascente",
		"Betesda",
		"Canaã",
	],
	colors: ["#187498", "#36AE7C", "#F9D923", "#E8630A", "#F190B7", "#573391"],
	plotOptions: {
		pie: {
			expandOnClick: false,
			donut: {
				size: "48px",
				labels: {
					show: true,
					total: {
						show: true,
						showAlways: true,
						fontSize: "16px",
						color: "#fff",
					},
				},
			},
		},
	},

	legend: {
		position: "bottom",
	},

	responsive: [
		{
			breakpoint: 480,
			options: {
				chart: {
					width: "100%",
				},
				legend: {
					position: "bottom",
				},
			},
		},
	],
};

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
					<Box p={["6", "8"]} bg="gray.800" borderRadius={8}>
						<Text textAlign="center" fontSize="17" mb="4">
							Total de Jovens do Campo
						</Text>
						<Chart
							options={options}
							series={series}
							type="donut"
							width="100%"
							height={300}
						/>
					</Box>

					<Box p={["6", "8"]} bg="gray.800" borderRadius={8}>
						<Text textAlign="center" fontSize="17" mb="4">
							Jovens Por Congregação
						</Text>
						<Chart
							options={opt}
							series={ser}
							type="donut"
							width="100%"
							height={300}
						/>
					</Box>
				</SimpleGrid>
			</Flex>
		</Flex>
	);
};
