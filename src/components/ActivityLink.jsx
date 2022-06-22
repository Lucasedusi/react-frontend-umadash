import { Link as ChakraLink } from "@chakra-ui/react";
import React, { cloneElement } from "react";
import { useLocation } from "react-router-dom";

export function ActivityLink({
	children,
	shouldMatchExactHref = false,
	...rest
}) {
	const { pathname } = useLocation();

	let isActive = false;

	if (
		shouldMatchExactHref &&
		(pathname === rest.href || pathname === rest.as)
	) {
		isActive = true;
	}

	if (
		!shouldMatchExactHref &&
		(pathname.startsWith(String(rest.href)) ||
			pathname.startsWith(String(rest.as)))
	) {
		isActive = true;
	}

	return (
		<ChakraLink {...rest}>
			{cloneElement(children, {
				color: isActive ? "pink.400" : "gray.50",
			})}
		</ChakraLink>
	);
}
