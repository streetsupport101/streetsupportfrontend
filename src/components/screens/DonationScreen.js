import React, { useState } from 'react';
import axios from 'axios';

const DonationScreen = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleDonation = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/donate', { amount, currency, name, description });
      if (response.data) {
        alert('Donation successful!');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Make a Donation</h1>
      <input
        style={styles.input}
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select
        style={styles.input}
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>
      <input
        style={styles.input}
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        style={styles.input}
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleDonation}>Donate</button>
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
  input: {
    margin: '10px',
    padding: '10px',
    width: '200px',
  },
};

export default DonationScreen;