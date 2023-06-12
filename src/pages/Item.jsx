import React from 'react';
import ItemDetailContainer from '../components/ItemListContainer';
import { infoProductos } from '../json/productos';
import { useParams } from 'react-router-dom';

const Item = () => {
  const {itemId} = useParams()

  const productsFilteredById = infoProductos.filter(products => products.id === parseInt(itemId));
  return <ItemDetailContainer productos= {productsFilteredById} />
} 

export default Item