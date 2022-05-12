const Card = ({ rasm, title, text }) => {
	return (
		<div className='card'>
			<img className='card__img' src={rasm} alt='Img' />
			<h3 className='card__title'>{title}</h3>
			<p className='card__text'>{text}</p>
		</div>
	);
};

export default Card;
