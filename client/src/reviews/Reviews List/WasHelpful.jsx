import React from 'react';

const WasHelpful = (props) => {
  if (props.wasHelpful) {
    return (
      <div>
        Thank you for your Feedback! {props.amountHelpful} Helpful Review(s)!
      </div>
    )
  } else {
    return(
    <div>
      Helpful <a
                style={{textDecoration: 'underline'}}
                value='helpful'
                onClick={() => props.handleHelpfulReport('helpful')}
             >Yes</a>? <a
                style={{textDecoration: 'underline'}}
                value='helpful'
                onClick={() => {props.setWasHelpful(true); props.setAmountHelpful(props.amountHelpful - 1)}}
              >No</a>? ({props.amountHelpful})
    </div>

    )
  }
}

export default WasHelpful;