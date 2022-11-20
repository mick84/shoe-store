import axios from "axios";
export const baseUrl = "https://6379578b7eb4705cf27eef00.mockapi.io";
//https://images.pexels.com/photos/10026491/pexels-photo-10026491.png

export const getProducts = async () => {
  const products = JSON.parse(sessionStorage.getItem("products")) || [];
  if (products.length > 0) {
    console.log("loaded from session storage");
    return products;
  }
  try {
    const { data } = await axios.get(`${baseUrl}/shoes`);
    return data;
  } catch ({ message }) {
    throw new Error(message);
  }
};
export const deleteProduct = async (id) => {
  console.log(`Deleting product with id: ${id}`);
  try {
    await axios.delete(`${baseUrl}/shoes/${id}`);
  } catch ({ message }) {
    throw new Error(message);
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
