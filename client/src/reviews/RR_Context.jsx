import React from 'react';

const RR_Context = React.createContext([{
  characteristics: {
    Comfort: {id: 0, value: ''},
    Fit: {id: 0, value: ''},
    Length: {id: 0, value: ''},
    Quality: {id: 0, value: ''}
  },
  product_id: '',
  ratings: {
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
  },
  recommended: {
    false: '',
    true: ''
  }
},{
  count: 0,
  page: 0,
  product: '',
  results: [{
    body: '',
    data: '',
    helpfulness: 0,
    photos: [],
    rating: 0,
    recommend: true,
    response: '',
    review_id: 0,
    reviewer_name: '',
    summary: ''
  }]
}])

RR_Context.displayName = 'Ratings and Reviews Context';

export default RR_Context;