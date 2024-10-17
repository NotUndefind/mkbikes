//React
import { useState } from "react";

//Styles
import "./galleryImg.scss";

interface imagesInterface {
	id: number;
	description: string;
	src: string;
	alt: string;
}
export default function GalleryImg(props: { images: imagesInterface[] }) {
	// État pour l'image agrandie
	const [openImage, setOpenImage] = useState<{
		src: string;
		alt: string;
		description: string;
	} | null>(null);

	// Fonction pour ouvrir l'image
	const openImg = (src: string, alt: string, description: string) => {
		setOpenImage({ src, alt, description });
	};
	const [isAnimating, setIsAnimating] = useState(false);

	// Fonction pour fermer l'image agrandie
	const closeImg = () => {
		setIsAnimating(false); // Arrête l'animation
		setTimeout(() => setOpenImage(null), 300); // Temps pour l'animation avant de cacher
	};

	return (
		<div className="galleryImgCards">
			{props.images.map((image) => (
				<div
					className="card"
					key={image.id}
					onClick={() => {
						openImg(image.src, image.alt, image.description);
						setTimeout(() => setIsAnimating(true), 300);
					}}
				>
					<img src={image.src} alt={image.alt} />
				</div>
			))}

			{/* Affichage de l'image agrandie si openImage n'est pas null */}
			{openImage && (
				<div className={`openImg ${isAnimating ? "animation" : ""}`}>
					<div className="openImgStyle">
						<div className="img">
							<img src={openImage.src} alt={openImage.alt} />
						</div>

						<div className="description">
							<p className="text">{openImage.description}</p>
							<button className="btn-primary" onClick={closeImg}>
								Fermer
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
