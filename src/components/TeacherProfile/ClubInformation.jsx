import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ClubInformation = () => {
  return (
    
      <Card className="cardbodydesign">
        <Card.Header as="h5">Student Information</Card.Header>
        <Card.Body >
          <Card.Text>Student ID : 191-35-2718</Card.Text>
          <Card.Text>AcitveStatus : Active</Card.Text>
          <Card.Text>Name : Farhana Ferdose</Card.Text>
          <Card.Text>Location : Dhanmondi</Card.Text>

          <Card.Title>Contact Information</Card.Title>
          <Card.Text>
            Phone : +01878 -9889 <br />
            Email : trisha@gmail.com
          </Card.Text>

          <Button variant="primary" className="mt-3">
            Update Profile
          </Button>
        </Card.Body>
      </Card>
    
  );
};

export default ClubInformation;