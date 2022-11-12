import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function RegMiddlePopup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Registration
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Who are you?</Modal.Title>
        </Modal.Header>
        <Modal.Body className='regTitle'>Select a option for your Registration!<br></br>
        
        
        <Link to='/registration'>
            <Button variant="primary" className='student_btn'>
            Student
          </Button>
            </Link>

            <Link to='/registration'>
            <Button variant="primary" className='student_btn'>
            Club Authority
          </Button>
            </Link>

            </Modal.Body>
            
        {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          
        
      </Modal>
    </>
  );
}

export default RegMiddlePopup;