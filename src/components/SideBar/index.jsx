import { Box, Drawer, useBreakpointValue } from "@chakra-ui/react";
import { SideBarNav } from "./SideBarNav";

export function SideBar() {
	const isDrawerSiderBar = useBreakpointValue({
		base: true,
		lg: false,
	});

	if (isDrawerSiderBar) {
		return <Drawer></Drawer>;
	}

	return (
		<Box as="aside" w="64">
			<SideBarNav />
		</Box>
	);
}
