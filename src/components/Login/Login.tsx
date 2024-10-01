import NavBar from "../common/NavBar/NavBar";
import Footer from "../common/Footer/Footer";
import CardLogin from "./CardLogin/CardLogin";
import "./login.scss";
export default function Login() {
	return (
		<div className="login">
			<NavBar />
			<div className="content">
				<CardLogin />
			</div>
			<Footer />
		</div>
	);
}
