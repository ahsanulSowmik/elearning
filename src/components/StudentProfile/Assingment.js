import React from 'react';
import Card from 'react-bootstrap/Card';

const Assingment = () => {
    return (
        <Card style={{ width: '18rem',marginTop:'20px' }}>
        <Card.Body>
          <Card.Title>Assingment</Card.Title>
          
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link><br/>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link><br/>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link><br/>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    );
};

export default Assingment;