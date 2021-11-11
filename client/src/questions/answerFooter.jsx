import React, {useContext}  from 'react';
import Product_Id_Context from '../context.jsx';

const AnswerFooter = (props) => {
  const product_id = useContext(Product_Id_Context);

  var date = new Date(props.answer.date);
  var longMonth = new Intl.DateTimeFormat('en-US', { month: 'long'}).format(date);
  var displayDate = `${longMonth} ${date.getDate()}, ${date.getFullYear()}`

  return (
    <div>

      <i>by {(props.answer.answerer_name.toLowerCase() === 'seller') ? '<b>' : null}
        {props.answer.answerer_name}
        {(props.answer.answerer_name.toLowerCase() === 'seller') ? '</b>' : null}
        &nbsp; {displayDate}</i>

    </div>
  )
}


export default AnswerFooter;