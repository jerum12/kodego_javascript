import React from 'react';
import Menu from './Menu';

export default function Gallery() {
  let a = [
    {
      key: '1',
      menu: 'Homepage',
    },
    {
      key: '2',
      menu: 'Contactus',
    },
    {
      key: '3',
      menu: 'Videos',
    },
    {
      key: '4',
      menu: 'Testimonials',
    },
    {
      key: '5',
      menu: 'Services',
    },
  ];
  return (
    <div>
      <h1>Gallery</h1>
      <Menu apiDataMenu={a} />
    </div>
  );
}
