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
import banner from "../../../assets/img/banner.png";

export default function NavBar() {
	//States
	const [isMenuActive, setIsMenuActive] = useState(false);

	const imgRef = useRef<HTMLImageElement>(null);

	const toggleMenu = (): void => {
		setIsMenuActive(!isMenuActive);
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
					<div className="btn-primary">
						<Link to={"/repair"}>Reparation</Link>
					</div>
					<div className="btn-primary">
						<Link to={"/bike-conversion"}>
							Transformation vélos musculaire
						</Link>
					</div>
					<div className="btn-primary">
						<Link to={"/rental"}>Location</Link>
					</div>
					<div className="btn-primary">
						<Link to={"/brands"}>Les marques</Link>
					</div>

					<div className="btn-primary">
						<Link to={"/bike-used"}>Vélos d'occasion</Link>
					</div>

					<div className="btn-primary">
						<Link to={"/news"}>Actus</Link>
					</div>
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
			</div>
		</nav>
	);
}
