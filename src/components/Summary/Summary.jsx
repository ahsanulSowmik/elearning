import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

class Summary extends Component {
    render() {
        return (
            <Fragment>

                <Container fluid={true} className="summaryFixedBanner p-0" >
                    <div className="summaryBannerOverlay">
                        <Container className="text-center">
                            <Row >

                                <Col lg={8} md={6} sm={12}>
                                    <Row className="countSection">
                                    <Col>
                                    <FontAwesomeIcon icon={faGlobe} className="iconProject" />
                                    <h1 className="countNumber">
                                    <CountUp end={35000} duration={5}>
                                    </CountUp>
                                    </h1>
                                    <h4 className="countTitle">Student Worldwide</h4>
                                    <hr className="bg-white w-35"></hr>
                                </Col>

                                <Col>
                                    <FontAwesomeIcon icon={faLaptop} className="iconProject" />
                                    <h1 className="countNumber">
                                    <CountUp end={22} duration={5}>
                                    </CountUp>
                                    </h1>
                                    <h4 className="countTitle">Course Published</h4>
                                    <hr className="bg-white w-35"></hr>
                                </Col>

                                <Col>
                                    <FontAwesomeIcon icon={faStar} className="iconProject" />
                                    <h1 className="countNumber">
                                    <CountUp end={35000} duration={5}>
                                    </CountUp>
                                    </h1>
                                    <h4 className="countTitle">Student Reviwed</h4>
                                    <hr className="bg-white w-35"></hr>
                                </Col>


                            </Row>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <Card className="workCard">
                                <Card.Body>
                                    <Card.Title>What I have Achieved</Card.Title>
                                    <Card.Text className="cardTile">
                                        <p className="cardSubTile text-justify"><FontAwesomeIcon icon={faCheckSquare} className="iconBullet" />   Lorem ipsum.</p>
                                        <p className="cardSubTile text-justify"><FontAwesomeIcon icon={faCheckSquare} className="iconBullet" />Lorem ipsum.</p>
                                        <p className="cardSubTile text-justify"><FontAwesomeIcon icon={faCheckSquare} className="iconBullet" />Lorem ipsum.</p>
                                        <p className="cardSubTile text-justify"><FontAwesomeIcon icon={faCheckSquare} className="iconBullet" />Lorem ipsum.</p>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
                </Container >

            </Fragment >
        )
    }
}

export default Summary