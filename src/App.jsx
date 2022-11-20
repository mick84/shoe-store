import { useReducer, createContext } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Router from "./routes/Routes";
import { PRODUCT, SERVER } from "./utils/actions";
import Spinner from "./components/Spinner";
import {
  addProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "./utils/requests";
const initialState = {
  products: [],
  userLogged: false,
  loading: false,
  error: {
    status: false,
    message: "",
  },
};
export const CTX = createContext();
function reducer(state, action) {
  switch (action.type) {
    case PRODUCT.LOAD_ALL:
      getProducts(state);
      state.loading = false;
      break;
    case PRODUCT.ADD:
      addProduct(state, action.payload);
      state.loading = false;
      break;
    case PRODUCT.EDIT:
      updateProduct(state, action.payload);
      state.loading = false;
      break;
    case PRODUCT.DELETE:
      deleteProduct(state, action.payload);
      state.loading = false;
      break;
    case SERVER.ERROR:
      state.error = {
        status: true,
        message: action.payload,
      };
      state.loading = false;
      break;
    case SERVER.LOADING:
      state.loading = true;
      break;
    default:
      break;
  }

  return { ...state };
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <CTX.Provider value={{ state, dispatch }}>
        <Navbar />
        {state.loading && <Spinner />}
        <Router />
      </CTX.Provider>
      {/* <img
        src="https://api.lorem.space/image/shoes?w=300&amp;amp;amp;amp;h=400"
        alt="shoe"
      /> */}
    </div>
  );
}

export default App;
