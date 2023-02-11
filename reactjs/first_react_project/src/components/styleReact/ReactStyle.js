import React from 'react';
import styles from '../../MyStyle.module.css';

export default function ReactStyle() {
  const pStyle = {
    color: 'blue',
    fontWeight: 'bold',
  };

  return (
    <div>
      <h1 style={{ backgroundColor: 'red' }}>Hello World</h1>
      <p style={pStyle}>Style P</p>
      <p className={styles.active}>From Module</p>
      <p className="active">From App CSS</p>
    </div>
  );
}
