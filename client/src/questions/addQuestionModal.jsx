import React, {useContext, useState}  from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Product_Id_Context from '../context.jsx';

const AddQuestionModal = (props) => {
  const product_id = useContext(Product_Id_Context);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  var addQuestionRequest = function(body, name, email, product_id, callback) {

    var debug = `addQuestion called with ${body} ${name} ${email} ${product_id}`
    console.log(debug)
    var config = {}

    /*
    var endpoint = `http://localhost:10038/get_item_questions/${pid}${page}${count}`;
    config = {
      method:'get',
      url:`http://localhost:10038/get_item_questions/${pid}${page}${count}`

      // params: {product_id: id}
    };
    //console.log('endpoint is', endpoint);

    axios(config)
      .then((resolveQuestions) => {
        //console.log('Questions are: ', resolveQuestions.data)
        //questions = resolveQuestions.data;
        var moreQuestions = false;
        resolveQuestions.data.forEach((question) => {
          if(!questions.includes(question)) {
            questionsFilter(questions = questions.concat(resolveQuestions.data));
            moreQuestions = true;
          }
          if (!actual_questions.includes(question)) {
            setActualQuestions(actual_questions = actual_questions.concat(resolveQuestions.data));
            moreQuestions = true;
          }
        })

        console.log('after', debug, 'questions is', actual_questions)
        callback(moreQuestions);
      })
      .catch((err) => {
        console.error(err);
        callback(undefined);
      })
      */
      handleClose();
  }

  return (
    <div>


      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Question!</Modal.Title>
        </Modal.Header>
        <Modal.Body>


        Body Components

        <InputGroup id='question_body'>
          <InputGroup.Text>Question</InputGroup.Text>
          <FormControl as="textarea" aria-label="With textarea"  />
        </InputGroup>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addQuestionRequest}>
            Submit Question
          </Button>
        </Modal.Footer>
      </Modal>


    </div>
  )
}

export default AddQuestionModal;
