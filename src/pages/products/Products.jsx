import { useEffect, useContext } from "react";
import { Container } from "../../components/layouts";
import Product from "../product/Product";
import { CTX } from "../../App";
import { SERVER, PRODUCT } from "../../utils/actions";

export default function Products(props) {
  const { state, dispatch } = useContext(CTX);
  useEffect(() => {
    dispatch({ type: SERVER.LOADING });
    dispatch({ type: PRODUCT.LOAD_ALL });
  }, [dispatch]);
  //useEffect(()=>{},[])
  return (
    <Container>
      {state.products.map((prod) => (
        <Product key={prod.uuid} {...prod} />
      ))}
    </Container>
  );
}
