import { Authprovider } from "./context/auth";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "./styles/theme";

import { AppRouter } from "./routes/routes";
import { GlobalStyles } from "./styles/global";

function App() {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<Authprovider>
				<AppRouter />
				<GlobalStyles />
			</Authprovider>
		</ChakraProvider>
	);
}

export default App;
