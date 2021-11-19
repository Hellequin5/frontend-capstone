import React, {useContext, useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const ButternutNavbar = (props) => {
  const [input, setInput] = useState('');
  const onInput = ({target: {value}}) => setInput(value)
  const onFormSubmit = (event) => {
    event.preventDefault();
    props.singleItemRequest(input);
    setInput();
  }
  // const product_id = useContext(Product_Id_Context);


  return (
    <Navbar bg='secondary' className='mb-3'>
      <Container>
        <Navbar.Brand>
          {/* <img
            alt=''
            src='./logoImage/butternutLogo.png'
            width='10px'
            height='auto'
            /> */}
            Butternut Catwalk
        </Navbar.Brand>
        <Form className='d-flex' onSubmit={onFormSubmit}>
          <FormControl
            type='text'
            onChange={onInput}
            value={input}
            placeholder='Search'
            aria-Label='Search'
          />
          <Button variant='outline-dark'>Search</Button>

        </Form>
      </Container>
    </Navbar>
  )
}

export default ButternutNavbar