import React, {useContext} from 'react';
import Product_Id_Context from '../../context.jsx';
import ReviewStarRating from './ReviewStarRating.jsx';
import NameTime from './NameTime.jsx';

const ReviewTile = (props) => {
  console.log(props);
  return (
    <div>
      Review Tile Component
      <ReviewStarRating rating= {props.data.rating} />
      <NameTime name={props.data.reviewer_name} time={props.data.date}/>
      <div>{props.data.summary}</div>
      <div>{props.data.body}</div>
    </div>
  )
}

export default ReviewTile