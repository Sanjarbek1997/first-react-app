const WhyCard = ({ car, Svg, title, text }) => {
	return (
		<div className='why__card'>
			{Svg}
			<h3 className='why__card--title'>{title}</h3>
			<p className='why__card--text'>{text}</p>
		</div>
	);
};

export default WhyCard;
