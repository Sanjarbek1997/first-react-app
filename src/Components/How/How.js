import BtnLinks from "../BtnLinks/BtnLinks";
import HowCards from "./HowCard";

import "./how.css"

const How = () => {
	return (
		<section className='how'>
			<h1 className='how__title'>How it works</h1>
			<div className='how__cards'>
				<HowCards
					num={"01"}
					title={"Pick your coffee"}
					text={
						"Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out."
					}
				/>
				<HowCards
					num={"02"}
					title={"Choose the frequency"}
					text={
						"Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal."
					}
				/>
				<HowCards
					num={"03"}
					title={"Receive and enjoy!"}
					text={
						"We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience."
					}
				/>
			</div>
            <BtnLinks/>
		</section>
	);
};

export default How