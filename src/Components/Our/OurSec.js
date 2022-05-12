import Card from "./Card";

import "./our.css"

import { Our } from "../../Assets/Icon/Icon";
import Img1 from "../../Assets/Img/expresso.png";
import Img2 from "../../Assets/Img/kopi2.png";
import Img3 from "../../Assets/Img/kopi3.png";
import Img4 from "../../Assets/Img/kopi4.png";

const OurSec = () => {
	return (
		<section id='our'>
			<Our  />
			<Card
				rasm={Img1}
				title={"Gran Espresso"}
				text={
					"Light and flavorful blend with cocoa and black pepper for an intense experience."
				}
			/>
			<Card
				rasm={Img2}
				title={"Planalto"}
				text={
					"Brazilian dark roast with rich and velvety body, and hints of fruits and nuts."
				}
			/>
			<Card
				rasm={Img3}
				title={"Piccollo"}
				text={
					"Mild and smooth blend featuring notes of toasted almond and dried cherry."
				}
			/>
			<Card
				rasm={Img4}
				title={"Danche"}
				text={
					"Ethiopian hand-harvested blend densely packed with vibrant fruit notes."
				}
			/>
		</section>
	);
};
export default OurSec;
