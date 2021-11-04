import React from 'react'
import IndividualStarBreakdown from './IndividualStarBreakdown.jsx'


const StarBreakdown = (props) => {
  var individualRatingArr = [];

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
      individualRatingArr[key - 1]= (Number(ratings[key]))
    }
    total = individualRatingArr.reduce((a, b) => a + b, 0)
  }

  console.log(individualRatingArr);
  return (
    <div>
      Star Breakdown
      <div>{recommendPercent(props.recommended)}% of reviews recommend this product</div>
      {individualRatingArr.map((value, index) => {
        return (
          <IndividualStarBreakdown
            key={index}
            value={value}
            total={total}
          />
        )
      })}

    </div>
  )
}

export default StarBreakdown;