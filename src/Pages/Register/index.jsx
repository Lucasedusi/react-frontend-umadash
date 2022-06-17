import { useState } from "react";
import { LayoutComponents } from "../../components/LayoutComponents";
import { Link } from "react-router-dom";

export const Register = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<LayoutComponents>
			<form className="login-form">
				<span className="login-form-title">
					<span className="login-form-title">Criar Conta</span>
				</span>

				<div className="wrap-input">
					<input
						className={name !== "" ? "has-value input" : "input"}
						type="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<span className="focus-input" data-placeholder="Nome"></span>
				</div>

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
					<button className="login-form-btn">Cadastrar</button>
				</div>

				<div className="text-center">
					<Link to="/" className="link-password">
						Voltar ao Login
					</Link>
				</div>
			</form>
		</LayoutComponents>
	);
};
