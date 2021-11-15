import React, {useState, useContext} from 'react';
import RR_Context from '../RR_Context.jsx';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CharacteristicBreakdown = (props) => {
  // console.log(props.characteristics.Comfort);
  return (
    <div>
      <Container fluid>
        <Row>
          Size
        </Row>
        <Row>
          <ProgressBar
            min={1}
            max={5}
            now={props.characteristics.Size ? props.characteristics.Size.value : 0}
          />
        </Row>
        <Row>
          <Col xs={4}>too small</Col>
          <Col xs={4}>perfect</Col>
          <Col xs={4}>too big</Col>
        </Row>
        <Row>
          Comfort
        </Row>
        <Row>
          <ProgressBar
            min={1}
            max={5}
            now={props.characteristics.Comfort ? props.characteristics.Comfort.value : 0}
          />
        </Row>
        <Row>
          <Col xs={4}>too small</Col>
          <Col xs={{span:4, offset:4}}>too big</Col>
        </Row>
      </Container>
    </div>
  )
}

export default CharacteristicBreakdown;