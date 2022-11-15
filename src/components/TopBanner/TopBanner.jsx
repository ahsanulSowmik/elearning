import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class TopBanner extends Component {
    render() {
        return (
            <Fragment>
              <Container fluid={true} className="topFixedBanner p-0">
            
                  <div className="topBannerOverlay"> 

                      <Container className="topContent">
                          <Row>
                              <Col className="text-center">
                                 <h1 className="topTitle">DIU Club Terminal</h1>
                                 <p className="topSubtitle">Providing opportunities for students to perform extra-curricular activities,<br></br> 
                                 which help them to exercise their talents beyond classroom boundary <br></br>
                                 and develop leadership and collaboration skills.</p>
                                 <Link to='/about'>
                                 <Button variant="primary">Learn More</Button></Link>
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
