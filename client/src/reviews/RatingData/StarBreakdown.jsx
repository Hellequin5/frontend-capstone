import React from 'react'

const StarBreakdown = (props) => {
  var recommendPercent = (obj) => {
    if (obj) {
      var total = Number(obj.true) + Number(obj.false);
      return (Math.round((100 * obj.true) / total))
    }
    return 0;
  }

  return (
    <div>
      Star Breakdown
      <div>{recommendPercent(props.recommended)}% of reviews recommend this product</div>
    </div>
  )
}

export default StarBreakdown;