export const GoodsItem = ({ id, name, description, price, full_background }) => {
	return (
		<div className='card'>
			<div className='card-image'>
				<img src={full_background} alt={name} />
			</div>
			<div className='card-content'>
				<span className='card-title'>{name}</span>
				<p>{description}</p>
			</div>
			<div className='card-action'>
				<button className='btn'>Купить</button>
				<span style={{ fontSize: '1.8rem' }} className='right'>
					{price} руб.
				</span>
			</div>
		</div>
	);
};
