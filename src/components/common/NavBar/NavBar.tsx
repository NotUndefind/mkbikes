import { useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

//Import des styles
import "./navbar.scss";
import "../../../assets/styles/main.scss";

// Import des images
import logo from "../../../assets/img/logo.png";
import burgerMenuClose from "../../../assets/img/burgerMenuClose.svg";
import burgerMenuOpen from "../../../assets/img/burgerMenuOpen.svg";
import profile from "../../../assets/img/profile.svg";
import banner from "../../../assets/img/banner.png";

export default function NavBar() {
	//States
	const [isMenuActive, setIsMenuActive] = useState(false);
	const [isLoginActive, setIsLoginActive] = useState(false);

	const imgRef = useRef<HTMLImageElement>(null);

	const toggleMenu = (): void => {
		setIsMenuActive(!isMenuActive);
	};

	const toggleLogin = (): void => {
		setIsLoginActive(!isLoginActive);
	};

	//HTML
	return (
		<nav className="navbar">
			<div className="banner">
				<img src={banner} alt="" />
			</div>

			<div className="routes">
				<div className="logo">
					<Link to={"/"}>
						<img src={logo} alt="Logo" />
					</Link>
				</div>
				<div className={"sections" + (isMenuActive ? " active" : "")}>
					<div>
						<Link to={"/"}>Reparation</Link>
					</div>
					<div className="bikeConversion">
						<Link to={"/bike-conversion"}>
							Transformation
							<span>Vélos musculaire</span>
						</Link>
					</div>
					<div>
						<Link to={"/rental"}>Location</Link>
					</div>
					<div>
						<Link to={"/brands"}>Les marques</Link>
					</div>
				</div>
				<div
					className={
						"loginButtons" + (isLoginActive ? " active" : "")
					}
				>
					<button className="btn-primary">
						<Link to={"/signup"}>S'inscrire</Link>
					</button>

					<button className="btn-secondary">
						<Link to="/login">Se connecter</Link>
					</button>
				</div>
				<div className="burgerMenu">
					<button onClick={toggleMenu}>
						<img
							src={
								isMenuActive ? burgerMenuOpen : burgerMenuClose
							}
							ref={imgRef}
							alt="Menu"
							className="burgerMenuImg"
						/>
					</button>
				</div>
				<div className="profileButton">
					<button onClick={toggleLogin}>
						<img src={profile} alt="" />
					</button>
				</div>
			</div>
		</nav>
	);
}
