import React, {useContext} from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const IndividualStarBreakdown = (props) => {
  console.log('individual star rating props', props)
  if (props.percent === NaN) {
    props.percent = 0;
  }
 console.log('reviewFILTER', props.reviewFilter)

  return (
    <div onClick ={() => {
      props.setReviewFilter(props.rating)
    }}>
      <Row>
        <Col xs='3'>{props.rating === 1 ? '1 Star' : `${props.rating} Stars`}</Col>
        <Col className='px-0 pt-2'><ProgressBar variant='success' now={props.percent}/></Col>
        <Col xs='2'>({props.total})</Col>
      </Row>
    </div>
  )
}

export default IndividualStarBreakdown;