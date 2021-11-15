import React, {useContext, useState, useEffect}  from 'react';
import axios from 'axios'
import OV_Context from './OV_Context.jsx'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'




const SelectQuantityButton = (props) => {
  const {productStylesInfo, setProductStylesInfo} = useContext(OV_Context)

  let selectQuantityClick = (quantity) => {
    setProductStylesInfo(prevState => ({
      ...prevState,
      displayQuantity: quantity
    }));
  }

  let quantityArray = (num) => {
    let result = [];

    for (let i = 0; i <= num; i++) {
      if (i === 16) {
        return result
      }
      result.push(i)
    }
    return result;
  }

  return (
    <div className='OV_quantitySelector'>
      <DropdownButton id="OV_selectQuantity" title={productStylesInfo.displayQuantity}>
        {quantityArray(productStylesInfo.selectQuantity).map(num => {
          return (
            <Dropdown.Item onClick={() => selectQuantityClick(num)}>{num}</Dropdown.Item>
          )
        })}
      </DropdownButton>
    </div>

  )
}

export default SelectQuantityButton;