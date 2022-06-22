/* eslint-disable react-hooks/exhaustive-deps */

import { useDisclosure } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { createContext, useContext, useEffect } from "react";

const SideBarDrawerContext = createContext({});

export function SideBarDrawerProvider({ children }) {
	const disclosure = useDisclosure();
	const router = useLocation();

	useEffect(() => {
		disclosure.onClose();
	}, [router.pathname]);

	return (
		<SideBarDrawerContext.Provider value={disclosure}>
			{children}
		</SideBarDrawerContext.Provider>
	);
}

export const UseSideBarDrawer = () => useContext(SideBarDrawerContext);
