import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileScreen = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/auth/profile'); // Ensure you have this endpoint in your backend
        setProfile(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div style={styles.container}>
      <h1>Profile</h1>
      {profile ? (
        <div>
          <img src={profile.photo} alt="Profile" style={styles.image} />
          <h2>{profile.name}</h2>
          <p>{profile.bio}</p>
          <p>Donations: {profile.donations}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
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
  image: {
    width: '150px',
    height: '150px',
    borderRadius: '75px',
    marginBottom: '15px',
  },
};

export default ProfileScreen;