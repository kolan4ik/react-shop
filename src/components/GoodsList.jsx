import { GoodsItem } from './GoodsItem';

export const GoodsList = ({ goods = [] }) => {
	if (!goods.length) {
		return <h3>Nothing here</h3>;
	}
	return (
		<>
			{goods.map(item => (
				<GoodsItem key={item.id} {...item} />
			))}
		</>
	);
};
