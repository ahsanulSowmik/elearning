import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'

export class RecentProject extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center ">
                    <h1 className="serviceMainTitle">RECENT PROJECT</h1>
                    <div className="bottom"></div>
                    <Row>
                        <Col lg={4} md={6} sm={12}>

                            <Card className="projectCard">
                                <Card.Img variant="top" src="https://image.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg" />
                                <Card.Body>
                                    <Card.Title className="serviceName">Project Name</Card.Title>
                                    <Card.Text className="serviceDiscription">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Visit Website</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <Card className="projectCard">
                                <Card.Img variant="top" src="https://image.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg" />
                                <Card.Body>
                                    <Card.Title className="serviceName">Project Name</Card.Title>
                                    <Card.Text className="serviceDiscription">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Visit Website</Button>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col lg={4} md={6} sm={12}>

                            <Card className="projectCard">
                                <Card.Img variant="top" src="https://image.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg" />
                                <Card.Body>
                                    <Card.Title className="serviceName">Project Name</Card.Title>
                                    <Card.Text className="serviceDiscription">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Visit Website</Button>
                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default RecentProject
