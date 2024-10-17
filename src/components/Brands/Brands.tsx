//Components
import NavBar from "../common/NavBar/NavBar";
import Footer from "../common/Footer/Footer";
import BrandCard from "./BrandCard/BrandCard";

//Styles
import "./brands.scss";

//React
import { useState, useEffect } from "react";

//Axios
import axios from "axios";

//Interface
interface BrandCardProps {
	id: number;
	name: string;
	description: string;
	link: string;
	logoImg: string;
	actionImg: string;
	backgroundImg: string;
}
export default function Brands() {
	const [brands, setBrands] = useState<BrandCardProps[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/brands")
			.then((response) => {
				setBrands(response.data);
				setIsLoading(false);
			})
			.catch((error) => {
				console.log(error.message);
				setIsLoading(false);
			});
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="brands">
			<NavBar />
			<div className="content">
				<h1 className="h1">Catalogue des marques</h1>
				<div className="brandsCards">
					{brands.map((brand) => {
						return (
							<BrandCard
								key={brand.id}
								brandName={brand.name}
								description={brand.description}
								pathToWebsite={brand.link}
								logoImg={`http://localhost:8000/${brand.logoImg}`}
								actionImg={`http://localhost:8000/${brand.actionImg}`}
								backgroundImg={`http://localhost:8000/${brand.backgroundImg}`}
							/>
						);
					})}
				</div>
			</div>
			<Footer />
		</div>
	);
}
