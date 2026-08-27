import { useState, useContext } from "react";
import useOnlineOfflineStatus from "./../utils/useOnlineOfflineStatus";
import { Link } from "react-router-dom";
import UserContext from "./../utils/UserContext";
const Header = () => {
  const user = useContext(UserContext);
  console.log(user);
  const status = useOnlineOfflineStatus();
  const [loginButtonText, setLoginButtonText] = useState("Login");
  return (
    <header className="sticky top-0 z-50 w-full bg-primary shadow-lg">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <div className="flex items-center gap-2">
          <h1 className="text-white text-2xl font-bold">🍽️ FoodHub</h1>
        </div>
        <nav className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 sm:gap-x-8">
          <div className="text-sm font-semibold text-white sm:text-lg">
            {status ? "✅" : "☑️"}
          </div>
          <Link
            to="/"
            className="text-white font-medium hover:text-gray-100 transition"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-white font-medium hover:text-gray-100 transition"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="text-white font-medium hover:text-gray-100 transition"
          >
            Contact
          </Link>
          <Link
            to="/about"
            className="text-white font-medium hover:text-gray-100 transition"
          >
            Cart
          </Link>

          <button
            onClick={() => {
              setLoginButtonText(
                loginButtonText === "Login" ? "Logout" : "Login",
              );
            }}
            className="bg-white text-primary font-bold px-6 py-2 rounded-full hover:bg-gray-100 transition shadow-md"
          >
            {loginButtonText}
          </button>
          <div>{user.userName}</div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
