import React, { Component } from 'react'
import { Fragment } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export class ClubRegistration extends Component {
  render() {
    return (
      
        <Fragment>
        <Container className='mainform'>
        <Row>
        <Col lg={6} md={12} sm={12}>
        {/* class="col-lg-6 col-md-12 col-sm-12" */}
        {/* <ResponsiveContainer> */}
     
              <Form className='login-form' >
            
              <h2 className='login-text'> Registration</h2>
              <Form.Group  controlId="formBasicEmail">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Your Name" />
            </Form.Group>
            <Form.Group  controlId="formBasicEmail">
              <Form.Label>Club ID</Form.Label>
              <Form.Control type="text" placeholder="Your club ID" />
              </Form.Group>
              <Form.Group  controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
             
            </Form.Group>

            <Form.Group controlId="formBasicPassword"> 
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            
           
            <Button className='login-submit' variant="primary" type="submit">
              Submit
            </Button>
            </Form.Group>
          </Form>
         
          {/* </ResponsiveContainer> */}
          </Col>
        </Row>
        </Container>
    </Fragment>
    

    )
  }
}

export default ClubRegistration