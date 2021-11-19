import React, {useContext, useState, useEffect} from 'react';
import Product_Id_Context from '../../context.jsx';
import ReviewStarRating from './ReviewStarRating.jsx';
import NameTime from './NameTime.jsx';
import ReviewBody from './ReviewBody.jsx';
import ReviewPhoto from './ReviewPhoto.jsx'
import ReviewResponse from './ReviewResponse.jsx';
import WasHelpful from './WasHelpful.jsx';
import ReportReview from './ReportReview.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

const ReviewTile = (props) => {
  const [reported, setReported] = useState(false);
  const [wasHelpful, setWasHelpful] = useState(false);
  let [amountHelpful, setAmountHelpful] = useState(0)
  const handleHelpfulReport = (event) => {
    var config = {
      method: 'put',
      url:'http://localhost:3000/reviews',
      params: {
        review_id: props.data.review_id,
        type: event
      }
    }
    axios(config)
      .then((response) => {
        if (event === 'helpful') {
          setAmountHelpful(amountHelpful + 1);
          setWasHelpful(true);
        } else {
          setReported(true);
        }
      })
      .catch((err) => {
        console.error('unable to update helpful/report', err)
      })
  }
  const filterConditional = (Object.values(props.reviewFilter)).includes(true);
  const filterIncluded = props.data ? props.reviewFilter[props.data.rating]: true;

  useEffect(() => {
    if (props.data) {
      setAmountHelpful(amountHelpful + props.data.helpfulness)
    }
  }, [])
  if (props.data && (!filterConditional || (filterConditional && filterIncluded))) {
    return (
      <div style={{borderBottom: '1px solid black'}} class='my-3'>
        <Container fluid style={{paddingLeft:'0'}}>
          <Row className='my-4'>
            <Col>
              <ReviewStarRating rating= {props.data.rating} />
            </Col>
            <Col>
              <NameTime name={props.data.reviewer_name} time={props.data.date}/>
            </Col>
          </Row>
          <Row className='my-4'>
            <b>{props.data.summary}</b>
          </Row>
          <Row>
            <ReviewBody text={props.data.body}/>
          </Row>
          {props.data.recommend ?
            <Row className='my-4'>
              {<h6><span>&#10003;</span> This user recommended this product</h6>}
            </Row> : null
          }
          {props.data.response === null || props.data.response === '' ? null:
            <Row className='my-4'>
              <ReviewResponse response={props.data.response}/>
            </Row>
          }
          {props.data.photos.length >= 1 ?
            <Row className='my-4'>
              {props.data.photos.map ((value) => {
                return <Col>
                <ReviewPhoto
                key={value.id}
                url={value.url}
                /></Col>
              })}
            </Row>
          : null}
          <Row className='my-4' xs='auto'>
            <Col>
            <WasHelpful
              wasHelpful={wasHelpful}
              setWasHelpful={setWasHelpful}
              handleHelpfulReport={handleHelpfulReport}
              amountHelpful={amountHelpful}
              setAmountHelpful={setAmountHelpful}
            />
            </Col>
            <Col><div> | </div></Col>
            <Col>
            <ReportReview
              reported={reported}
              handleHelpfulReport={handleHelpfulReport}
            />
            </Col>
          </Row>

        </Container>
      </div>
    )
  }
  return (
    null
  )
}

export default ReviewTile