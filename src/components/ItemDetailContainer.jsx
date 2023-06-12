import React from 'react';
import Cards from '../components/Cards';

const ItemDetailContainer = ({productos}) => {
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

export default ItemDetailContainer