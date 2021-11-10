import React, {useState} from 'react';

const ReviewBody = (props) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      {showMore ? props.text: `${props.text.substring(0, 60)}...`}
      <a onClick={() => setShowMore(!showMore)}>{showMore ? 'Show Less' : `Show More`}</a>
    </div>
  )
}

export default ReviewBody;