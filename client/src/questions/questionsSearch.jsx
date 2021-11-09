import React, {useContext}  from 'react';
import Product_Id_Context from '../context.jsx';

const QuestionsSearch = (props) => {
  const product_id = useContext(Product_Id_Context);

  var handleChange = function(e) {
    props.getSearchString(e.target.value);
  }

  return (
    <div>

    <input type='text' id='questionSearch' placeholder='Have a Question? Search for answers...' size='100' onChange={handleChange}></input>


    </div>
  )
}

export default QuestionsSearch;