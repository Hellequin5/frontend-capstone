import React, {useContext}  from 'react';
import Product_Id_Context from '../context.jsx';

const QuestionsSearch = (props) => {
  const product_id = useContext(Product_Id_Context);



  return (
    <div>

    <input type='text' id='questionSearch' defaultValue='Have a Question? Search for answers...' size='100'></input>


    </div>
  )
}

export default QuestionsSearch;