//Styles
import "./rental.scss";
//Components
import NavBar from "../common/NavBar/NavBar";
import Footer from "../common/Footer/Footer";
import GalleryImg from "../common/GalleryImg/GalleryImg";

//React
import { useState, useEffect } from "react";

//Axios
import axios from "axios";

//Interface
interface Rental {
	id: number;
	description: string;
	image: string;
	alt: string;
}

export default function Rental() {
	const [rental, setRental] = useState<Rental[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/rental")
			.then((response) => {
				setRental(response.data);
				setIsLoading(false);
			})
			.catch((error) => {
				setRental(error.response.data);
				setIsLoading(false);
			});
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="rental">
			<NavBar />
			<div className="content">
				<h1 className="h1">Location</h1>

				<p className="text rentalDesc">
					Depuis 2022 et avec le développement de la Voie Verte Sud
					Ardennes située à 15 km de mon magasin, je propose un
					service des locations de vélos musculaires ou électriques,
					ainsi que des vélos enfants et autres accessoires tels que
					des remorques ou sièges bébé.
				</p>
				<p className="text rentalDesc">
					Il est également possible de vous déposer et reprendre les
					vélos à proximité de la voie verte sur devis en fonction du
					nombre de vélos loués et du nombre de kilomètres à
					effectuer.
				</p>

				<p className="text rentalDesc">
					Par exemple, il est possible de déposer les vélos à un
					endroit et les reprendre a un autre
				</p>

				<p className="text rentalDesc">
					Je dispose d’une flotte d’une vingtaine de vélos pour
					répondre à vos besoins
				</p>
				<p className="text rentalDesc">
					N’hésitez pas à me contacter pour connaître les
					disponibilités et obtenir devis précis.
				</p>

				<GalleryImg
					images={rental.map((rental) => {
						return {
							id: rental.id,
							src: `http://localhost:8000/${rental.image}`,
							alt: rental.alt,
							description: rental.description,
						};
					})}
				/>
			</div>
			<Footer />
		</div>
	);
}
