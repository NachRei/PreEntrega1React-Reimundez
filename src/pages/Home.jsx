import React from 'react';
import ItemListContainer from '../components/ItemListContainer';
import { infoProductos } from '../json/productos';

const Home = () => {
  return (
    <div>
      <ItemListContainer productos={infoProductos}/>
    </div>
  );
};

export default Home;