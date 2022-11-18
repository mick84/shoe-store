import { useReducer, createContext } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Router from "./routes/Routes";
import { PRODUCT, SERVER } from "./utils/actions";
import Spinner from "./components/Spinner";
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
      state.products = action.payload;

      break;
    case PRODUCT.EDIT:
      console.log("editing product with id : ", action.payload);
      break;
    case PRODUCT.DELETE:
      console.log("Deleting product with id : ", action.payload);
      break;
    case SERVER.ERROR:
      state.error = {
        status: true,
        message: action.payload,
      };
      break;
    case SERVER.TOGGLE_SPINNER:
      state.loading = !state.loading;
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
