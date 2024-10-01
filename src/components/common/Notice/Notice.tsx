//Styles
import "./notice.scss";

//Components

//React
import { useState } from "react";

export default function NoticeCards(props: { starsNumber: number }) {
	const star = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="#fff"
		>
			<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
		</svg>
	);

	const stars = Array(props.starsNumber).fill(star);

	const [isShowMoreActive, setIsShowMoreActive] = useState(false);

	return (
		<div className="noticeCard">
			<div className="stars">{stars}</div>

			<p className={`text ${isShowMoreActive ? "active" : ""}`}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Consectetur, porro.
			</p>

			<div
				className="showMoreButton"
				onClick={() => {
					setIsShowMoreActive(!isShowMoreActive);
				}}
			></div>
		</div>
	);
}
