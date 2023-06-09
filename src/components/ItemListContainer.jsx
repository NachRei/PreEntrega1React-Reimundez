import React from 'react';
import Cards from '../components/Cards';

const ItemListContainer = ({productos}) => {
  return (
    <div>
      {
        productos.map(product => {
          return(
            <Cards key={product.id} productos={product}/>
          )
        })
      }  
    </div>
  )
}

export default ItemListContainer