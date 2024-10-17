//Compnents
import NavBar from "../common/NavBar/NavBar";
import Footer from "../common/Footer/Footer";

//Styles
import "./mentionLegal.scss";

export default function MentionLegal() {
	return (
		<div className="mentionLegal">
			<NavBar />
			<div className="content">
				<h1 className="h1">Mentions légales</h1>

				<div className="credit">
					<div className="editeur">
						<h5 className="text">Éditeur</h5>
						<p className="text">MkBikes</p>
						<p className="text">6 rue Moulin 08300 Bergnicourt</p>
						<p className="text">Tél : 06 76 00 00 00</p>
					</div>

					<div className="hebergeur ">
						<h5 className="text">Hébergeur</h5>
						<p className="text">Inconnue</p>
					</div>

					<div className="conception ">
						<h5 className="text">Conception</h5>
						<p className="text">Jules BOURIN</p>
						<p className="text">julesbourin@gmail.com</p>
						<p className="text">Tél : 07 84 71 27 61</p>
					</div>

					<div className="developpement ">
						<h5 className="text">Développement</h5>
						<p className="text">Jules BOURIN</p>
						<p className="text">julesbourin@gmail.com</p>
						<p className="text">Tél : 07 84 71 27 61</p>
					</div>

					<div className="photo ">
						<h5 className="text">Crédit photos</h5>
						<p className="text">Christine BINET</p>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
