import { useEffect } from "react";
import { createContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { api } from "../services/api";

import { useToast } from "@chakra-ui/react";

export const AuthContext = createContext();

export const Authprovider = ({ children }) => {
	const [user, setUser] = useState(null);

	const toast = useToast();

	useEffect(() => {
		const loadingStorageData = async () => {
			const storageUser = localStorage.getItem("@Auth:user");
			const storageToken = localStorage.getItem("@Auth:token");

			if (storageUser && storageToken) {
				setUser(storageUser);
			}
		};

		loadingStorageData();
	}, []);

	const signIn = async ({ email, password }) => {
		const response = await api.post("/auth", {
			email,
			password,
		});

		if (response.data.error) {
			toast({
				title: `${response.data.error}`,
				status: "success",
				duration: 5000,
				isClosable: true,
			});
		} else {
			setUser(response.data.user);
			api.defaults.headers.common[
				"Authorization"
			] = `Bearer ${response.data.token}`;
			localStorage.setItem("@Auth:token", response.data.token);
			localStorage.setItem("@Auth:user", JSON.stringify(response.data.user));
		}
	};

	const signOut = async () => {
		localStorage.clear();
		setUser(null);

		return <Navigate to="/" />;
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				signed: !!user,
				signIn,
				signOut,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
