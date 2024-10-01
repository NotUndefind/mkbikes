//Styles
import "./rental.scss";
//Components
import NavBar from "../common/NavBar/NavBar";
import Footer from "../common/Footer/Footer";
import GalleryImg from "../common/GalleryImg/GalleryImg";

//Images
import bike from "/src/assets/img/test2.jpg";

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

export default function Rental() {
	return (
		<div className="rental">
			<NavBar />
			<div className="content">
				<h1 className="h1">Location</h1>
				<p className="text rentalDesc">
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
