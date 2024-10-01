import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./app.scss";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SingUp";
import Profile from "./components/Profile/Profile";
import NewPassword from "./components/NewPassword/NewPassword";
import Brands from "./components/Brands/Brands";
import BikeConversion from "./components/BikeConversion/BikeConversion";
import Rental from "./components/Rental/Rental";

//axios
import axios from "axios";

export default function App() {
	axios.defaults.withCredentials = true;
	return (
		<Router>
			<Routes>
				<Route path="/" Component={Home} />
				<Route path="/login" Component={Login} />
				<Route path="/signup" Component={SignUp} />
				<Route path="/profile" Component={Profile} />
				<Route path="/newPassword" Component={NewPassword} />
				<Route path="/brands" Component={Brands} />
				<Route path="/bike-conversion" Component={BikeConversion} />
				<Route path="/rental" Component={Rental} />
			</Routes>
		</Router>
	);
}
