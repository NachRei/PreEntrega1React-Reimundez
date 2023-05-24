import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  return (
    <div style={
      {display:"flex", 
      flexDirection:"row", 
      justifyContent:"space-between", 
      alignItems:"center" ,fontSize:"25px", 
      width:"40px", color:"#FFFFFF8C"}
      }>
        <FontAwesomeIcon icon={faBagShopping} />
        <span>5</span>
    </div>
  )
}

export default CartWidget