import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="http://www.google.com.br">Google</Link>
        </li>
        <li>
          <Link to="http://www.globo.com.br">Globo</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
