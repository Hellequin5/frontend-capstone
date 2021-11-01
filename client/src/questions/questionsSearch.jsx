import React, {useContext}  from 'react';
import Product_Id_Context from '../context.jsx';

const QuestionsSearch = (props) => {
  const product_id = useContext(Product_Id_Context);



  return (
    <div>

    Question Search

    </div>
  )
}

module.exports = QuestionsSearch;