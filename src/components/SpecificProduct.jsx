import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, SpecificProductLayout } from "./layouts";
import { CTX } from "../App";
import { ProductForm } from "./Form/Form";
import { SERVER, PRODUCT } from "../utils/actions";
export default function SpecificProduct(props) {
  const { state, dispatch } = useContext(CTX);
  const params = useParams();
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
            onClick={() => {
              dispatch({ type: SERVER.LOADING });
              dispatch({ type: PRODUCT.DELETE, payload: params.id });
            }}
          >
            Delete
          </button>
        </div>
      </SpecificProductLayout>
    </Container>
  );
}
