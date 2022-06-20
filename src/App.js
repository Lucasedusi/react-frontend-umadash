import { Authprovider } from "./context/auth";
import { AppRouter } from "./routes/routes";
import { GlobalStyles } from "./styles/global";

function App() {
	return (
		<Authprovider>
			<AppRouter />
			<GlobalStyles />
		</Authprovider>
	);
}

export default App;
