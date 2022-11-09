import React, { Component } from 'react'
import { Fragment } from 'react'
import { Container, Row,Col } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';


export class StudentProfileDetails extends Component {
  render() {
    return (
      <Fragment>
        <Container >
        <h1 className="serviceMainTitle">OUR COURSES</h1>
                    <div className="bottom"></div>
            <Row>
                
                <Col lg={4} md={6} sm={12} className="p-2" >
                <Nav variant="pills" className="flex-column">
          <Nav.Item>
                 <img className="profileImg" src="https://www.shareicon.net/data/512x512/2016/05/24/770139_man_512x512.png" alt="" />
                 
                
    
                 </Nav.Item>
                 <Nav.Item>
              <Nav.Link eventKey="first">
              <Button className='login-submit' variant="primary" type="submit">
             Student Profile
            </Button>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Course</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="academic">Academic</Nav.Link>
            </Nav.Item>
            
           <Nav.Item>
            <Nav.Link eventKey="logout">Log Out</Nav.Link>
           </Nav.Item>
           <Nav.Item>
            <Nav.Link eventKey="logout">Log Out</Nav.Link>
           </Nav.Item>
                 </Nav>
                 </Col>


                
               
            </Row>


        </Container>


      </Fragment>
    )
  }
}

export default StudentProfileDetails