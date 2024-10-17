//Styles
import "./news.scss";

//Components
import NavBar from "../common/NavBar/NavBar";
import Footer from "../common/Footer/Footer";
import GalleryImg from "../common/GalleryImg/GalleryImg";

//React
import { useState, useEffect } from "react";

//Axios
import axios from "axios";

//Interface
interface News {
	id: number;
	description: string;
	image: string;
	alt: string;
}

export default function News() {
	const [news, setNews] = useState<News[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/news")
			.then((response) => {
				setNews(response.data);
				setIsLoading(false);
			})
			.catch((error) => {
				setNews(error.response.data);
				setIsLoading(false);
			});
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="news">
			<NavBar />
			<div className="content">
				<h1 className="h1">Actus</h1>

				<p className="text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Eaque sit mollitia voluptates error culpa porro optio nemo
					voluptatem quo ea eius sunt distinctio, repellendus eos!
				</p>

				<GalleryImg
					images={news.map((news) => {
						return {
							id: news.id,
							src: `http://localhost:8000/${news.image}`,
							alt: news.alt,
							description: news.description,
						};
					})}
				/>
			</div>
			<Footer />
		</div>
	);
}
