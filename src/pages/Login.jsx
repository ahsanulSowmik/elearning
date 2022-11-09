import React, { Component } from 'react'
import { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export class Login extends Component {
  componentDidMount(){
    window.scroll(0,0)
}
  render() {
    return (
      <Fragment>
        <Container className='mainform' >
          <Row>
            <Col lg={12} md={12} sm={12}>
            {/* class="col-lg-6 col-md-12 col-sm-12" */}
            {/* <ResponsiveContainer> */}
           
         
                  <Form className='login-form' >
                
                  <h2 className='login-text'> LOGIN</h2>
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

export default Login