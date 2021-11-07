import React, {useContext}  from 'react';
import Product_Id_Context from '../context.jsx';
import Question from './question.jsx';
import Answer from './answer.jsx';

const QuestionWrapper = (props) => {
  const product_id = useContext(Product_Id_Context);
  console.log('Question passed in to wrapper is', props.question);
  var answers = [];
  if (props.question.answers) {
    for (var key in props.question.answers) {
      answers.push(props.question.answers[key])
    }
    answers.sort((ans1, ans2)=> {
      return ans2.helpfulness - ans1.helpfulness;
    })
  }
  console.log('answers is', answers);



  return (
    <div>
    <table width='800'><tbody>
    <tr><td><b>Q: </b></td><td><b>
    <Question text={props.question.question_body}/>
    </b></td><td align='right'>
    Helpful? Yes({props.question.question_helpfulness}) | Add Answer
    </td></tr>


    {answers.map((answer, index) => {
      return <tr><td valign='top'><b>{( index === 0 ) ? 'A:' : null}</b></td><td>
      <Answer answer={answer} key={answer.id} />
      </td></tr>
    })}

    </tbody></table>

    </div>
  )
}

module.exports = QuestionWrapper;