import React from 'react';

const ReviewResponse = (props) => {
  if (props.response && props.response !== '') {
    return (
      <div class='RR_Response'>
        <b>Response from the Seller</b>
        <div>{props.response}</div>
      </div>
    )
  }
  return null;
}

export default ReviewResponse;