import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export class Courses extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">OUR COURSES</h1>
                    <div className="bottom"></div>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12} className="p-2" >
                                    <img className="courseImg" src="https://image.freepik.com/free-photo/learner-lesson_1098-14155.jpg" alt="" />
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="serviceName">English for Communication</h5>
                                    <p className="text-justify serviceDiscription">English language learning will allow you to communicate effectively with people from all over the world..
                                    Enroll this course for your better communication.</p>
                                    <Link className="courseViewMore float-left" to="/coursedetails" >View Details</Link>

                                </Col>

                                <Col lg={6} md={6} sm={12} className="p-2" >
                                    <img className="courseImg" src="https://image.freepik.com/free-photo/coach-by-whiteboard_1098-12970.jpg" alt="" />
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="serviceName">Laravel 8</h5>
                                    <p className="text-justify serviceDiscription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quam natus blanditiis assumenda praesentium, exercitationem cum necessitatibus laborum delectus similique.</p>
                                    <Link className="courseViewMore float-left" to="/coursedetails" >View Details</Link>


                                </Col>

                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12} className="p-2" >
                                    <img className="courseImg" src="https://image.freepik.com/free-photo/shocked-male-student-poses-desktop-home-office-uses-laptop-computer-searching-online-education-course-browses-distance-learning-website_273609-34548.jpg" alt="" />
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="serviceName">Laravel 8</h5>
                                    <p className="text-justify serviceDiscription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quam natus blanditiis assumenda praesentium, exercitationem cum necessitatibus laborum delectus similique.</p>
                                    <Link className="courseViewMore float-left" to="/coursedetails" >View Details</Link>

                                </Col>

                                <Col lg={6} md={6} sm={12} className="p-2" >
                                    <img className="courseImg" src="https://image.freepik.com/free-photo/training-managers_1098-16067.jpg" alt="" />
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="serviceName">Laravel 8</h5>
                                    <p className="text-justify serviceDiscription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quam natus blanditiis assumenda praesentium, exercitationem cum necessitatibus laborum delectus similique.</p>
                                    <Link className="courseViewMore float-left" to="/coursedetails" >View Details</Link>


                                </Col>
                                
                            </Row>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Courses
