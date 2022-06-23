import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";
import { Peoples } from "../pages/Peoples";
import { Private } from "./private.routes";

export const AppRouter = () => {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Login />} />
				<Route path="/register" element={<Register />} />

				<Route path="/dashboard" element={<Private Component={Dashboard} />} />
				<Route path="/peoples" element={<Peoples />} />
			</Routes>
		</Router>
	);
};
