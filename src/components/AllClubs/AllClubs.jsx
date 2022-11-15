import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'
import club1 from '../../assest/image/club1.png'
import { Link } from 'react-router-dom'

class Allclubs extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center mt-5">
                    {/* <h1 className="serviceMainTitle">Our club </h1>
                    <div className="bottom"></div> */}
                    <Row>
                        <Col lg={4} md={6} sm={12}>

                            <Card className="projectCard">
                                <Card.Img variant="top" src={club1} />
                                <Card.Body>
                                    <Card.Title className="serviceName">DIU Computer & Programming Club</Card.Title>
                                    <Card.Text className="serviceDiscription">
                                    DIU CPC is the most primitive and extensive club of our University.
                                    We work together to explore every field of Computer Science.
                                    </Card.Text>
                                    <Link to="/clubdetails">
                                    <Button variant="primary">Visit Website </Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <Card className="projectCard">
                                <Card.Img variant="top" src="./image/club2.png" />
                                <Card.Body>
                                    <Card.Title className="serviceName">DIU Robotics Club</Card.Title>
                                    <Card.Text className="serviceDiscription">
                                    DIU Robotics Club is the most primitive and extensive club as well as the biggest club in Daffodil International University. 
                                    Working together with a dream to improve.
                                    </Card.Text>
                                    <Link to="/clubdetails">
                                    <Button variant="primary">Visit Website</Button>
                                    </Link>
                                    
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col lg={4} md={6} sm={12}>

                            <Card className="projectCard">
                                <Card.Img variant="top" src="./image/club3.png" />
                                <Card.Body>
                                    <Card.Title className="serviceName">DIU Photographic Society</Card.Title>
                                    <Card.Text className="serviceDiscription">
                                    Daffodil International University Photographic Society (DIUPS) was founded in 2011 
                                    by few dedicated students of Daffodil International University's experienced
                                    </Card.Text>
                                    <Link to="/clubdetails">
                                    <Button variant="primary">Visit Website</Button>
                                    </Link>
                                   
                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>




                    <Row>
                        <Col lg={4} md={6} sm={12}>

                            <Card className="projectCard">
                                <Card.Img variant="top"src= "./image/club4.png" />
                                <Card.Body>
                                    <Card.Title className="serviceName">DIU Voluntary Service Club</Card.Title>
                                    <Card.Text className="serviceDiscription">
                                    Daffodil International University Voluntary Service Club is a student-led club or 
                                    organization where students of Daffodil International University unselfishly strive to
                                    
                                    </Card.Text>
                                    <Link to="/clubdetails">
                                    <Button variant="primary">Visit Website</Button>
                                    </Link>
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <Card className="projectCard">
                                <Card.Img variant="top" src="./image/club5.png" />
                                <Card.Body>
                                <Card.Title className="serviceName">All Stars Daffodil</Card.Title>
                                    <Card.Text className="serviceDiscription">
                                    All Stars Daffodil is a drama organization. It is the only theater club at Daffodil International University. Those who practice pure Bengali culture have already gained 
                                    
                                    </Card.Text>
                                    <Link to="/clubdetails">
                                    <Button variant="primary">Visit Website</Button>
                                    </Link>
                                    
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col lg={4} md={6} sm={12}>

                            <Card className="projectCard">
                                <Card.Img variant="top" src="./image/club6.png" />
                                <Card.Body>
                                <Card.Title className="serviceName">Daffodil Prothom Alo Bondhushava</Card.Title>
                                    <Card.Text className="serviceDiscription">
                                    Daffodil Prothom Alo Bondhushava is one of the finest central clubs of Daffodil International University.
                                     It is the social, 
                                    </Card.Text>
                                    <Link to="/clubdetails">
                                        <Button variant="primary">Visit Website</Button>
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

export default Allclubs