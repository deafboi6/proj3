import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="">
      <div className="">
        <div>
          <Link className="" to="/">
            <h1 className="">Money Masterminds</h1>
          </Link>
          <p className="">
            A budget tracker guaranteed to make you a millionaire.*
          </p>
          <p> {format(new Date(), "do MMMM")} </p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <button className="" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="" to="/login">
                Login
              </Link>
              <Link className="" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
