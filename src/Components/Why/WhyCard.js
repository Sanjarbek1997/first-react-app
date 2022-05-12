const WhyCard = ({ car, svg, title, text }) => {
	return (
		<div className='why__card'>
			<img className={car} src={svg} alt="icon"/>
			<h3 className='why__card--title'>{title}</h3>
			<p className='why__card--text'>{text}</p>
		</div>
	);
};

export default WhyCard;
