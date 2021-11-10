import React, {useContext} from 'react';
import Product_Id_Context from '../../context.jsx';
import ReviewStarRating from './ReviewStarRating.jsx';
import NameTime from './NameTime.jsx';
import ReviewBody from './ReviewBody.jsx'

const ReviewTile = (props) => {
  console.log(props);

  if (props.data) {
    return (
      <div>
        ____________________________________________________________________________________________
        <ReviewStarRating rating= {props.data.rating} />
        <NameTime name={props.data.reviewer_name} time={props.data.date}/>
        <h6>{props.data.summary}</h6>
        <ReviewBody text={props.data.body}/>
        {}
        <div>Helpful? Yes ({props.data.helpfulness})</div>
        <div>Report</div>
      </div>
    )
  }
  return (
    <div></div>
  )
}

export default ReviewTile