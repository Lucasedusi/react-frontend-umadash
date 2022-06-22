import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { RiUserAddFill } from "react-icons/ri";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import logoImg from "../../assets/logo.png";
import { LayoutComponents } from "../../components/LayoutComponents";

import "./styles.scss";

import { AuthContext } from "../../context/auth";
import { Button } from "../../components/Button";
import { useForm } from "react-hook-form";

const loginSchema = yup.object().shape({
	email: yup.string().required("E-mail Obrigatório").email("E-mail Inválido"),
	password: yup.string().required("Senha Obrigatória").min(6, "Senha Inválida"),
});

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { signIn, signed } = useContext(AuthContext);

	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver(loginSchema),
	});

	const { errors } = formState;

	const handleSignIn = async () => {
		const data = {
			email: email,
			password: password,
		};

		await signIn(data);
	};

	if (signed) {
		return <Navigate to="dashboard" />;
	} else {
		return (
			<LayoutComponents>
				<form onSubmit={handleSubmit(handleSignIn)} className="login-form">
					<span className="login-form-title">
						<img src={logoImg} alt="Jovem Programador" />
					</span>

					<div className="wrap-input">
						<input
							name="email"
							className={email !== "" ? "has-value input" : "input"}
							{...register("email")}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<span className="focus-input" data-placeholder="Email"></span>
					</div>

					{errors.email?.message && (
						<div className="input-error">
							<span>{errors.email?.message}</span>
						</div>
					)}

					<div className="wrap-input">
						<input
							name="password"
							type="password"
							className={password !== "" ? "has-value input" : "input"}
							{...register("password")}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<span className="focus-input" data-placeholder="Senha"></span>
					</div>

					{errors.password?.message && (
						<div className="input-error">
							<span>{errors.password?.message}</span>
						</div>
					)}

					<div className="container-login-form-btn">
						<Button type="submit" className="login-form-btn">
							Entrar
						</Button>
					</div>

					<div className="text-center">
						<RiUserAddFill fontSize={17} color="#fff" />
						<Link to="/register" className="link-password">
							Criar Conta
						</Link>
					</div>
				</form>
			</LayoutComponents>
		);
	}
};
