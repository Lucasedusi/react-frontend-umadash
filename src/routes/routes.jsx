import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { Dashboard } from "../Pages/Dashboard";
import { PrivateRoute } from "./private.routes";

export const AppRouter = () => {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/dashboard" element={<PrivateRoute />}>
					<Route path="/dashboard" element={<Dashboard />} />
				</Route>
			</Routes>
		</Router>
	);
};
