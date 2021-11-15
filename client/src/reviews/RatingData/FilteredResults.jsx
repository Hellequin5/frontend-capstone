import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const FilteredResults = (props) => {
  return (
    <Container fluid className='my-3'>
      {props.reviewFilter[1] ? <Row style={{background: 'LightSlateGray', justifyContent: 'center'}}>Showing 1 star Reviews</Row>:null}
      {props.reviewFilter[2] ? <Row style={{background: 'LightSlateGray', justifyContent: 'center'}}>Showing 2 star Reviews</Row>:null}
      {props.reviewFilter[3] ? <Row style={{background: 'LightSlateGray', justifyContent: 'center'}}>Showing 3 star Reviews</Row>:null}
      {props.reviewFilter[4] ? <Row style={{background: 'LightSlateGray', justifyContent: 'center'}}>Showing 4 star Reviews</Row>:null}
      {props.reviewFilter[5] ? <Row style={{background: 'LightSlateGray', justifyContent: 'center'}}>Showing 5 star Reviews</Row>:null}
    </Container>
  )
}
export default FilteredResults;