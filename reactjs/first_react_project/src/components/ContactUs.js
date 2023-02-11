import React from 'react';
import Menu from './Menu';

export default function ContactUs() {
  let a = [
    {
      key: '1',
      menu: 'Homepage',
    },
    {
      key: '2',
      menu: 'Contactus',
    },
  ];
  return (
    <div>
      <h1>Contact US</h1>
      <Menu apiDataMenu={a} />
    </div>
  );
}
