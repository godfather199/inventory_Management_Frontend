import DisplayProduct from "../displayProduct/DisplayProduct";
import "./displayproducts.css";

function DisplayProducts({ products }) {
  return (
    <div className="displayProducts">
      <div className="displayProductsWrapper">
        {products.map((product) => (
            <DisplayProduct key = {product._id} product = {product} />
        ))}
      </div>
    </div>
  );
}

export default DisplayProducts;
