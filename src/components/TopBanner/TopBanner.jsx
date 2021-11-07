import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../assest/css/custom.css';
import '../../assest/css/bootstrap.min.css';
import { Button} from 'react-bootstrap';

export class TopBanner extends Component {
    render() {
        return (
            <Fragment>
              <Container fluid={true} className="topFixedBanner p=0">
                  <div className="topBannerOverlay">

                      <Container className="topContent">
                          <Row>
                              <Col className="text-center">
                                 <h1 className="topTitle">Easy Learning</h1>
                                 <h4 className="topSubtitle">Learn Profesionally</h4>
                                 <Button variant="primary">Learn More</Button>
                              </Col>
                          </Row>
                      </Container>

                  </div>
              </Container>
            </Fragment>
        )
    }
}

export default TopBanner
