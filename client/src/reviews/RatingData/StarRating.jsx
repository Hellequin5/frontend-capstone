import React from 'react';
import StarRatings from 'react-star-ratings';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Stars = (props) => {
  const average = (obj) => {
    //Potentially refactor to use array and reduce to account for possiblity of more ratings than five for reusability
    // console.log(obj)
    var total = 0;
    var numOfRatings = 0;
    if (obj) {
      for (var key in obj) {
        var num = Number(obj[key]);
        total += (key * num);
        numOfRatings += num;
      }
    }
    var average = total/numOfRatings;
    var rounded = Number((Math.round(average * 4) / 4).toFixed(2));
    // console.log(rounded);

    if (rounded) {
      return (rounded)
    } else {
      return 0;
    }
  }
  var averageRating = average(props.ratings);
  // console.log(averageRating)
  return(
    <div>
      <Container className='px-0'>
        <Col xs='auto'>
          <p style={{fontSize: 'xxx-large', fontWeigh:'bold'}}>{averageRating}</p>
        </Col>
        <Col xs='auto' className='my-2'>
          <StarRatings
            rating= {averageRating}
            starDimension='20px'
            starSpacing='3px'
          />
        </Col>
      </Container>
    </div>
  )
}

export default Stars;