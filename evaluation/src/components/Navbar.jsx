import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login, logout } from "../store/auth/auth.action";

export const Navbar = () => {
  // const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/user">User</Link>
      {isUserLoggedIn && (
        <button onClick={() => dispatch(logout())}>Logout</button>
      )}
    </div>
  );
};
