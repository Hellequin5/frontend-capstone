import React, {useContext, useState}  from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Product_Id_Context from '../context.jsx';
import axios from 'axios';

const AddQuestionModal = (props) => {
  const product_id = useContext(Product_Id_Context);

  const [show, setShow] = useState(false);
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [product_name, setProductName] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var handleBodyChange = function(e) {
    setBody(e.target.value);
    getProductName(product_id);
  }

  var handleNameChange = function(e) {
    setName(e.target.value);
  }

  var handleEmailChange = function(e) {
    setEmail(e.target.value);
  }

  var getProductName= function(pid) {
    if (pid === undefined) {
      pid = product_id;
    }
    pid = `?pid=${pid}`;

    var debug = `getProductName called with ${pid}`
    console.log(debug)
    var config = {}

    var endpoint = `http://localhost:10038/get_item_name/${pid}`;
    config = {
      method:'get',
      url:`http://localhost:10038/get_item_name/${pid}`
    };
    //console.log('endpoint is', endpoint);

    axios(config)
      .then((resolveName) => {
        var productName = resolveName.data;
        setProductName(productName);
        console.log('after', debug, 'name is', productName)

      })
      .catch((err) => {
        console.error(err);
        //callback(undefined); //??
      })
  }



  var addQuestionRequest = function(callback) {
    var debug = `addQuestion called with ${body} ${name} ${email} ${product_id}`
    console.log(debug)
    var config = {}


    var endpoint = `http://localhost:10038/add_question`;
    config = {
      method:'post',
      url:`http://localhost:10038/add_question`,
      params: {
        product_id: product_id,
        body: body,
        name: name,
        email: email
      }
    };
    //TODO: do something with response
    axios(config)
      .then((resolveQuestionAdd) => {
        console.log('Response is: ', resolveQuestionAdd.data)
      })
      .catch((err) => {
        console.error(err);
       // callback(undefined);
      })

      handleClose();
  }

  return (
    <div>


      <Button variant="light" onClick={handleShow}>
        ADD A QUESTION +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Question!</Modal.Title>
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
          <InputGroup.Text>Question</InputGroup.Text>
          <FormControl as="textarea" aria-label="With textarea" onChange={handleBodyChange}  />
        </InputGroup>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={addQuestionRequest}>
            Submit Question
          </Button>
        </Modal.Footer>
      </Modal>


    </div>
  )
}

export default AddQuestionModal;
