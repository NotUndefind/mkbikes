//Import des styles
import "./footer.scss";

// Import des images
import facebook from "../../../assets/img/facebook.svg";
import pagesjaunes from "../../../assets/img/pagesjaunes.svg";
import instagram from "../../../assets/img/instagram.svg";
import logo from "../../../assets/img/logo.png";

//React
import { useState } from "react";
import { Link } from "react-router-dom";

//Axios
import axios from "axios";

export default function Footer() {
	const [msgErro, setMsgError] = useState<string | null>(null);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);

		const email = (
			(formData.get("newsletterEmail") as string) || ""
		).trim();

		if (email === "") {
			setMsgError("Veuillez remplir le champ");
			return;
		}

		const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!regexEmail.test(email)) {
			setMsgError("Veuillez rentrer un email valide");
			return;
		}

		axios
			.post("http://localhost:8000/api/newsletter/subscribe", {
				email,
			})
			.then((response) => {
				setMsgError(response.data.message);
			})
			.catch((error) => {
				setMsgError(error.response.data.message);
			});

		(document.querySelector(".newsletterForm") as HTMLFormElement)?.reset();
	};

	return (
		<footer>
			<div className="newsletter">
				<h6 className="h6">Newsletter</h6>
				<form
					action=""
					onSubmit={handleSubmit}
					className="newsletterForm"
				>
					<input
						className="input-primary newsletterInput"
						placeholder="Email"
						type="email"
						name="newsletterEmail"
						id="newsletterEmail"
						required
					/>
					<button
						className="btn-primary newsletterButton"
						type="submit"
					>
						S'inscrire
					</button>
				</form>
				{msgErro && <p className="error text">{msgErro}</p>}
			</div>

			<div className="sections">
				<Link to={"/mentions-legales"}>
					<h6 className="h6">Mentions légales</h6>
				</Link>
			</div>

			<div className="logos">
				<div className="networks">
					<div className="facebook logo">
						<a href="https://www.facebook.com/mkbikes08">
							<img src={facebook} alt="lien vers Facebook" />
						</a>
					</div>

					<div className="pagesjaunes logo">
						<a href="https://www.pagesjaunes.fr/pros/63198455">
							<img
								src={pagesjaunes}
								alt="lien vers Pages Jaunes"
							/>
						</a>
					</div>

					<div className="logo">
						<a href="https://www.instagram.com/mk.bikes08/">
							<img src={instagram} alt="lien vers instagram" />
						</a>
					</div>
				</div>

				<div className="bigLogo">
					<a href="">
						<img src={logo} alt="Logo MkBikes" />
					</a>
				</div>
			</div>
		</footer>
	);
}
