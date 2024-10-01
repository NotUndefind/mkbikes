//Styles
import "./newPassword.scss";

//Component
import NavBar from "../common/NavBar/NavBar";
import Footer from "../common/Footer/Footer";
import { Link } from "react-router-dom";

//React
import { useState } from "react";

export default function NewPassword() {
	const [msgError, setMsgError] = useState<string | null>(null);
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.target as HTMLFormElement);
		const email = ((formData.get("email") as string) || "").trim();

		if (email === "") {
			setMsgError("Veuillez remplir tous les champs");
			return;
		}

		const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!regexEmail.test(email)) {
			setMsgError("Veuillez rentrer un email valide");
			return;
		}

		document.querySelector("form")?.reset();
		setMsgError(null);
		console.log("ok");
	};
	return (
		<div className="newPassword">
			<NavBar />
			<div className="content">
				<h1 className="h1">Nouveau mot de passe</h1>

				<form action="" onSubmit={handleSubmit}>
					<div>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Email"
							className="input-primary"
						/>

						{msgError && <p className="error text">{msgError}</p>}
					</div>

					<input
						type="submit"
						value="Récuperer"
						className="btn-primary"
					/>
				</form>

				<div className="login">
					<Link to="/login">
						<button className="btn-secondary">Se connecter</button>
					</Link>
				</div>
			</div>
			<Footer />
		</div>
	);
}
