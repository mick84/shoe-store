import { Routes, Route } from "react-router-dom";
import Main from "../pages/main/Main";
import Products from "../pages/products/Products";
import SpecificProduct from "../components/SpecificProduct";
import { ProductForm } from "../components/Form/Form";
//import Reload from "../pages/Reload";
export default function RoutesEl() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<SpecificProduct />} />
      <Route path="/add-product" element={<ProductForm />} />
      <Route path="/*" element={<span>Error!</span>} />
    </Routes>
  );
}
