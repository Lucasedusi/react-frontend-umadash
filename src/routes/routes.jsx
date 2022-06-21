import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { Home } from "../Pages/Home";
import { PrivateRoute } from "./private.routes";

export const AppRouter = () => {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/home" element={<PrivateRoute />}>
					<Route path="/home" element={<Home />} />
				</Route>
			</Routes>
		</Router>
	);
};
