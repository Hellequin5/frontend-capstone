import React from 'react';

const ReviewResponse = (props) => {
  if (props.response && props.response !== '') {
    return (
      <div style={{background: 'lightgrey'}} class='my-4'>
        <b>Response from the Seller</b>
        <div>{props.response}</div>
      </div>
    )
  }
  return null;
}

export default ReviewResponse;