import { GoodsItem } from "./GoodsItem";

export const GoodsList = ({ goods = [], addToBasket }) => {
  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }
  return (
    <>
      {goods.map(item => (
        <GoodsItem addToBasket={addToBasket} key={item.id} {...item} />
      ))}
    </>
  );
};
