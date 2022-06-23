import { useContext } from "react";
import { Link } from "react-router-dom";

import { HStack, Icon } from "@chakra-ui/react";
import { ImExit } from "react-icons/im";
import { AuthContext } from "../../context/auth";

import "../Button/styles.scss";

export function NotificationNav() {
	const { signOut } = useContext(AuthContext);

	const handleLogout = () => {
		signOut();
	};

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
			<Link to="/">
				<Icon
					onClick={handleLogout}
					className="exit-btn"
					_hover={{}}
					ml={["3", "5"]}
					as={ImExit}
					fontSize="20"
					cursor="pointer"
				/>
			</Link>
		</HStack>
	);
}
