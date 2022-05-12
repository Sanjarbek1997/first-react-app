import WhyCard from "./WhyCard";


import Cofe from "../../Assets/Img/Shape.png";
import Gift from "../../Assets/Img/Shape1.png";
import Car from "../../Assets/Img/Shape2.png";

import "./why.css";

const Why = () => {
	return (
		<section className='why'>
			<h1 className='why__title'>Why choose us?</h1>
			<p className='why__text'>
				A large part of our role is choosing which particular coffees will be
				featured in our range. This means working closely with the best coffee
				growers to give you a more impactful experience on every level.
			</p>
			<div className='why__cards'>
                
				<WhyCard
					svg={Cofe}
					title={"Best quality"}
					text={
						"Discover an endless variety of the world’s best artisan coffee from each of our roasters."
					}
				/>
                
				<WhyCard
					svg={Gift}
					title={"Exclusive benefits"}
					text={
						"Special offers and swag when you subscribe, including 30% off your first shipment."
					}
				/>
                
				<WhyCard
					svg={Car}
                    car={"why__car"}
					title={"Free shipping"}
					text={
						"We cover the cost and coffee is delivered fast. Peak freshness: guaranteed."
					}
				/>
			</div>
		</section>
	);
};
export default Why