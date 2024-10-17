import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./app.scss";
import Home from "./components/Home/Home";
import Brands from "./components/Brands/Brands";
import BikeConversion from "./components/BikeConversion/BikeConversion";
import Rental from "./components/Rental/Rental";
import Repair from "./components/Repair/Repair";
import BikeUsed from "./components/BikeUsed/BikeUsed";
import News from "./components/News/News";
import MentionLegal from "./components/MentionLegal/MentionLegal";
import Unsubscribe from "./components/Unsubscribe/Unsubscribe";

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" Component={Home} />
				<Route path="/brands" Component={Brands} />
				<Route path="/bike-conversion" Component={BikeConversion} />
				<Route path="/rental" Component={Rental} />
				<Route path="/repair" Component={Repair} />
				<Route path="/bike-used" Component={BikeUsed} />
				<Route path="/news" Component={News} />
				<Route path="*" Component={Home} />
				<Route path="/mentions-legales" Component={MentionLegal} />
				<Route path="/unsubscribe" Component={Unsubscribe} />
			</Routes>
		</Router>
	);
}
