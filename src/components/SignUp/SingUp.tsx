//Components
import NavBar from "../common/NavBar/NavBar";
import Footer from "../common/Footer/Footer";
import { Link } from "react-router-dom";

//axios
import axios from "axios";

//React
import { useForm } from "react-hook-form";

//Styles
import "./signUp.scss";

//UseState
interface FormData {
	name: string | null;
	email: string | null;
	password: string | null;
	confirmPassword: string | null;
}

export default function SignUp() {
	axios.defaults.withCredentials = true;
	const {
		register,
		getValues,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	const validatePassword = (value: string | null): string | undefined => {
		if (value === null || value === "") {
			return "Veuillez remplir ce champ";
		}
		const lowerRegex = /[a-z]/;
		const upperRegex = /[A-Z]/;
		const numberRegex = /[0-9]/;
		const specialRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

		if (!lowerRegex.test(value)) {
			return "Le mot de passe doit contenir au moins une lettre minuscule";
		}

		if (!upperRegex.test(value)) {
			return "Le mot de passe doit contenir au moins une lettre majuscule";
		}

		if (!numberRegex.test(value)) {
			return "Le mot de passe doit contenir au moins un chiffre";
		}

		if (!specialRegex.test(value)) {
			return "Le mot de passe doit contenir au moins un caractère special";
		}

		if (value.length < 8) {
			return "Le mot de passe doit contenir au moins 8 caractères";
		}

		return;
	};

	const onSubmit = (data: FormData) => {
		const name = data.name?.trim();
		const email = data.email?.trim();
		const password = data.password?.trim();
		const confirmPassword = data.confirmPassword?.trim();
		console.log(name, email, password);
		axios
			.get("http://127.0.0.1:8000/sanctum/csrf-cookie")
			.then(() => {
				axios.post("http://127.0.0.1:8000/api/login", {
					email: "test@example.com",
					password: "Motdepasse1$",
				});
			})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="signUpBg">
			<NavBar />
			<div className="content">
				<div className="signUp">
					<h1 className="h1">Inscription</h1>
					<form action="" onSubmit={handleSubmit(onSubmit)}>
						<div>
							<input
								type="text"
								placeholder="Prénom"
								id="name"
								className="input-primary"
								{...register("name", {
									required: "Veuillez remplir ce champ",
									minLength: {
										value: 3,
										message:
											"Le nom doit contenir au moins 3 caractères",
									},
									maxLength: {
										value: 20,
										message:
											"Le nom ne doit pas contenir plus de 20 caractères",
									},
								})}
							/>
							{errors.name && (
								<p className="error text">
									{errors.name.message}
								</p>
							)}
						</div>
						<div>
							<input
								type="email"
								placeholder="Email"
								id="email"
								className="input-primary"
								{...register("email", {
									required: "Veuillez remplir ce champ",
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
										message:
											"Veuillez entrer une adresse email valide",
									},
								})}
							/>
							{errors.email && (
								<p className="error text">
									{errors.email.message}
								</p>
							)}
						</div>
						<div>
							<input
								type="password"
								placeholder="Mot de passe"
								id="password"
								className="input-primary"
								aria-invalid={
									errors.password ? "true" : "false"
								}
								{...register("password", {
									validate: validatePassword,
								})}
							/>
							{errors.password && (
								<p className="error text">
									{errors.password.message}
								</p>
							)}
						</div>
						<div>
							<input
								type="password"
								placeholder="Confirmer le mot de passe"
								id="confirmPassword"
								className="input-primary"
								{...register("confirmPassword", {
									required: "Veuillez remplir ce champ",

									validate(value: string | null) {
										if (value !== getValues("password")) {
											return "Les mots de passe ne sont pas identiques";
										}
									},
								})}
							/>
							{errors.confirmPassword && (
								<p className="error text">
									{errors.confirmPassword.message}
								</p>
							)}
						</div>
						<div>
							<input
								type="submit"
								value="S'inscrire"
								className="btn-primary"
							/>
						</div>
					</form>

					<div className="login">
						<Link to={"/login"}>
							<button className="btn-secondary">
								Se connecter
							</button>
						</Link>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
