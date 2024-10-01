//Components
import NavBar from "../common/NavBar/NavBar";
import Footer from "../common/Footer/Footer";
import GalleryImg from "../common/GalleryImg/GalleryImg";

//Styles
import "./bikeConversion.scss";

//Images
import bike from "/src/assets/img/test2.jpg";

//Images a afficher
const images = [
	{
		src: bike,
		alt: "bike",
	},
	{
		src: bike,
		alt: "bike",
	},
	{
		src: bike,
		alt: "bike",
	},
	{
		src: bike,
		alt: "bike",
	},
];

export default function BikeConversion() {
	return (
		<div className="bikeConversion">
			<NavBar />
			<div className="content">
				<h1 className="h1">Conversion</h1>
				<p className="text bikeConversionDesc">
					La transformation de votre vélo est possible. C'est rapide
					et Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Voluptatum molestias, architecto nobis maxime adipisci enim
					unde, necessitatibus maiores doloribus quos eos asperiores
					dolorem praesentium consequatur mollitia numquam. Quibusdam,
					commodi praesentium.
				</p>

				<GalleryImg images={images} />
			</div>
			<Footer />
		</div>
	);
}
