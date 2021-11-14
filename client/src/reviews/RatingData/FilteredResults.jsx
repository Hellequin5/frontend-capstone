import React from 'react';

const FilteredResults = (props) => {
  return (
    <div>
      {props.reviewFilter[1] ? 'Showing 1 star Reviews':null}
      {props.reviewFilter[2] ? 'Showing 2 star Reviews':null}
      {props.reviewFilter[3] ? 'Showing 3 star Reviews':null}
      {props.reviewFilter[4] ? 'Showing 4 star Reviews':null}
      {props.reviewFilter[5] ? 'Showing 5 star Reviews':null}

    </div>
  )
}
export default FilteredResults;