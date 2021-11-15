import React, {useState, useContext} from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

const SubmitReviewModal = (props) => {
  const [rating, setRating] = useState(1);
  const [reccommend, setReccomend] = useState(false);
  const [characteristcs, setCharacteristics] = useState([]);
  const [reviewSummary, setReviewSummary] = useState('');
  const [reviewBody, setReviewBody] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

  }

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-moda-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          Write Your Review
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          Do You Reccomend this Product?
          <Form.Check
            inline
            label='Yes'
            type='radio'
            name='reccomend'
          />
          <Form.Check
            inline
            label='No'
            type='radio'
            name='reccomend'
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={props.onHide}>Close</Button>
        <Button variant='primary' onClick={props.onHide}>Submit</Button>
      </Modal.Footer>
    </Modal>

  )
}

export default SubmitReviewModal