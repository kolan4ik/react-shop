export const GoodsItem = ({ displayName, price, displayAssets, displayDescription }) => {
	return (
		<div className='card'>
			<div className='card-image'>
				<img src={displayAssets[0].full_background} alt={displayName} />
			</div>
			<div className='card-content'>
				<span className='card-title'>{displayName}</span>
				<p>{displayDescription}</p>
			</div>
			<div className='card-action'>
				<button className='btn'>Купить</button>
				<span style={{ fontSize: '1.8rem' }} className='right'>
					{price.finalPrice} руб.
				</span>
			</div>
		</div>
	);
};
