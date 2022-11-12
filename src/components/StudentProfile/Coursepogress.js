import React from "react";
import Card from "react-bootstrap/Card";
import { PieChart, Pie,  Tooltip } from "recharts";

const Coursepogress = () => {
  const data02 = [
    { name: "Course A", value: 30 },
    { name: "Course B", value: 20 },
    { name: "Course C", value: 50 },

  ];
  return (
   
      <Card className="courseProgress">
      <Card.Title className="coursepogressdesign">Course Pogress</Card.Title>

        <Card.Body>
         
          <div className="piedivcontainer">
          <PieChart width={170} height={180}>
            <Pie
              dataKey="value"
              data={data02}
              cx={80}
              cy={80}
              innerRadius={40}
              outerRadius={80}
              fill="#82ca9d"
            />
            <Tooltip />
          </PieChart>
          </div>
        </Card.Body>
      </Card>
   
  );
};

export default Coursepogress;