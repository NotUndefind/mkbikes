//Import des styles
import "./footer.scss";

// Import des images
import facebook from "../../../assets/img/facebook.svg";
import pagesjaunes from "../../../assets/img/pagesjaunes.svg";
import instagram from "../../../assets/img/instagram.svg";
import logo from "../../../assets/img/logo.png";

//React
import { useState } from "react";

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

		console.log("ok");
		(document.querySelector(".newsletterForm") as HTMLFormElement)?.reset();
		setMsgError(null);
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
				<div className="help section">
					<h6 className="h6">Help</h6>
					<ul>
						<li>
							<a href="">Contact</a>
						</li>

						<li>
							<a href="">F.A.Q</a>
						</li>
					</ul>
				</div>

				<div className="catalog section">
					<h6 className="h6">Catalogue</h6>

					<ul>
						<li>
							<a href="">Catalogue de vélos</a>
						</li>
						<li>
							<a href="">Catalogue de piece</a>
						</li>
					</ul>
				</div>
				<div className="services section">
					<h6 className="h6">Services</h6>
					<ul>
						<li>
							<a href="">Location</a>
						</li>

						<li>
							<a href="">Transfomation</a>
						</li>

						<li>
							<a href="">Réparation de vélo éléctrique</a>
						</li>

						<li>
							<a href="">Réparation de vélo musculaire</a>
						</li>
					</ul>
				</div>

				<div className="localisation section">
					<a href="">
						<h6 className="h6">Localisation</h6>
					</a>
				</div>
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
