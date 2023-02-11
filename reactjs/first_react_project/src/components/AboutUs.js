import React from 'react';
import Menu from './Menu';

export default function AboutUs() {
  let b = [
    {
      key: '1',
      menu: 'Homepage',
    },
    {
      key: '2',
      menu: 'About Us',
    },
    {
      key: '3',
      menu: 'Gallery',
    },
  ];
  return (
    <div>
      <h2>About Us Here!</h2>
      <Menu apiDataMenu={b} />
    </div>
  );
}
