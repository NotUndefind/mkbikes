//Components
import NavBar from "../common/NavBar/NavBar";
import Footer from "../common/Footer/Footer";
import HeroHeader from "./About/About";

import Contact from "../common/Contact/Contact";

//Syles
import "./home.scss";

//images
import homeDownPres from "../../assets/img/homeDown (Optimized).jpeg";
export default function Home() {
	return (
		<div className="home">
			<NavBar />
			<div className="content">
				<HeroHeader />

				<img src={homeDownPres} alt="" />

				<Contact />
			</div>
			<Footer />
		</div>
	);
}
