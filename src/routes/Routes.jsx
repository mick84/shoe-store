import { Routes, Route } from "react-router-dom";
import Main from "../pages/main/Main";
import Products from "../pages/products/Products";
import Product from "../pages/product/Product";
export default function RoutesEl() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<h1>Product Page</h1>} />
      <Route path="/*" element={<span>Error!</span>} />
    </Routes>
  );
}
