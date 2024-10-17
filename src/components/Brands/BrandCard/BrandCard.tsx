//Components
import { Link } from "react-router-dom";

//Styles
import "./brandCard.scss";

export default function BrandCard(props: {
	brandName: string;
	description: string;
	pathToWebsite: string;
	logoImg: string;
	actionImg: string;
	backgroundImg: string;
}) {
	return (
		<div
			className="brandCard"
			style={{ backgroundImage: `url(${props.backgroundImg})` }}
		>
			<div className="brand">
				<div className="imgs">
					<div className="logo">
						<img src={props.logoImg} alt="" />
					</div>

					<div className="actionImg">
						<img src={props.actionImg} alt="" />
					</div>
				</div>

				<div className="text">
					<div className="title">
						<h3 className="h3">{props.brandName}</h3>
					</div>

					<div className="descr">
						<p className="text">{props.description}</p>
					</div>
				</div>
			</div>
			<button className="btn-primary">
				<Link to={props.pathToWebsite}>En savoir plus</Link>
			</button>
		</div>
	);
}
