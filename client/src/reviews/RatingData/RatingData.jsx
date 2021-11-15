import React, {useContext, useState} from 'react';
import Product_Id_Context from '../../context.jsx';
import Stars from './StarRating.jsx';
import StarBreakdown from './StarBreakdown.jsx';
import CharacteristicBreakdown from './CharacteristicBreakdown.jsx';
import FilteredResults from './FilteredResults.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const RatingData = (props) => {
  console.log(props)
  return (
    <div>
      <Container fluid className='px-0'>
       <Stars ratings={props.data.ratings}/>
        <StarBreakdown
          ratings={props.data.ratings}
          recommended={props.data.recommended}
          reviewFilter={props.reviewFilter}
          setReviewFilter={props.setReviewFilter}
        />
        <FilteredResults reviewFilter={props.reviewFilter}/>
        {/* <CharacteristicBreakdown characteristics={props.data.characteristics}/> */}

      </Container>
    </div>
  )
}

export default RatingData;