import { HStack, Icon } from "@chakra-ui/react";
import { ImExit } from "react-icons/im";

import "../Button/styles.scss";

export function NotificationNav() {
	return (
		<HStack
			spacing={["6", "8"]}
			mx={["4", "6"]}
			pr={["2", "0"]}
			py="1"
			color="gray.300"
			borderLeftWidth={1}
			borderColor="gray.700"
		>
			<Icon
				className="exit-btn"
				_hover={{}}
				ml={["3", "5"]}
				as={ImExit}
				fontSize="20"
				cursor="pointer"
			/>
		</HStack>
	);
}
