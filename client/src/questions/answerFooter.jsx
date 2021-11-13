import React, {useContext}  from 'react';
import Product_Id_Context from '../context.jsx';
import HelpfulAnswer from './helpfulAnswer.jsx';
import ReportAnswer from './reportAnswer.jsx';

const AnswerFooter = (props) => {
  const product_id = useContext(Product_Id_Context);

  var date = new Date(props.answer.date);
  var longMonth = new Intl.DateTimeFormat('en-US', { month: 'long'}).format(date);
  var displayDate = `${longMonth} ${date.getDate()}, ${date.getFullYear()}`

  return (
    <div class='container'>
      <i>
        by {(props.answer.answerer_name.toLowerCase() === 'seller') ? <p class='qa-thick'>
        {props.answer.answerer_name} </p> : props.answer.answerer_name}


        {/* {(props.answer.answerer_name.toLowerCase() !== 'seller') ?  : null}
        {props.answer.answerer_name}
        {(props.answer.answerer_name.toLowerCase() === 'seller') ? '</b>' : null} */}

        &nbsp; {displayDate}</i>
        &nbsp;<HelpfulAnswer answer={props.answer}/>&nbsp;|&nbsp;<ReportAnswer answer={props.answer}/>
    </div>
  )
}


export default AnswerFooter;