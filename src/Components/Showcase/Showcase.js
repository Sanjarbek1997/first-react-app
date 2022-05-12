
import BtnLinks from "../BtnLinks/BtnLinks"; 

import "./showcase.css";

const Showcase = () => {
	return (
		<section id='showcase'>
			<h1 className='showcase__title'>Great coffee made simple.</h1>
			<p className='showcase__text'>
				Start your mornings with the world’s best coffees. Try our expertly
				curated artisan coffees from our best roasters delivered directly to
				your door, at your schedule.
			</p>
            <BtnLinks/>
		</section>
	);
};

export default Showcase;
