import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Auth from "../../utils/auth";

const Footer = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <footer className="">
      <h4>Contact Us!</h4>
      <ul>
        <li><Link to="https://github.com/ArturoSer">Arturo's GitHub</Link></li>
        <li><Link to="https://github.com/walleric23">Eric's GitHub</Link></li>
        <li><Link to="https://github.com/deafboi6">Jayden's GitHub</Link></li>
        <li><Link to="https://github.com/Stingxming">Mathew's GitHub</Link></li>
        <li><Link to="https://github.com/Syre11">Spencer's GitHub</Link></li>
      </ul>
      <div>
          <>
          {Auth.loggedIn() ? (
            <button className="logoutBtn" onClick={logout}>
            Logout
          </button>
          ) : (
            <div></div>
          )}
          </>
        </div>
      <p>*not actually guaranteed to make you a millionaire.</p>
    </footer>
  )
}

export default Footer;
