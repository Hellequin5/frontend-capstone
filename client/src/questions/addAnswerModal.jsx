import React, {useContext, useState}  from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Product_Id_Context from '../context.jsx';
import axios from 'axios';
//import PORT from '../server/server.js';
const PORT = process.env.PORT || 10038;
var baseUrl = process.env.baseURL || "http://localhost:"+PORT;

const AddAnswerModal = (props) => {
  const question_id = props.question_id;
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var handleBodyChange = function(e) {
    setBody(e.target.value);
  }

  var handleNameChange = function(e) {
    setName(e.target.value);
  }

  var handleEmailChange = function(e) {
    setEmail(e.target.value);
  }

  var addAnswerRequest = function(callback) {
    //add promise to handle results
    var debug = `addAnswer called with ${body} ${name} ${email} ${question_id}`
    console.log(debug)
    var config = {}


    var endpoint = `${baseUrl}/add_answer`;
    config = {
      method:'post',
      url:`${baseUrl}/add_answer`,
      params: {
        qid: question_id,
        body: body,
        name: name,
        email: email
      }
    };
    //console.log('endpoint is', endpoint);

    axios(config)
      .then((resolveAnswerAdd) => {
        console.log('Response is: ', resolveAnswerAdd.data)
      })
      .catch((err) => {
        console.error(err);
      })

      handleClose();
  }

  return (
    <div>


      <a onClick={handleShow}>
        Add Answer
      </a>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add an Answer!</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <InputGroup className="qa-name">
          <InputGroup.Text id="name">
            Your Name
          </InputGroup.Text>
          <FormControl id="qa-name" aria-describedby="basic-addon3" onChange={handleNameChange} />
        </InputGroup>
        <br></br>
        <InputGroup className="qa-email">
          <InputGroup.Text id="email">
            Your Email
          </InputGroup.Text>
          <FormControl id="qa-email" aria-describedby="basic-addon3" onChange={handleEmailChange} />
        </InputGroup>
        <br></br>
        <InputGroup>
          <InputGroup.Text>Answer</InputGroup.Text>
          <FormControl as="textarea" aria-label="With textarea" onChange={handleBodyChange}  />
        </InputGroup>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
            Close
          </Button>
          <Button variant="second" onClick={addAnswerRequest}>
            Submit Answer
          </Button>
        </Modal.Footer>
      </Modal>


    </div>
  )
}

export default AddAnswerModal;
