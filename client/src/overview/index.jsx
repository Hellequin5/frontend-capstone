import React, {useContext, useState, useEffect} from 'react';
import axios from 'axios'
import Product_Id_Context from '../context.jsx';
import OV_Context from './OV_Context.jsx'
import ProductSpec from './ProductSpec.jsx'
import StyleSelector from './StyleSelector.jsx'
import SelectSizeButton from './SelectSizeButton.jsx'
import SelectQuantityButton from './SelectQuantityButton.jsx'
import AddToCartButton from './AddToCartButton.jsx'
import ImageCarousel from './ImageCarousel.jsx'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Overview = (props) => {
  const product_id = useContext(Product_Id_Context);

  let [productInfo, setProductInfo] = useState({
    category: '',
    name: '',
    description: ''
  });

  let [productStylesInfo, setProductStylesInfo] = useState({
    price: '',
    styleName: '',
    styles: [],
    selectSize: [],
    selectedSize: 'SELECT SIZE',
    selectQuantity: 0,
    displayQuantity: 'SELECT QUANTITY',
    carouselImages: []
  });

  let getProductInfo = () => {
    axios.get(`http://localhost:10038/productInfoRequest/${product_id}`)
      .then (productInfo => {
        setProductInfo({
          category: productInfo.data.category,
          name: productInfo.data.name,
          description: productInfo.data.description
        })
      })
      .catch (error => {
        console.log('failed to get product info')
      })
  };

  let styleSetter = () => {
    axios.get(`http://localhost:10038/productStylesRequest/${product_id}`)
      .then (productStyles => {
        let arrayOfSkus = Object.entries(productStyles.data[0].skus).map(key => ({ ...key[1]}));
        let carouselImagesArray = productStyles.data[0].photos.map(photo => ({
            original: photo.url,
            thumbnail: photo.thumbnail_url
          })
        );

        setProductStylesInfo(prevState => ({
          ...prevState,
          styles: productStyles.data,
          price: productStyles.data[0].original_price,
          styleName: productStyles.data[0].name,
          selectSize: arrayOfSkus,
          carouselImages: carouselImagesArray
        }));
      })

      .catch (error => {
        console.log('failed to get product styles')
      });
  };

  useEffect(() => {
    if (product_id) {
      getProductInfo();
      styleSetter();
    }

  }, [product_id])

  return (
    <OV_Context.Provider value={{productInfo: productInfo, setProductInfo: setProductInfo, productStylesInfo: productStylesInfo, setProductStylesInfo: setProductStylesInfo}}>
      <div id='overview'>
        <Container>
          <Row>
            <Col md={6}> <ImageCarousel/> </Col>
            <Col md={{ span: 4, offset: 2 }}> <ProductSpec/>  </Col>
          </Row>
          <Row>
            <Col md={{ span: 4, offset: 8 }}> <StyleSelector/> </Col>
          </Row>
          <Row>
            <Col md={{ span: 1, offset: 8 }}> <SelectSizeButton/> </Col>
            <Col md={{ span: 1, offset: 1 }}> <SelectQuantityButton/> </Col>
          </Row>
          <Row>
            <Col md={{ span: 4, offset: 8 }}> <AddToCartButton/> </Col>
          </Row>
        </Container>
      </div>
    </OV_Context.Provider>
  );
}

export default Overview;
{/* <SizeButton/>
<QuantityButton/>
<AddToCartButton/>
<ImageCarousel/>  */}