import React from 'react';
import { useHistory } from 'react-router-dom';

const HomeScreen = () => {
  const history = useHistory();

  return (
    <div style={styles.container}>
      <h1>Welcome to Street Support</h1>
      <button onClick={() => history.push('/profile')}>View Profile</button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
};

export default HomeScreen;