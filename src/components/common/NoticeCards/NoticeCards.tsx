//Styles
import "./noticeCards.scss";

//Components
import Notice from "../Notice/Notice";

export default function NoticeCards() {
	return (
		<div className="noticeCards">
			<Notice starsNumber={4} />
			<Notice starsNumber={4} />
			<Notice starsNumber={4} />
			<Notice starsNumber={4} />
			<Notice starsNumber={4} />
			<Notice starsNumber={4} />
			<Notice starsNumber={4} />
		</div>
	);
}
