import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

const Skills = () => {
  const [subject, setsubject] = useState([]);
  useEffect(() => {
    fetch("./subject.json")
      .then((Res) => Res.json())
      .then((data) => setsubject(data));
  }, []);
  return (
    <Card style={{ width: "18rem", marginTop: "20px" }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>

        {subject.map((sub) => (
          <Badge bg="light" text="dark" key={sub._id} style={{marginLeft:'10px'}}>
            {sub.name}
          </Badge>
        ))}
      </Card.Body>
    </Card>
  );
};

export default Skills;