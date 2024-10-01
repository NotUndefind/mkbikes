//Components
import NavBar from "../common/NavBar/NavBar";
import Footer from "../common/Footer/Footer";
import HeroHeader from "./About/About";
import NoticeCards from "../common/NoticeCards/NoticeCards";

import Contact from "../common/Contact/Contact";

//Syles
import "./home.scss";
export default function Home() {
	return (
		<div className="home">
			<NavBar />
			<div className="content">
				<HeroHeader />

				<NoticeCards />

				<Contact />
			</div>
			<Footer />
		</div>
	);
}
