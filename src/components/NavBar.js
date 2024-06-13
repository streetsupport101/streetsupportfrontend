import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li style={styles.li}><Link to="/home">Home</Link></li>
        <li style={styles.li}><Link to="/profile">Profile</Link></li>
        <li style={styles.li}><Link to="/donate">Donate</Link></li>
        <li style={styles.li}><Link to="/auth">Login</Link></li>
        <li style={styles.li}><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'center',
    background: '#333',
    padding: '1em'
  },
  ul: {
    listStyle: 'none',
    display: 'flex',
    gap: '1em',
  },
  li: {
    color: '#fff'
  }
};

export default NavBar;