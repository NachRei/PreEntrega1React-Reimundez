import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const Cards = ({productos}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={productos.img} />
      <Card.Body>
        <Card.Title>{productos.titulo}</Card.Title>
        <Card.Text>
          {productos.description}
        </Card.Text>
        <Link to={`/item/${productos.id}`}> Ver Más </Link>
      </Card.Body>
    </Card>
  )
}

export default Cards