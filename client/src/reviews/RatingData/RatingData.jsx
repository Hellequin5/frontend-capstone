import React, {useContext, useState} from 'react';
import Product_Id_Context from '../../context.jsx';
import Stars from './StarRating.jsx';
import StarBreakdown from './StarBreakdown.jsx';
import CharacteristicBreakdown from './CharacteristicBreakdown.jsx'

const RatingData = (props) => {
  return (
    <div>
      <Stars ratings={props.data.ratings}/>
      <StarBreakdown
        ratings={props.data.ratings}
        recommended={props.data.recommended}
      />
      <CharacteristicBreakdown characteristics={props.data.characteristics}/>
    </div>
  )
}

export default RatingData;