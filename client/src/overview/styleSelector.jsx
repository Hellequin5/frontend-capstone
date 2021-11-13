import React, {useContext, useState, useEffect}  from 'react';
import Product_Id_Context from '../context.jsx';
import OV_Context from './OV_Context.jsx'
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageGallery from 'react-image-gallery';
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";




const StyleSelector = (props) => {
  const {productStylesInfo, setProductStylesInfo} = useContext(OV_Context)

  const thumbnailClick = (style) => {
    let arrayOfSkus = Object.entries(style.skus).map(key => ({ ...key[1]}));
    let selectedStyleCarousel = style.photos.map(photo => ({
      original: photo.url,
      thumbnail: photo.thumbnail_url
    }));

    setProductStylesInfo(prevState => ({
      ...prevState,
      price: style.original_price,
      styleName: style.name,
      selectSize: arrayOfSkus,
      carouselImages: selectedStyleCarousel
    }));
  }

  return (
    <div className='OV_styleSelector'>
        <Container>
          <Row>
            {productStylesInfo.styles.map(style => {
              return (
                <Col className='OV_thumbnail' md={3}> <img src={style.photos[0].thumbnail_url} onClick={() => thumbnailClick(style)}/> </Col>
              )
            })}
          </Row>
        </Container>
    </div>
  )
}

export default StyleSelector;