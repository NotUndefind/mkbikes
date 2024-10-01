//Styles
import "./cardLogin.scss";

//React
import { Link } from "react-router-dom";
import { useState } from "react";

export default function CardLogin() {
	const [msgError, setMsgError] = useState<string | null>(null);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);
		const email = ((formData.get("email") as string) || "").trim();
		const password = ((formData.get("password") as string) || "").trim();

		if (email === "" || password === "") {
			setMsgError("Veuillez remplir tous les champs");
			return;
		}

		const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!regexEmail.test(email)) {
			setMsgError("Email invalide");
			return;
		}

		document.querySelector("form")?.reset();
		setMsgError(null);
		console.log("ok");
	};

	return (
		<div className="cardLogin">
			<h1 className="h1">Connexion</h1>
			<form action="" onSubmit={handleSubmit}>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Email"
					className="input-primary"
				/>

				<input
					type="password"
					name="password"
					id="password"
					placeholder="Mot de passe"
					className="input-primary"
				/>

				<div className="passwordForgot">
					<Link to="/newPassword">
						<p>Mot de passe oublié ?</p>
					</Link>
				</div>

				<input
					type="submit"
					value="Se connecter"
					className="btn-primary"
				/>
				<p className="error text">{msgError}</p>
			</form>

			<div className="signUp">
				<Link to="/signup">
					<button className="btn-secondary">S'inscrire</button>
				</Link>
			</div>
		</div>
	);
}
