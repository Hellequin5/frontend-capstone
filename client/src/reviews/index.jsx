import React, {useContext, useState, useEffect} from 'react';
import Product_Id_Context from '../context.jsx';
import ReviewList from './Reviews List/ReviewList.jsx';
import RatingData from './RatingData/RatingData.jsx';
import axios from 'axios';

const Reviews = (props) => {
  const product_id = useContext(Product_Id_Context);
  const [reviewData, setReviewData] = useState({});
  const [reviewMetaData, setReviewMetaData] =useState({});

  const retrieveReviewData = (product_id, page = null, count = null, sort = null) => {
    var metaConfig = {
      method:'get',
      //Talk about baseurl variable somewhere else for deployment
      url:'http://localhost:10038/productMetaData',
      params: {
        product_id: product_id
      }
    }
    var reviewConfig = {
      method:'get',
      url:'http://localhost:10038/productReviews/',
      params: {
        page: page,
        count: count,
        sort: sort,
        product_id: product_id
      }
    }

    axios(metaConfig)
      .then((response) => {
        setReviewMetaData(response.data);
        return axios(reviewConfig);
      })
      .then((secondResponse) => {
        setReviewData(secondResponse.data);
      })
      .catch((err) => {
        console.error('There was an error retriving some of the reviews Data', err);
      })
  }

  useEffect(() => {
    if (product_id) {
      retrieveReviewData(product_id);

    }
  }, [product_id])

  return (
    <div>

    Ratings & Reviews
    <RatingData data={reviewMetaData}/>
    <ReviewList data={reviewData}/>

    </div>
  )
}

export default Reviews;