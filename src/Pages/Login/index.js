/* eslint-disable jsx-a11y/anchor-is-valid */

import { useState } from "react";

import logoImg from "../../assets/logo.png";
import "./styles.scss";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className="container">
			<div className="container-login">
				<div className="wrap-login">
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
							<a href="#" className="link-password">
								Esqueceu a senha?
							</a>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;
