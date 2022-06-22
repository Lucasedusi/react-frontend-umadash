import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/auth";

export const Private = ({ Component }) => {
	const { signed } = useContext(AuthContext);

	return signed ? <Component /> : <Navigate to="/" />;
};
