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
      <table width='100%' border='1'><tbody><tr>

      <td><i>
        {(props.answer.answerer_name.toLowerCase() === 'seller')
        ? <> by <p class='qa-thick'> {props.answer.answerer_name} </p> </>
        : <> by {props.answer.answerer_name} </>}
      </i></td>
      <td>
        &nbsp; <i>{displayDate}</i>
      </td>
      <td width='400' align='right'>
        &nbsp;<HelpfulAnswer answer={props.answer}/>&nbsp;|&nbsp;<ReportAnswer answer={props.answer}/>
      </td>
      </tr></tbody></table>
      </div>
  )
}


export default AnswerFooter;