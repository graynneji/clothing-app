import { useContext } from "react";
import { ProductsContext } from "../../../contexts/product.contexts";
import { Fragment } from "react";
import ProductCard from "../../product-card/product-card.component";
import "./shop.style.scss";
const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <Fragment>
      <div className="products-container">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </Fragment>
  );
};
export default Shop;
