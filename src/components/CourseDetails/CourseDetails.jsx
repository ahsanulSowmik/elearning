import React, { Component, Fragment } from 'react'
import { Col, Container, Row,Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faClock} from '@fortawesome/free-solid-svg-icons'
import {faClipboard} from '@fortawesome/free-solid-svg-icons'
import {faClone} from '@fortawesome/free-solid-svg-icons'
import {faTags} from '@fortawesome/free-solid-svg-icons'
import 'video-react/dist/video-react.css'
import { Player, BigPlayButton } from 'video-react'



 class CourseDetails extends Component {
     render() {
          return (
             <Fragment>
                   <Container className="mt-5">
                       <Row>
                            <Col lg={8} md={6} sm={12}>
                            <h1 className="coruseDetailsText"> English for Communication </h1>
    <img className="courseDetailsImg" src="https://solverwp.com/demo/html/edumint/assets/img/course/9.png" alt="" />
    <br></br> <br></br>
    <p className="CoruseAllDescription">
    English is spoken by around 360 million people around the world and taught in over 118 countries,
     making it an incredibly useful language to learn. English language learning will allow you to 
     communicate effectively with people from all over the world, 
    making travelling a lot easier and helping you to learn more about different cultures.<br></br><br></br>
    The importance of English language can be seen in almost every aspect of our lives. 
    This is especially true in the business world where English is the most common language used and 
    most employers will therefore expect a certain level of English proficiency during the hiring process. 
    Investing in a quality English language course will enhance your employment prospects significantly.

    </p>
                            </Col>

                            <Col lg={4} md={6} sm={12}>
                            <div class="widget_feature">
<h4 className="widget-title text-center">Course Features</h4>
<hr />
<ul>
<li><FontAwesomeIcon className="iconBullent" icon={faUser} /> <span> Enrolled :</span> 600 students</li>

<li><FontAwesomeIcon className="iconBullent" icon={faClock} /> <span>Duration :</span> 2 hours</li>

<li><FontAwesomeIcon className="iconBullent" icon={faClipboard} /> <span>Lectures :</span> 8</li>

<li><FontAwesomeIcon className="iconBullent" icon={faClone} /> <span>Categories:</span> Language</li>

<li><FontAwesomeIcon className="iconBullent" icon={faTags} /> <span>Tags:</span> Language,Communication</li>

<li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> <span>Instructor:</span>Samia Ferdose</li>

</ul>
<div className="price-wrap text-center">
<h5>Price:<span>3000/-</span></h5>
<Button variant="warning">ENROLL COURSE</Button>

</div>
</div> 

                            </Col>
                       </Row>
                  </Container>


                  <br></br><br></br>
               <Container>
                    <Row>
                         <Col lg={6} md={6} sm={12}>

         <div className="widget_feature">
      <h1 className="coruseDetailsText"> Special Features:</h1>   
      <hr />
      <ul>
           <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Techniques of fluent speaking and formats of subject<br></br> wise writing will develop your both skills.</li>
           <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Learning by sharing will be a great experience for<br></br> you with our language club arrangements.</li>

           <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Participants will enjoy opportunities to join different<br></br> language related seminars, workshops etc.</li>


           </ul>           
             </div>
             </Col>


           <Col lg={6} md={6} sm={12}>

           <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
      <BigPlayButton position="center" />
    </Player>
                         </Col>

                    </Row>
               </Container>


             </Fragment>
          )
     }
}

export default CourseDetails