import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { RoutesFiles } from "./RoutesFiles/RoutesFiles";

export default function App() {
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isUserLoggedIn) {
      if (pathname === "/login") navigate("/");
      else navigate(pathname);
    } else {
      navigate("/login");
    }
  }, [navigate, isUserLoggedIn, pathname]);

  return (
    <div className="App">
      <Navbar />
      <RoutesFiles/>
    </div>
  );
}

