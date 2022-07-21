import ProductCard from "../Card/productCard";

const List = (props) => {
  const { data } = props;
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {data.filter(item => {
        return item.rating.rate > 3
      }).map((item, index) => (
        <ProductCard cardData={item} />
      ))}
    </div>
  );
};

export default List;
