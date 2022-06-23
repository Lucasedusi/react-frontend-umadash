import {
	Flex,
	Icon,
	IconButton,
	useBreakpointValue,
	useDisclosure,
	Drawer,
	Button,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
} from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { SideBarNav } from "../SideBar/SideBarNav";
import { UseSideBarDrawer } from "../../context/SideBarDrawerContext";

import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header() {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true,
	});

	const isDrawerSiderBar = useBreakpointValue({
		base: true,
		lg: false,
	});

	return (
		<Flex
			as="header"
			w="100%"
			maxWidth={1250}
			h="20"
			mx="auto"
			mt="4"
			px="6"
			align="center"
		>
			{isDrawerSiderBar && (
				<>
					<IconButton
						aria-label="Open Navigation"
						icon={<Icon as={RiMenuLine} />}
						fontSize="32"
						variant="unstyled"
						onClick={onOpen}
						mr="2"
					></IconButton>
					<Drawer isOpen={isOpen} placement="left" onClose={onClose}>
						<DrawerOverlay>
							<DrawerContent bg="gray.800" p="4">
								<DrawerCloseButton mt="6" />
								<DrawerHeader>Navageção</DrawerHeader>

								<DrawerBody>
									<SideBarNav />
								</DrawerBody>
							</DrawerContent>
						</DrawerOverlay>
					</Drawer>
				</>
			)}

			<Logo />

			{isWideVersion && <SearchBox />}

			<Flex align="center" ml="auto">
				<NotificationNav />
				<Profile showProfileData={isWideVersion} />
			</Flex>
		</Flex>
	);
}
