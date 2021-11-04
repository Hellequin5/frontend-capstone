import React from 'react';
import Progress from 'react-progressbar';

const IndividualStarBreakdown = (props) => {
  console.log(props);
  var percent = Math.round((props.value * 100) / props.total)
  return(
    <div>
      <Progress completed={percent} />
    </div>
  )
}

export default IndividualStarBreakdown;