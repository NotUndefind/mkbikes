//Import des styles
import "./profile.scss";

//Import des composants
import NavBar from "../common/NavBar/NavBar";
import Footer from "../common/Footer/Footer";

export default function Profile() {
	return (
		<div className="profile">
			<NavBar />

			<div className="content">
				<h3 className="text">Informations personnelles</h3>
				<div className="prersonelData">
					<div className="name">
						<p className="text">Nom</p>
						<p className="text">Doe</p>
					</div>

					<div className="email">
						<p className="text">Email</p>
						<p className="text">p8zDZ@example.com</p>
					</div>
				</div>

				<div className="logOut">
					<button className="btn-primary">Déconnexion</button>
				</div>
			</div>
			<Footer />
		</div>
	);
}
