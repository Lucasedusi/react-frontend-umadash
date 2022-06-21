import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import ReactDOM from "react-dom/client";
import App from "./App";

import { createStandaloneToast } from "@chakra-ui/toast";
const { ToastContainer } = createStandaloneToast();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ChakraProvider>
			<App />
			<ToastContainer />
		</ChakraProvider>
	</React.StrictMode>
);
