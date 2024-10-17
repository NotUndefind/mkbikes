//Styles
import "./bikeUsed.scss";

//Components
import NavBar from "../common/NavBar/NavBar";
import Footer from "../common/Footer/Footer";
import GalleryImg from "../common/GalleryImg/GalleryImg";

//React
import { useState, useEffect } from "react";

//Axios
import axios from "axios";

//Interface
interface BikeUsed {
	id: number;
	description: string;
	image: string;
	alt: string;
}

export default function BikeUsed() {
	const [isLoading, setIsLoading] = useState(true);
	const [bikeUsed, setBikeUsed] = useState<BikeUsed[]>([]);

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/bikesUsed")
			.then((response) => {
				setBikeUsed(response.data);
				setIsLoading(false);
			})
			.catch((error) => {
				setBikeUsed(error.response.data);
				setIsLoading(false);
			});
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="bikeUsed">
			<NavBar />
			<div className="content">
				<h1 className="h1">Vélos d'occasion</h1>

				<p className="text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Eaque sit mollitia voluptates error culpa porro optio nemo
					voluptatem quo ea eius sunt distinctio, repellendus eos!
				</p>

				<GalleryImg
					images={bikeUsed.map((bikeUsed) => {
						return {
							id: bikeUsed.id,
							src: `http://localhost:8000/${bikeUsed.image}`,
							alt: bikeUsed.alt,
							description: bikeUsed.description,
						};
					})}
				/>
			</div>
			<Footer />
		</div>
	);
}
