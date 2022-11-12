import React from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/esm/Image';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
 import Academic from '../StudentProfile/Academic';
import ClubInformation from './ClubInformation';
import UploadCourse from './UploadCourse';



const TeacherNavs = () => {
    return (
        
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col  sm={3}>
          <Nav variant="pills" style={{ width: "200px" ,marginLeft:'50px' ,marginTop:'5px'}} className="flex-column">
          <Nav.Item>
          <Image
          style={{ width: "100px" ,marginTop:'20px' ,marginLeft:'20px',marginBottom:'20px'}}
          className='image_container'
          src="https://www.shareicon.net/data/512x512/2016/05/24/770139_man_512x512.png"
          rounded
          ></Image>
          </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="first">Student Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Course</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="academic">Academic</Nav.Link>
            </Nav.Item>
            
           <Nav.Item>
            <Nav.Link eventKey="logout">Log Out</Nav.Link>
           </Nav.Item>
         
          </Nav>
        </Col>
        <Col  sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
        
            <ClubInformation />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <UploadCourse />
            </Tab.Pane>
            <Tab.Pane eventKey="academic">
              <Academic/>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    );
};

export default TeacherNavs;