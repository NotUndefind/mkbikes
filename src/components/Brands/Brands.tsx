//Components
import NavBar from "../common/NavBar/NavBar";
import Footer from "../common/Footer/Footer";
import BrandCard from "./BrandCard/BrandCard";

//Styles
import "./brands.scss";

export default function Brands() {
	return (
		<div className="brands">
			<NavBar />
			<div className="content">
				<h1 className="h1">Catalogue des marques</h1>
				<div className="brandsCards">
					<BrandCard
						brandName="Gas-Gas"
						children="Reprehenderit laboris velit nisi et. Aliquip id et non cupidatat pariatur consectetur incididunt exercitation exercitation aliquip tempor excepteur tempor. Consequat aliquip dolore do esse. Exercitation ut laboris fugiat cupidatat cupidatat in veniam voluptate do magna reprehenderit do eu tempor deserunt."
						path="brand"
					/>

					<BrandCard
						brandName="Gas-Gas"
						children="Reprehenderit laboris velit nisi et. Aliquip id et non cupidatat pariatur consectetur incididunt exercitation exercitation aliquip tempor excepteur tempor. Consequat aliquip dolore do esse. Exercitation ut laboris fugiat cupidatat cupidatat in veniam voluptate do magna reprehenderit do eu tempor deserunt."
						path="/"
					/>

					<BrandCard
						brandName="Gas-Gas"
						children="Reprehenderit laboris velit nisi et. Aliquip id et non cupidatat pariatur consectetur incididunt exercitation exercitation aliquip tempor excepteur tempor. Consequat aliquip dolore do esse. Exercitation ut laboris fugiat cupidatat cupidatat in veniam voluptate do magna reprehenderit do eu tempor deserunt."
						path="/"
					/>

					<BrandCard
						brandName="Gas-Gas"
						children="Reprehenderit laboris velit nisi et. Aliquip id et non cupidatat pariatur consectetur incididunt exercitation exercitation aliquip tempor excepteur tempor. Consequat aliquip dolore do esse. Exercitation ut laboris fugiat cupidatat cupidatat in veniam voluptate do magna reprehenderit do eu tempor deserunt."
						path="/"
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
}
