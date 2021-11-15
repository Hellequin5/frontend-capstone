import React, {useContext, useState, useEffect}  from 'react';
import axios from 'axios'
import OV_Context from './OV_Context.jsx'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'





const SelectSizeButton = (props) => {
  const {productStylesInfo, setProductStylesInfo} = useContext(OV_Context)

  let selectSizeClick = (sku) => {
    setProductStylesInfo(prevState => ({
      ...prevState,
      selectedSize: sku.size,
      selectQuantity: sku.quantity
    }));
  }

  return (
    <div className='OV_SizeButton'>
            <DropdownButton id="selectSize" title={productStylesInfo.selectedSize}>
                {productStylesInfo.selectSize.map(sku => {
                  return (
                    <Dropdown.Item onClick={() => selectSizeClick(sku)}>{sku.size}</Dropdown.Item>
                  )
                })}
              </DropdownButton>
    </div>
  )
}

export default SelectSizeButton;