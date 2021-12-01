import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import face from '../../assest/image/face.png'
// import { init } from 'ityped'
class AboutMe extends Component {




    render() {

        //         const oneElement = document.querySelector('#one')
        //   const otherElement = document.querySelector('#other')

        //   init(oneElement, { showCursor: false, strings: ['Nice', 'One' ] });
        //   init(otherElement, { disableBackTyping: true, strings: ['iTyped is', 'Awesome'] });
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">ABOUT ME</h1>
                    <div className="bottom"></div>
                    <Row>


                        <Col lg={6} md={6} sm={12}>
                            <div className="aboutMeImage">
                                <img className="aboutImg" src={face} />
                            </div>
                        </Col>





                        <Col lg={6} md={6} sm={12}>
                            <div className="aboutMeBody">
                                <h2>Hi there, I'm</h2>
                                <h2>Mohammad Ahsanul Islam Sowmik</h2>
                                <h3>Work as <span>Developer</span></h3>
                            </div>

                        </Col>

                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default AboutMe