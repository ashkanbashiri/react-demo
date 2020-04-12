import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Ashkan's React App</h1>
      <Link style={linkStyle} to="/react-demo/sv">Sorting-Visualizer </Link>
      | <Link style={linkStyle} to="/react-demo/ml">Traffic Control </Link>
      | <Link style={linkStyle} to="/react-demo/ml">Image Classification </Link>
      | <Link style={linkStyle} to="/react-demo/ml">DataScience Projects </Link>
    </header>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

export default Header;