import React, { Component ,Fragment} from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import projectDetails from '../../assest/image/pdetails1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons'

export class ClubDetails extends Component {
  render() {
    return (
        <Fragment>
        
        <Container className="mt-5">
             <Row>
                
<Col lg={6} md={6} sm={12}>
<div className="clubImage">
<img src={projectDetails} alt = "" />
</div>
</Col>


<Col lg={6} md={6} sm={12} className="mt-5">
<div className="project-details">
  <h1 className="projectDetailsText">DIU Computer & Programming Club</h1>  
  <p className="detailsName">DIU CPC is the most primitive and extensive club as well as the 
  biggest club in Daffodil International University. We work together
   to explore every field of Computer Science. 
 Our honorable Department Head Professor Dr. Touhid Bhuiyan Sir is the chief supervisor of the club.<br></br><br></br>
 The working activities of CPC can be divided into four wings,</p>

  <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Research & Journal </p>

  <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> ACM Task Force</p>

  <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Development</p>

  <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Job, Career & Industry Collaboration</p>

  {/* <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Ligula cur maecenasLigula cur maecenasLigula cur maecenas </p>

  <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Ligula cur maecenasLigula cur maecenas</p> */}



</div>

</Col>


             </Row>
        </Container>
   </Fragment>
    )
  }
}

export default ClubDetails