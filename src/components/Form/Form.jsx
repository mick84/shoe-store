import { useState, useContext } from "react";
import { Container, FormLayout } from "../layouts";
import { CTX } from "../../App";
import { PRODUCT, SERVER } from "../../utils/actions";
export const UserAuthForm = (props) => {
  return <FormLayout className={"user"}>{props.children}</FormLayout>;
};

export const ProductForm = (props) => {
  const { state, dispatch } = useContext(CTX);
  const [inputs, setInputs] = useState({
    brand: props.brand || "",
    model: props.model || "",
    image: props.image || "",
    price: props.price || "",
  });
  function handleInputChange(e) {
    setInputs((st) => {
      st[e.target.name] = +e.target.value || e.target.value;
      return { ...st };
    });
  }
  const cleaFields = () => {
    setInputs((st) => {
      if (props.mode !== "editing") {
        st.brand = "";
        st.model = "";
      }
      st.picture = "";
      st.price = "";
      return { ...st };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    dispatch({ type: SERVER.LOADING });
    const { brand, model, image, price } = inputs;
    let body = { image, price };
    if (props.mode === "editing") {
      body.id = props.id;
      dispatch({ type: PRODUCT.EDIT, payload: body });
    } else {
      body = { ...body, brand, model };
      dispatch({ type: PRODUCT.ADD, payload: body });
    }
  };
  return (
    <Container>
      <FormLayout className={"product"} onSubmit={handleSubmit}>
        <p className="form-title">
          {props.mode === "editing" ? "Edit" : "Add new"} product
        </p>
        <Container>
          <label htmlFor="brand">Brand: </label>
          <input
            disabled={props.mode === "editing"}
            required={props.mode !== "editing"}
            type="text"
            name="brand"
            id="brand"
            value={inputs.brand}
            onChange={handleInputChange}
          />
        </Container>
        <Container>
          <label htmlFor="model">Model: </label>
          <input
            disabled={props.mode === "editing"}
            required={props.mode !== "editing"}
            type="text"
            name="model"
            id="model"
            value={inputs.model}
            onChange={handleInputChange}
          />
        </Container>
        <Container>
          <label htmlFor="image">Picture: </label>
          <input
            type="url"
            required
            name="image"
            id="image"
            value={inputs.image}
            onChange={handleInputChange}
          />
        </Container>
        <Container>
          <label htmlFor="price">Price: </label>
          <input
            type="number"
            required
            name="price"
            id="price"
            value={inputs.price}
            onChange={handleInputChange}
          />
        </Container>
        <div className="buttons">
          <button type="reset" onClick={cleaFields}>
            Clear fields
          </button>
          <button type="submit">Confirm</button>
        </div>

        {/* //*later, if possible...
      <Container>
        <label htmlFor="sizes">Sizes: </label>
        <select name="sizes" id="sizes" />....
      </Container> */}
      </FormLayout>
    </Container>
  );
};
