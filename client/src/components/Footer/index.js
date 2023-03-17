import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="">
      <ul>
        <li><Link to="https://github.com/ArturoSer">Arturo's GitHub</Link></li>
        <li><Link to="https://github.com/walleric23">Eric's GitHub</Link></li>
        <li><Link to="https://github.com/deafboi6">Jayden's GitHub</Link></li>
        <li><Link to="https://github.com/Stingxming">Mathew's GitHub</Link></li>
        <li><Link to="https://github.com/Syre11">Spencer's GitHub</Link></li>
      </ul>
      <p>*not actually guaranteed to make you a millionaire.</p>

    </footer>
  )
}

export default Footer;
