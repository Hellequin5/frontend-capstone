import React, {useContext} from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const IndividualStarBreakdown = (props) => {
  var percent = Math.round((props.value * 100) / props.total)
  return(
    <div>
      {props.rating} stars <ProgressBar variant='success' now={percent} />
    </div>
  )
}

export default IndividualStarBreakdown;