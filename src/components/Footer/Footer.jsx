import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component, Fragment } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="footerSection">
                    <Row>
                        <Col lg="3" md={6} sm={12} className="p-5 text-center">
                            <h2 className="footerName text-center">Follow Us </h2>

                            <div className="social-container">
                                <Link className="facebook social" to="#">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                                </Link>
                                <Link to="#" className="youtube social">
                                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                                </Link>
                                <Link to="#" className="twitter social">
                                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                                </Link>
                            </div>


                        </Col>



                        <Col lg="3" md={6} sm={12} className="p-5 text-justify">
                            <h2 className="footerName ">Address </h2>
                            <p className="footerDescription">
                            Daffodil International University<br></br>
                                Daffodil Smart City (DSC),<br></br>
                                    Ashulia, Dhaka-1341<br></br>
                                <FontAwesomeIcon icon={faEnvelope} /> Email :Support@ele.com<br></br>
                                <FontAwesomeIcon icon={faPhone} /> Phone : +8802224441833<br></br>
                            </p>
                        </Col>


                        <Col lg="3" md={6} sm={12} className="p-5 text-justify">
                            <h2 className="footerName ">Information </h2>
                            <Link className="footerLink" to="/about">About Us </Link> <br></br>
                            <Link className="footerLink" to="#">Useful Link </Link> <br></br>
                            <Link className="footerLink" to="/contact">Contact Us  </Link> <br></br>
                        </Col>

                        <Col lg="3" md={6} sm={12} className="p-5 text-justify">
                            <h2 className="footerName ">Policy  </h2>
                            <Link className="footerLink" to="/refund">Refund Policy  </Link> <br></br>
                            <Link className="footerLink" to="/terms">Terms And Condition  </Link> <br></br>
                            <Link className="footerLink" to="/privacy">Privacy Policy </Link> <br></br>
                        </Col>
                    </Row>
                </Container>
                <Container fluid={true} className="text-center copyrightSection">
                    <Link className="copyrightlink" href="#">© Copyright 2022 by DIU Club Terminal, All Rights Reserved</Link>
                </Container>


            </Fragment>
        )
    }
}

export default Footer