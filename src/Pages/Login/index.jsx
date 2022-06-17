import { useState } from "react";
import { Link } from "react-router-dom";
import { RiUserAddFill } from "react-icons/ri";

import logoImg from "../../assets/logo.png";
import { LayoutComponents } from "../../components/LayoutComponents";

import "./styles.scss";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<LayoutComponents>
			<form className="login-form">
				<span className="login-form-title">
					<img src={logoImg} alt="Jovem Programador" />
				</span>

				<div className="wrap-input">
					<input
						className={email !== "" ? "has-value input" : "input"}
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<span className="focus-input" data-placeholder="Email"></span>
				</div>

				<div className="wrap-input">
					<input
						className={password !== "" ? "has-value input" : "input"}
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<span className="focus-input" data-placeholder="Senha"></span>
				</div>

				<div className="container-login-form-btn">
					<button className="login-form-btn">Entrar</button>
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
};
