import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="">
      <ul>
        <Link to="https://github.com/ArturoSer">Arturo's GitHub</Link>
        <Link to="https://github.com/walleric23">Eric's GitHub</Link>
        <Link to="https://github.com/deafboi6">Jayden's GitHub</Link>
        <Link to="https://github.com/Stingxming">Mathew's GitHub</Link>
        <Link to="https://github.com/Syre11">Spencer's GitHub</Link>
      </ul>
    </footer>
  )
}

export default Footer;
