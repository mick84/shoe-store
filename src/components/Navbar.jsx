import { NavLink } from "react-router-dom";
import { NavLayout } from "./layouts";
import { CTX } from "../App";
import { useContext } from "react";
export default function Navbar(props) {
  const { state } = useContext(CTX);
  return (
    <NavLayout className={state.userLogged ? "logged" : ""}>
      <ul id="pages-menu">
        <li>
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/products">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/add-product/">
            Add Product
          </NavLink>
        </li>
      </ul>
    </NavLayout>
  );
}
