import React, { useRef, useState } from "react";
import '../../assest/css/custom.css';
import '../../assest/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Courses = () => {
  
  const [files, setFiles] = useState(null);
  const inputRef = useRef();
  const handledragover = (e) => {
    e.preventDefault();
  };
  const handledrop = (e) => {
    e.preventDefault();
    setFiles(e.dataTransfer.files);
  };
  if (files)
    return (
      <div className="uploads" >
        <ul>
          {Array.from(files).map((file, idx) => (
            <li key={idx}>{file.name}</li>
          ))}
        </ul>
      </div>
    );
  return (
    <div>
      <div>
        <h3 className="coursetitel ">Please complete the all necessary information</h3>
        <Form className="formdesign">
      <Row >
        <Col>
        <Form.Text id="CourseText" muted>
        Write about your course     
   </Form.Text>
          <Form.Control placeholder="Write about your course" type="text" />
        
        </Col>

        <Col>
        <Form.Text id="CourseText" muted>
        Write your course price  
   </Form.Text>
          <Form.Control placeholder="Write your course price "  type="text" />
          
        </Col>
      </Row>
    </Form>

      </div>
    
    <div className='course'>
      {!files && (
        <div
          onDragOver={handledragover}
          onDrop={handledrop}
          className="dropzones"
        >
          <h4 className="dragText">Drag and Drop Files to Upload</h4>
         
          <h4 className="dragText">Or</h4>
          <input
            type="file"
            multiple
            onChange={(e) => setFiles(e.target.files)}
            hidden
            ref={inputRef}
          />
          <button
            onClick={() => inputRef.current.click()}
            className="dragbutton"
          >
            Select Files
          </button>
        </div>
      )}
    </div>
    <div>
      <h6 className="textdesign">
        something
      </h6>
      <button type="Submit">
        Upload
      </button>
    </div>
    </div>
  );
  
};

export default Courses;