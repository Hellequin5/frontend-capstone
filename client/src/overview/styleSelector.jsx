import React, {useContext, useState, useEffect}  from 'react';
import Product_Id_Context from '../context.jsx';
import axios from 'axios'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'




const StyleSelector = (props) => {
  const product_id = useContext(Product_Id_Context);
  let [productStylesInfo, setProductStylesInfo] = useState({
    price: '',
    styleName: '',
    styles: [],
    selectSize: []
  })

  let styleSetter = () => {
    axios.get(`http://localhost:10038/productStylesRequest/${product_id}`)
      .then (productStyles => {
        let arrayOfSkus = Object.entries(productStyles.data[0].skus).map(key => ({ ...key[1]}));
        setProductStylesInfo({
          styles: productStyles.data,
          price: productStyles.data[0].original_price,
          styleName: productStyles.data[0].name,
          selectSize: arrayOfSkus

        })
      })
      .catch (error => {
        console.log('failed to get product styles')
      })
  }

  let thumbnailClick = (style) => {
    let arrayOfSkus = Object.entries(style.skus).map(key => ({ ...key[1]}));
    setProductStylesInfo(prevState => ({
      ...prevState,
      price: style.original_price,
      styleName: style.name,
      selectSize: arrayOfSkus
    }));
  }

  useEffect(() => {
    styleSetter();
  }, [product_id])


  return (
    <div id='styleSelector'>
      <div id='price'>
        <p>{productStylesInfo.price}</p>
      </div>
      <div id='style'>
        <p> <b>STYLE: </b> {productStylesInfo.styleName}</p>
      </div>
      <div id='thumbnails'>
        {productStylesInfo.styles.map(style => {
          return (
            <img src={style.photos[0].thumbnail_url} onClick={() => thumbnailClick(style)}/>
          )
        })}
      </div>
      <div id='sizeSelector'>
        <DropdownButton id="selectSize" title="SELECT SIZE">
          {productStylesInfo.selectSize.map(sku => {
            return (
              <Dropdown.Item>{sku.size}</Dropdown.Item>
            )
          })}
        </DropdownButton>
      </div>
    </div>
  )
}

export default StyleSelector;