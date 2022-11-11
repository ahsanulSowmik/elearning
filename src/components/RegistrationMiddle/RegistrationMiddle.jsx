import React, { Component } from 'react'
import { Fragment } from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


export class RegistrationMiddle extends Component {
    componentDidMount(){
        window.scroll(0,0)
    }
     
  render() {
    return (
      <Fragment>
        <Container className='regCard mt-5'>
            <Row>
                <Col lg={6} md={6} sm={12} >
                <Card className='cardbodydesign'>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>Who are you?</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to ='/registration'>
        <Button variant="primary">Student</Button>
        </Link>
        
      </Card.Body>
    </Card>
                
                
                
                </Col>
            
                <Col lg={6} md={6} sm={12} >
                <Card className='cardbodydesign'>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>Who are you?</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to='/registration'>
        <Button variant="primary">Club Authority</Button>
        </Link>
        
      </Card.Body>
    </Card>
                
                
                
                </Col>
            </Row>
        </Container>
        
      </Fragment>
    )
  }
}

export default RegistrationMiddle