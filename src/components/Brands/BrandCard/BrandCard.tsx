//Components
import { Link } from "react-router-dom";

import image from "../../../assets/img/test2.jpg";

//Styles
import "./brandCard.scss";

export default function BrandCard(props: {
	brandName: string;
	children: React.ReactNode;
	path: string;
}) {
	return (
		<div className="brandCard">
			<div className="brandImg">
				<img src={image} alt="" />
			</div>

			<div className="brandDescription">
				<h4 className="h4">{props.brandName}</h4>
				<p className="text desciption">{props.children}</p>

				<button className="btn-secondary">
					<Link to={props.path}>En savoir plus</Link>
				</button>
			</div>
		</div>
	);
}
