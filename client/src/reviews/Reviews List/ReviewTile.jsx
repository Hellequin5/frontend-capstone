import React, {useContext} from 'react';
import Product_Id_Context from '../../context.jsx';
import ReviewStarRating from './ReviewStarRating.jsx';
import NameTime from './NameTime.jsx';
import ReviewBody from './ReviewBody.jsx';
import axios from 'axios';

const ReviewTile = (props) => {
  console.log(props);

  const handleHelpfulReport = (event) => {
    console.log(props.data.review_id);
    var config = {
      method: 'put',
      url:'http://localhost:10038/reviews',
      params: {
        review_id: props.data.review_id,
        type: event
      }
    }

    axios(config)
      .then((response) => {
        if (config.type = 'helpful') {
          props.data.helpfullness ++;
        }
      })
      .catch((err) => {
        console.error('unable to update helpful/report', err)
      })
  }

  if (props.data) {
    return (
      <div>
        ____________________________________________________________________________________________
        <ReviewStarRating rating= {props.data.rating} />
        <NameTime name={props.data.reviewer_name} time={props.data.date}/>
        <h6>{props.data.summary}</h6>
        <ReviewBody text={props.data.body}/>
        {}
        <div>Helpful? <a value='helpful' onClick={() => handleHelpfulReport('helpful')}>Yes</a> ({props.data.helpfulness})</div>
        <a value ='report' onClick={() => handleHelpfulReport('report')}>Report</a>
      </div>
    )
  }
  return (
    <div></div>
  )
}

export default ReviewTile