import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container'

const ImageModal = (props) => {
  return (
  <Modal
    {...props}
    size='lg'
    scrollable={true}
    aria-labelledby='contained-moda-title-vcenter'
    centered
  >
    <Modal.Header closeButton>

    </Modal.Header>
    <Modal.Body>
      <Container>
      <img src={props.url}/>

      </Container>
    </Modal.Body>
  </Modal>
  )
}
export default ImageModal;