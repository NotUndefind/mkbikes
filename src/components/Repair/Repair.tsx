//Components
import NavBar from "../common/NavBar/NavBar";
import Footer from "../common/Footer/Footer";
import GalleryImg from "../common/GalleryImg/GalleryImg";

//Styles
import "./repair.scss";

//React
import { useState, useEffect } from "react";

//Axios
import axios from "axios";

export default function Repair() {
	//Interface
	interface Repair {
		id: number;
		description: string;
		image: string;
		alt: string;
	}

	const [repair, setRepair] = useState<Repair[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/repair")
			.then((response) => {
				setRepair(response.data);
				setIsLoading(false);
			})
			.catch((error) => {
				setRepair(error.response.data);
				setIsLoading(false);
			});
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="repair">
			<NavBar />
			<div className="content">
				<h1 className="h1">Réparation</h1>

				<p className="text repairDesc">
					Entretenir, vérifier et réparer est une affaire de pros.
				</p>

				<p className="text repairDesc">
					Que ce soit mécaniques ou électriques je serais capable de
					vous conseiller pour entretenir et réparer vos vélos.
				</p>

				<p className="text repairDesc">
					Je travaille avec des grossistes français pour la rapidité
					et la qualité d’intervention
				</p>

				<p className="text repairDesc">
					Je suis également réparateur agrée Bosch, Ebike,
					distributeur DT Swiss et Asterion pour vos roues
				</p>

				<p className="text repairDesc">
					Je suis là également pour vous conseiller sur les
					réparations et m’adapte pour obtenir des montants de
					réparation au prix le plus juste.
				</p>

				<p className="text repairDesc">
					Bref, Je suis à l’écoute pour vos projets
				</p>

				<GalleryImg
					images={repair.map((repair) => {
						return {
							id: repair.id,
							src: `http://localhost:8000/${repair.image}`,
							alt: repair.alt,
							description: repair.description,
						};
					})}
				/>
			</div>
			<Footer />
		</div>
	);
}
