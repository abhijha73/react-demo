import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [loginButtonText, setLoginButtonText] = useState("Login");
  return (
    <div className="header">
      <div className="logo">
        <img
          className="logo-img"
          src="https://www.pngfind.com/pngs/m/5-59796_food-delivery-delivery-food-icon-png-transparent-png.png"
          alt="logo"
        />
      </div>
      <div className="nav">
        <Link to="/">Home</Link>

        <Link to="/about">About</Link>

        <Link to="/contact">Contact</Link>
        <Link to="/about">Cart</Link>

        <button
          onClick={() => {
            setLoginButtonText(
              loginButtonText === "Login" ? "Logout" : "Login",
            );
          }}
        >
          {loginButtonText}
        </button>
      </div>
    </div>
  );
};
export default Header;
