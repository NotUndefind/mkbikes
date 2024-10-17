//Components
import NavBar from "../common/NavBar/NavBar";
import Footer from "../common/Footer/Footer";

//Styles
import "./unsubscribe.scss";

//Images
import check from "../../assets/img/check.png";
export default function Unsubscribe() {
	return (
		<div className="unsubscribe">
			<NavBar />
			<div className="content">
				<h1 className="h1">Désabonnement</h1>

				<p className="text">
					Vous venez de vous désabonner de la newsletter.
				</p>
				<img src={check} alt="" />
			</div>
			<Footer />
		</div>
	);
}
