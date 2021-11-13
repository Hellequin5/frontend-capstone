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
        {(props.answer.answerer_name.toLowerCase() === 'seller')
        ? <div class='container'> by &nbsp; <div class='qa-thick'> &nbsp; {props.answer.answerer_name} </div> </div>
        : <> by {props.answer.answerer_name} </>}
      </i>

        &nbsp; <i>{displayDate}</i>


        &nbsp;<HelpfulAnswer answer={props.answer}/>&nbsp;|&nbsp;<ReportAnswer answer={props.answer}/>
    </div>
  )
}


export default AnswerFooter;