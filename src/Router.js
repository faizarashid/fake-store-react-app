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
const Router = () => {
  const [token, setToken] = userToken();
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/login"
          element={<Login token={token} setToken={setToken} />}
        />
      </Routes>
    </>
  );
};
export default Router;
