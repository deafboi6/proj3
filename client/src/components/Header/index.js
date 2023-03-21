<<<<<<< Updated upstream
import React from "react";
import { format } from "date-fns";
import Auth from "../../utils/auth";
=======
import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';
>>>>>>> Stashed changes

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="">
      <div className="">
        <div>
<<<<<<< Updated upstream
            <h1 className="">Money Masterminds</h1>
          <p className="">
            A budget tracker guaranteed to make you a millionaire.*
          </p>
          <p> {format(new Date(), "do MMMM")} </p>
=======
          <Link className="" to="/">
            <h1 className="">Money Masterminds</h1>
          </Link>
          <p className="">A budget tracker guaranteed to make you a millionaire.*</p>
>>>>>>> Stashed changes
        </div>
        <div>
          <>
          {Auth.loggedIn() ? (
            <button className="" onClick={logout}>
            Logout
          </button>
          ) : (
<<<<<<< Updated upstream
            <div></div>
=======
            <>
              <Link className="" to="/login">
                Login
              </Link>
              <Link className="" to="/signup">
                Signup
              </Link>
            </>
>>>>>>> Stashed changes
          )}
          </>
        </div>
      </div>
    </header>
  );
};

export default Header;
