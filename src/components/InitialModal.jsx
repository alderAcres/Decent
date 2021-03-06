/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
// eslint rules above disabled so we can import the props to the initial modal correctly
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const InitialModal = (props) => (
  <div>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Welcome to SpaceHash
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Enter in your wishes, hopes, and dreams to be immortalized in the stars
          forever.
          <br />
          <br />
          We will hash them away into the bitverse, keeping them secret and protected.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  </div>
);

export default InitialModal;
