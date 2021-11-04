import React, {useContext}  from 'react';
import Product_Id_Context from '../context.jsx';

const QuestionsFooter = (props) => {
  const product_id = useContext(Product_Id_Context);



  return (
    <div>

    [More Answered Questions] [Add a Question]

    </div>
  )
}

module.exports = QuestionsFooter;