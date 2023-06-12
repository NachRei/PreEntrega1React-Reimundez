import React from 'react';
import ItemListContainer from '../components/ItemListContainer';
import { infoProductos } from '../json/productos';
import { useParams } from 'react-router-dom';

const Category = () => {
  const {categoryId} = useParams()

  const productsFilteredByCatergory = infoProductos.filter(products => products.categoria === categoryId);
  return <ItemListContainer productos= {productsFilteredByCatergory} />
}

export default Category