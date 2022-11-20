import { useEffect, useContext } from "react";
import { Container } from "../../components/layouts";
import Product from "../product/Product";
import { CTX } from "../../App";
import { SERVER, PRODUCT } from "../../utils/actions";
import { getProducts } from "../../utils/requests";
export default function Products(props) {
  const { state, dispatch } = useContext(CTX);

  useEffect(() => {
    dispatch({ type: SERVER.LOADING });
    getProducts()
      .then((payload) => dispatch({ type: PRODUCT.LOAD_ALL, payload }))
      .catch((message) => dispatch({ type: SERVER.ERROR, payload: message }));
  }, [dispatch]);

  return (
    <Container>
      {state.products.map((prod) => (
        <Product key={prod.uuid} {...prod} />
      ))}
    </Container>
  );
}
