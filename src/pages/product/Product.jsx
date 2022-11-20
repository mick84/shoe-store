import { useNavigate } from "react-router-dom";
import { ProductLayout } from "../../components/layouts";
import { CTX } from "../../App";
import { useContext } from "react";
import { PRODUCT, SERVER } from "../../utils/actions";
import { deleteProduct } from "../../utils/requests";
export default function Product({ id, brand, model, sizes, image, price }) {
  const goto = useNavigate();
  const { dispatch } = useContext(CTX);
  async function handleDeletion(index) {
    try {
      dispatch({ type: SERVER.LOADING });
      await deleteProduct(index);
      dispatch({ type: PRODUCT.DELETE, payload: index });
    } catch (error) {
      dispatch({ type: SERVER.ERROR, payload: error });
    }
  }
  return (
    <ProductLayout imageUrl={image}>
      <p className="brand">{brand}</p>
      <p className="model">{model}</p>
      <div className="image" />
      <div>
        Price:&nbsp;
        <span className="price">
          &#8362;
          {price}
        </span>
      </div>
      <div>
        Choose size:&nbsp;
        <select name="sizes" id="sizes">
          {sizes.map((sizeObj) => (
            <option
              key={`sz-${sizeObj.size}`}
              value={sizeObj.size}
              disabled={sizeObj.quantity === 0}
            >
              {sizeObj.size}
            </option>
          ))}
        </select>
      </div>
      <div className="buttons">
        <button
          type="button"
          className="edit"
          onClick={goto.bind(null, `/products/${id}`)}
        >
          Edit
        </button>
        <button
          type="button"
          className="delete"
          onClick={handleDeletion.bind(null, id)}
        >
          Delete
        </button>
      </div>
    </ProductLayout>
  );
}
