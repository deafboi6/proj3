import React from "react";
import { format } from "date-fns";
import Auth from "../../utils/auth";
import './index.css';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="">
      <div className="">
        <div>
            <h1 className="">Money Masterminds</h1>
          <p className="">
            A budget tracker guaranteed to make you a millionaire.*
          </p>
          {/* <p> {format(new Date(), "do MMMM")} </p> */}
        </div>
        <div>
          <>
          {Auth.loggedIn() ? (
            <button className="" onClick={logout}>
            Logout
          </button>
          ) : (
            <div></div>
          )}
          </>
        </div>
      </div>
    </header>
  );
};

export default Header;
