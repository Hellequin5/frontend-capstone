import React from 'react';
import IndividualStarBreakdown from './IndividualStarBreakdown.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const StarBreakdown = (props) => {
  let mapArr = [];
  let totalArr = [];

  var recommendPercent = (obj) => {
    if (obj) {
      var total = Number(obj.true) + Number(obj.false);
      return (Math.round((100 * obj.true) / total))
    }
    return 0;
  }

  var ratings = props.ratings;
  var total = 0;
  if (ratings) {
    for (var key in ratings) {
      totalArr[key - 1]= (Number(ratings[key]))
    }
  }
  total = totalArr.reduce((a, b) => a + b, 0)
  for (var i = 5; i >= 1; i--) {
    let amountOfCurrent = props.ratings[i] ? Number(props.ratings[i]) : 0;
    const percent = Math.round((amountOfCurrent * 100) / total);
    mapArr.push([amountOfCurrent, percent, i]);
  };

  // console.log(individualRatingArr);
  return (
    <div>
      <Container fluid className='px-0 pb-3'>
        <Row xs='auto'>
          <div>{recommendPercent(props.recommended)}% of reviews recommend this product</div>
        </Row>
      </Container>
      {mapArr.map((value, index) => {
        return (
          <IndividualStarBreakdown
          key={index}
          total={value[0]}
          percent={value[1]}
          rating={value[2]}
          reviewFilter={props.reviewFilter}
          setReviewFilter={props.setReviewFilter}
          />
        )
      })}
    </div>
  )
}

export default StarBreakdown;