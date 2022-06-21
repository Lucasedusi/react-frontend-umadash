/* eslint-disable react/style-prop-object */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { LayoutComponents } from "../../components/LayoutComponents";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { api } from "../../services/api";

import { RiArrowLeftCircleFill } from "react-icons/ri";
import logoImg from "../../assets/logo.png";

import "./styles.scss";

const customId = "custom-id-yes";

const userSchema = yup.object().shape({
	name: yup.string().required("Nome Obrigatório"),
	email: yup.string().required("E-mail Obrigatório").email("E-mail Inválido"),
	password: yup
		.string()
		.required("Senha Obrigatória")
		.min(6, "Mínimo 6 caracteres"),
});

export const Register = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { register, handleSubmit, formState, reset } = useForm({
		resolver: yupResolver(userSchema),
	});

	const { errors } = formState;

	const handleCreateUser = async (e) => {
		const data = {
			name: name,
			email: email,
			password: password,
		};

		await api.post("/create", data);

		toast.success("Cadastrado com Sucesso!", {
			toastId: customId,
		});

		reset();
	};

	return (
		<LayoutComponents>
			<form onSubmit={handleSubmit(handleCreateUser)} className="login-form">
				<span className="login-form-title">
					<span className="login-form-title">
						<img src={logoImg} alt="Logo UMADEP" />
					</span>
				</span>

				<div className="wrap-input">
					<input
						className={name !== "" ? "has-value input" : "input"}
						name="name"
						type="name"
						{...register("name")}
						onChange={(e) => setName(e.target.value)}
					/>
					<span className="focus-input" data-placeholder="Nome"></span>
				</div>
				{errors.name?.message && (
					<div className="input-error">
						<span>{errors.name?.message}</span>
					</div>
				)}

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
					<button type="submit" className="login-form-btn">
						Cadastrar
					</button>
					<ToastContainer bodyClassName="toastBody" autoClose={2000} />
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
