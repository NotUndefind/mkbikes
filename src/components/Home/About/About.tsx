//Styles
import "./about.scss";

//Images
import presMkbikes from "../../../assets/img/presMkbikestest.png";

export default function About() {
	return (
		<div className="heroHeader">
			<div className="presentationText">
				<h1 className="h1">A propos</h1>
				<p className="text">
					Eiusmod qui ad sit excepteur commodo Lorem. Ipsum minim
					deserunt qui proident eu non irure id. Pariatur fugiat enim
					mollit ipsum tempor magna occaecat sunt irure pariatur. Ut
					veniam laboris elit quis aute exercitation exercitation
					labore. Qui nisi ut irure est. Amet dolor excepteur id
					consequat esse enim est. Enim nisi dolore exercitation
					exercitation proident nulla sint voluptate id amet proident
					proident ea exercitation duis. Voluptate laborum non minim
					magna do quis commodo ipsum et mollit occaecat eiusmod
					occaecat.Eiusmod qui ad sit excepteur commodo Lorem. Ipsum
					minim deserunt qui proident eu non irure id. Pariatur fugiat
					enim mollit ipsum tempor magna occaecat sunt irure pariatur.
					Ut veniam laboris elit quis aute exercitation exercitation
					labore. Qui nisi ut irure est. Amet dolor excepteur id
					consequat esse enim est. Enim nisi dolore exercitation
					exercitation proident nulla sint voluptate id amet proident
					proident ea exercitation duis. Voluptate laborum non minim
					magna do quis commodo ipsum et mollit occaecat eiusmod
					occaecat.
				</p>
			</div>
			<div className="presentationImg">
				<img src={presMkbikes} alt="" />
			</div>
		</div>
	);
}
