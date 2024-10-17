//Styles
import "./about.scss";

//Images
import presMkbikes from "../../../assets/img/photoPres2.png";

export default function About() {
	return (
		<div className="about">
			<div className="presentationText">
				<h1 className="h1">A propos...</h1>
				<p className="text">
					Passionné de vélos depuis toujours et après 25 ans passé
					dans le monde de l’automobile, à 44 ans c’était le moment de
					me reconvertir et vivre de ma passion ! J’ai donc suivi une
					formation de réparateur cycles et lancé mon activité en
					décembre 2020.
				</p>

				<p className="text">
					Depuis, je ne cesse de me former et me développer pour
					répondre à vos besoins et vous conseiller au mieux. D’abord
					réparateur, puis revendeur de plusieurs marques de vélos, je
					me suis spécifié dans la transformation de vélos musculaires
					en électrique, puis j’ai développé la location de vélos
				</p>

				<p className="text">
					Je pratique le vélo sous toutes ses formes, que ce soit en
					vtt, route et maintenant en gravel, je suis aussi bien
					randonneur que compétiteur quand l’occasion se présente.
				</p>

				<p className="text">
					Je pratique également le bike packing pour parcourir de
					nouveaux paysages de façon autonome (randonnée, bivouac…).
					Licencié au Semoy VTT club, je participe à la vie du club en
					tant que membre bénévole pour l’enduro et sponsor du club.
				</p>
			</div>
			<div className="presentationImg">
				<img src={presMkbikes} alt="" />
			</div>
		</div>
	);
}
