import React, {useState} from 'react';

const ReviewBody = (props) => {
  const [showMore, setShowMore] = useState(false);
  if(props.text && props.text.length > 250){
    return (
      <div>
        {showMore ? props.text: `${props.text.substring(0, 250)}...`}
        <a onClick={() => setShowMore(!showMore)}>{showMore ? null : `Show More`}</a>
      </div>
    )
  }
  return (
    <div>
      {props.text}
    </div>
  );
}

export default ReviewBody;