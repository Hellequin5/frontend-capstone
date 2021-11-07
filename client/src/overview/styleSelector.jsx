import React, {useContext, useState, useEffect}  from 'react';
import Product_Id_Context from '../context.jsx';
import axios from 'axios'




const StyleSelector = (props) => {
  const product_id = useContext(Product_Id_Context);
  let [productStylesInfo, setProductStylesInfo] = useState({
    price: '',
    selectedStyle: '',
    styles: []
  })

  let styleSetter = () => {
    axios.get(`http://localhost:10038/productStylesRequest/${product_id}`)
      .then (productStyles => {
        setProductStylesInfo({
          price: productStyles.data[0].original_price,
          selectedStyle: productStyles.data[0].name,
          styles: productStyles.data
        })
      })
      .catch (error => {
        console.log('failed to get product styles')
      })
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
        <p> <b>STYLE: </b> {productStylesInfo.selectedStyle}</p>
      </div>
      <div id='thumbnails'>
        {productStylesInfo.styles.map(style => {
          return (
            <img src={style.photos[0].thumbnail_url}/>
          )
        })}
      </div>
    </div>
  )
}

export default StyleSelector;