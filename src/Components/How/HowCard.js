import { Point } from "../../Assets/Icon/Icon";

const HowCards = ({ num, title, text }) => {
	return (
		<div className='how__card'>
			<Point />
			<p className='how__card--num'>{num}</p>
			<h2 className='how__card--title'>{title}</h2>
			<p className='how__card--text'>{text}</p>
		</div>
	);
};

export default HowCards;
