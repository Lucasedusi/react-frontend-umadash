import { useState } from "react";
import { LayoutComponents } from "../../components/LayoutComponents";
import { Link } from "react-router-dom";
import * as yup from "yup";

import { api } from "../../services/api";

import { RiArrowLeftCircleFill } from "react-icons/ri";
import logoImg from "../../assets/logo.png";

const userSchema = yup.object().shape({
	name: yup.string().required("Nome Obrigatório"),
	email: yup.string().required("E-mail Obrigatório").email("E-mail Inválido"),
	password: yup.string().required("Senha Obrigatória").min(6, "Tamanho Mínimo"),
});

export const Register = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleCreateUser = async (e) => {
		e.preventDefault();

		const data = {
			name,
			email,
			password,
		};

		const formValid = await userSchema.isValid(data);

		if (formValid) {
			const response = await api.post("/create", data);
			console.log(response.data);
		} else {
			userSchema.validate(data);
		}
	};

	return (
		<LayoutComponents>
			<form onSubmit={handleCreateUser} className="login-form">
				<span className="login-form-title">
					<span className="login-form-title">
						<img src={logoImg} alt="Jovem Programador" />
					</span>
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
					<button type="submit" className="login-form-btn">
						Cadastrar
					</button>
				</div>

				<div className="text-center">
					<RiArrowLeftCircleFill fontSize={17} color="#fff" />

					<Link to="/" className="link-password">
						Voltar ao Login
					</Link>
				</div>
			</form>
		</LayoutComponents>
	);
};
