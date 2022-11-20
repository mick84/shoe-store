import axios from "axios";
export const baseUrl = "https://6379578b7eb4705cf27eef00.mockapi.io";
//https://images.pexels.com/photos/10026491/pexels-photo-10026491.png
export const deleteProduct = async (state, id) => {
  console.log(`Deleting product with id: ${id}`);
  const index = state.products.findIndex((prod) => prod.id === id);
  //console.log(index === -1 ? "No such index!" : "index ", index, "exists");
  try {
    await axios.delete(`${baseUrl}/shoes/${id}`);
    state.products.splice(index, 1);
    /*
    //*maybe needed check if there are products
    if (state.products.length === 0) {
      sessionStorage.clear();
      throw new Error("No more products in store!");
    }*/
    sessionStorage.setItem("products", JSON.stringify(state.products));
  } catch ({ message }) {
    console.error(message);
    state.error = {
      status: true,
      message,
    };
  }
};
export const getProducts = async (state) => {
  /*
  if (state.products.length > 0) {
    return;
  }
*/
  const products = JSON.parse(sessionStorage.getItem("products")) || [];
  if (products.length > 0) {
    state.products = products;
    console.log("loaded from session storage");
    return;
  }
  try {
    console.log("loading products from the server...");
    const { data } = await axios.get(`${baseUrl}/shoes`);
    state.products = data;
    sessionStorage.setItem("products", JSON.stringify(data));
    console.log("loading from the server finished!");
  } catch ({ message }) {
    console.error(message);
    state.error = {
      status: true,
      message,
    };
  }
};
export const updateProduct = async (state, body) => {
  const { id, image, price } = body;
  const index = state.products.findIndex((el) => el.id === id);
  try {
    await axios.put(`${baseUrl}/shoes/${id}`, { image, price });
    state.products[index] = { ...state.products[index], image, price };
    sessionStorage.setItem("products", JSON.stringify(state.products));
  } catch ({ message }) {
    console.error(message);
    state.error = {
      status: true,
      message,
    };
  }
};
export const addProduct = async (state, body) => {
  try {
    const { data } = await axios.post(`${baseUrl}/shoes`, body);
    state.products.push(data);
    sessionStorage.setItem("products", JSON.stringify(state.products));
  } catch ({ message }) {
    console.error(message);
    state.error = {
      status: true,
      message,
    };
  }
};
