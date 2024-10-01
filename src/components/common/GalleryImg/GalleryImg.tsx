//Styles
import "./galleryImg.scss";

interface imagesInterface {
	src: string;
	alt: string;
}

export default function GalleryImg(props: { images: imagesInterface[] }) {
	return (
		<div className="galleryImgCards">
			{props.images.map((image, index) => (
				<div className="card" key={index}>
					<img src={image.src} alt={image.alt} />
				</div>
			))}
		</div>
	);
}
