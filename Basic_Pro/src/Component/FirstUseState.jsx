import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Tasbih: {count}</h1>
      <div style={styles.buttonGroup}>
        <button style={styles.button} onClick={() => setCount(count + 1)}>Inssscrement</button>
        <button style={styles.button} onClick={() => setCount(count - 1)}>Decrement</button>
        <button style={styles.resetButton} onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#282c34',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '20px',
  },
  buttonGroup: {
    display: 'flex',
    gap: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1.2rem',
    cursor: 'pointer',
    backgroundColor: '#61dafb',
    border: 'none',
    borderRadius: '5px',
    color: '#282c34',
    fontWeight: 'bold',
  },
  resetButton: {
    padding: '10px 20px',
    fontSize: '1.2rem',
    cursor: 'pointer',
    backgroundColor: '#ff6347',
    border: 'none',
    borderRadius: '5px',
    color: '#fff',
    fontWeight: 'bold',
  }
};

export default Counter;