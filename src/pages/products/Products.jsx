import { useEffect, useContext } from "react";
import axios from "axios";
import { Container } from "../../components/layouts";
import Product from "../product/Product";
import { CTX } from "../../App";
import { SERVER, PRODUCT } from "../../utils/actions";
import { baseUrl } from "../../utils/requests";

export default function Products(props) {
  const { state, dispatch } = useContext(CTX);
  useEffect(() => {
    dispatch({ type: SERVER.TOGGLE_SPINNER });
    let prods = JSON.parse(sessionStorage.getItem("products")) || [];
    if (prods.length === 0) {
      axios
        .get(baseUrl.concat("/shoes"))
        .then(({ data }) => {
          sessionStorage.setItem("products", JSON.stringify(data));
          dispatch({ type: PRODUCT.LOAD_ALL, payload: data });
        })
        .catch(({ message }) => {
          dispatch({ type: SERVER.ERROR, payload: message });
        });
    } else {
      dispatch({ type: PRODUCT.LOAD_ALL, payload: prods });
    }
    dispatch({ type: SERVER.TOGGLE_SPINNER });
  }, [dispatch]);
  const handleAction = (type, payload) => {
    dispatch({ type: SERVER.TOGGLE_SPINNER });
    dispatch({
      type,
      payload,
    });
  };
  return (
    <Container>
      {state.products.map((prod) => (
        <Product
          key={prod.uuid}
          {...prod}
          onEdit={handleAction.bind(null, PRODUCT.EDIT, prod.id)}
          onDelete={handleAction.bind(null, PRODUCT.DELETE, prod.id)}
        />
      ))}
    </Container>
  );
}
