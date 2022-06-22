import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";
import { Peoples } from "../pages/Peoples";
import { PrivateRoute } from "./private.routes";

export const AppRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/register" element={<Register />} />

				<Route element={<PrivateRoute />}>
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/peoples" element={<Peoples />} />
				</Route>
			</Routes>
		</Router>
	);
};
