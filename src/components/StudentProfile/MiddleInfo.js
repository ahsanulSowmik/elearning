import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Acitivityinformation from './Acitivityinformation';
import Assingment from './Assingment';
import Coursepogress from './Coursepogress';
import Skills from './Skills';
import StudentMiddleinfo from './StudentMiddleinfo';

const MiddleInfo = () => {
    return (
        <div>
        <Container>
        <Row>
        <Col xs={8} >
            <StudentMiddleinfo/>
            <Acitivityinformation />
        </Col>
        <Col xs={4}>
        <Coursepogress />
        <Assingment />
        <Skills />
        </Col>    
        </Row>    
        </Container>    
        </div>
    );
};

export default MiddleInfo;