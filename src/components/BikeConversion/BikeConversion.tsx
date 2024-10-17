//Components
import NavBar from "../common/NavBar/NavBar";
import Footer from "../common/Footer/Footer";
import GalleryImg from "../common/GalleryImg/GalleryImg";

//Styles
import "./bikeConversion.scss";

//React
import { useState, useEffect } from "react";

//Axios
import axios from "axios";

export default function BikeConversion() {
	interface Transform {
		id: number;
		description: string;
		alt: string;
		image: string;
	}

	const [transform, setTransform] = useState<Transform[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/transform")
			.then((response) => {
				setTransform(response.data);
				setIsLoading(false);
			})
			.catch((error) => {
				setTransform(error.response.data);
				setIsLoading(false);
			});
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}
	return (
		<div className="bikeConversion">
			<NavBar />
			<div className="content">
				<h1 className="h1">Transformation</h1>

				<p className="text explTransformation">
					Vous souhaitez passer au vélo électrique ?
				</p>

				<p className="text explTransformation">
					Vous aimez votre vélo, alors pourquoi ne pas modifier votre
					vélo musculaire en électrique !
				</p>
				<p className="text explTransformation">
					En effet, il est possible de modifier presque n’importe quel
					vélo musculaire en électrique, que ce soit vélo classique,
					vélo cargo, tandem, vélo adapté aux personnes à mobilité
					réduite…
				</p>
				<p className="text explTransformation">
					Vous possédez un vélo sur lequel vous êtes très bien mais
					vous éprouvez des difficultés à en faire que ce soit à cause
					de l’âge, d’un problème physique ou même juste par manque
					d’entrainement, il est possible d’équiper votre vélo.
				</p>

				<p className="text explTransformation">
					Plusieurs possibilités s’offrent à vous : moteur dans le
					moyeux avant ou arrière , moteur central, batterie carénée
					fixée sur le cadre, dans une sacoche ou sur le porte bagage…
				</p>
				<p className="text explTransformation">
					Il existe de nombreuses possibilités pour reconditionner son
					vélo.
				</p>
				<p className="text explTransformation">
					Je travaille uniquement avec des fournisseurs français pour
					la fiabilité et pour le service après-vente. Si besoin, je
					suis également référencé en tant qu’installateur agrée par
					des marques comme OZO ou CYCLOBOOST.
				</p>
				<p className="text explTransformation">
					Je travaille uniquement sur devis car chaque montage est
					différent
				</p>

				<p className="text explTransformation">
					Les kits installés répondent aux normes CE 15194 comme la
					plupart des vélos électriques européens et peuvent
					bénéficier des aides financières le cas échéant.
				</p>

				<GalleryImg
					images={transform.map((transform) => {
						return {
							id: transform.id,
							src: `http://localhost:8000/${transform.image}`,
							alt: transform.alt,
							description: transform.description,
						};
					})}
				/>
			</div>
			<Footer />
		</div>
	);
}
