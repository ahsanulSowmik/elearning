import React, { Component, Fragment } from 'react'
import { Col, Container, Modal, Row, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons'
import 'video-react/dist/video-react.css'
import { Player, BigPlayButton } from 'video-react'

export class Vedios extends Component {

    constructor() {
        super();
        this.state = {
            show: false
        }
    }

    modalClose = () => this.setState({ show: false })
    modalOpen = () => this.setState({ show: true })


    render() {
        return (
            <Fragment>
                <Container className="text-center ">
                    <h1 className="serviceMainTitle">OUR VEDIOS</h1>
                    <div className="bottom"></div>
                    <Row>
                        <Col lg={6} md={6} sm={12} className="videoText">
                            <p className="serviceDiscription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore sed recusandae aliquid tempore, sunt reiciendis facilis est mollitia veniam deserunt placeat nesciunt sit tenetur delectus optio quidem distinctio ea eveniet ad perspiciatis minus? Officia, unde praesentium? Rem, repellat non mollitia aut exercitationem nihil quam amet, reprehenderit inventore, dolores excepturi. Dolores, nam a consectetur adipisci cupiditate ex maiores itaque aperiam ratione numquam asperiores nulla. Modi atque quam, quia saepe neque corporis facilis facere nihil ipsa rem laborum perspiciatis eveniet magni quasi in nostrum dolorum eos libero est fugiat totam rerum sed, quo accusamus. Inventore libero similique voluptatum, asperiores animi nam perferendis.</p>
                        </Col>


                        {/* <Col lg={6} md={6} sm={12} className="vedioCard">
                            <FontAwesomeIcon icon={faVideoSlash} className="iconProject" />
                        </Col> */}

                        <Col lg={6} md={6} sm={12} className="videoCard">
                            <FontAwesomeIcon onClick={this.modalOpen} className="iconProject" icon={faVideoSlash} />
                        </Col>
                    </Row>
                </Container>

                <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
                    <Modal.Body>

                        <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                            <BigPlayButton position="center" />
                        </Player>

                    </Modal.Body>
                </Modal>
            </Fragment>

        )
    }
}

export default Vedios
