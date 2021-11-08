import React, {useContext}  from 'react';
import Product_Id_Context from '../context.jsx';
import Question from './question.jsx';
import Answer from './answer.jsx';

const QuestionWrapper = (props) => {
  const product_id = useContext(Product_Id_Context);
  console.log('Question passed in to wrapper is', props.question);
  var answers_in_view = [];
  var total_answers_count = 0;
  var total_answers_in_view_count = 0;
  if (props.question.answers) {
    for (var key in props.question.answers) {
      answers_in_view.push(props.question.answers[key])
    }
    total_answers_count = answers_in_view.length;
    //1. SORT
    answers_in_view = answers_in_view.sort((ans1, ans2)=> {
      return ans2.helpfulness - ans1.helpfulness;
    })

    //2. Display partial or full
    if (props.answers_view === 'partial') {
      answers_in_view = answers_in_view.slice(0,2);
    }
  }



  return (
    <div>
    <table width='800'><tbody>
    <tr><td><b>Q: </b></td><td><b>
    <Question text={props.question.question_body}/>
    </b></td><td align='right'>
    Helpful? Yes({props.question.question_helpfulness}) | Add Answer
    </td></tr>


    {answers_in_view.map((answer, index) => {
      return <tr><td valign='top'><b>{( index === 0 ) ? 'A:' : null}</b></td><td>
      <Answer answer={answer} key={answer.id} />
      </td></tr>
    })}

    <tr><td></td><td>
    { (total_answers_count < 3 || answers_in_view.length > 2) ? null : <input type='button' value='LOAD MORE ANSWERS' id='more_answers' onClick={props.more_answers}></input>}
    { (total_answers_count < 3 || answers_in_view.length < 3) ? null : <input type='button' value='HIDE MORE ANSWERS' id='more_answers' onClick={props.more_answers}></input>}
    </td></tr>
    </tbody></table>

    </div>
  )
}

export default QuestionWrapper;