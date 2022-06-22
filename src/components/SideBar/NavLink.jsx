import { Icon, Link as ChakraLink, Text } from "@chakra-ui/react";
import { ActivityLink } from "../ActivityLink";

export function NavLink({ icon, children, href, ...rest }) {
	return (
		<ActivityLink href={href}>
			<ChakraLink display="flex" alignItems="center" {...rest}>
				<Icon as={icon} fontSize="20" />
				<Text ml="4" fontWeight="medium">
					{children}
				</Text>
			</ChakraLink>
		</ActivityLink>
	);
}
