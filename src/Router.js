import {
  NavLink,
  Route,
  Routes,
  useLocation,
  useRoutes,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import userToken from "./components/userToken";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./redux/action/Login";
import Product from "./redux/action/Product";
const Router = () => {
  const [token, setToken] = userToken();

  return (
    <>
      <NavBar />
      <Routes>
        {token ? (
          <>
            {" "}
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="*" element={<NotFound />} />
          </>
        ) : (
          <>
            <Route
              path="/login"
              element={<Login token={token} setToken={setToken} />}
            />
            <Route path="/products" element={<Product />} />
          </>
        )}
      </Routes>
      <h1>Plese Login to view Links</h1>
    </>
  );
};
export default Router;
