import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, SpecificProductLayout } from "./layouts";
import { CTX } from "../App";
import { ProductForm } from "./Form/Form";
import { SERVER, PRODUCT } from "../utils/actions";
import { deleteProduct } from "../utils/requests";
export default function SpecificProduct() {
  const { state, dispatch } = useContext(CTX);
  const params = useParams();
  const goto = useNavigate();
  async function handleDeletion(id) {
    try {
      dispatch({ type: SERVER.LOADING });
      await deleteProduct(id);
      dispatch({ type: PRODUCT.DELETE, payload: id });
      goto("/products");
    } catch (error) {
      dispatch({ type: SERVER.ERROR, payload: error });
    }
  }
  const index = state.products.findIndex((el) => el.id === params.id);
  const data = state.products[index];
  return (
    <Container>
      <ProductForm {...data} mode="editing" />
      <SpecificProductLayout imageUrl={data.image}>
        <p className="brand">{data.brand}</p>
        <p className="model">{data.model}</p>
        <div className="image" />
        <div>
          Price:&nbsp;
          <span className="price">
            &#8362;
            {data.price}
          </span>
        </div>
        <div>
          Choose size:&nbsp;
          <select name="sizes" id="sizes">
            {data.sizes.map((sizeObj) => (
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
            className="delete"
            onClick={handleDeletion.bind(null, params.id)}
          >
            Delete
          </button>
        </div>
      </SpecificProductLayout>
    </Container>
  );
}
