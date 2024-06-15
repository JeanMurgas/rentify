import React from 'react';
import { Outlet } from 'react-router-dom';

const Catalog = () => {
  return (
    <div>
      <h1>Catálogo</h1>
      <Outlet />
    </div>
  );
};

export default Catalog;
