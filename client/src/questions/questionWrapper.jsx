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
  }
  console.log('answers is', answers);



  return (
    <div>




    <table><tbody>
    <tr><td><b>Q: </b></td><td><b>
    <Question text={props.question.question_body}/>
    </b></td></tr>


    {answers.map((answer, index) => {
      return <tr><td valign='top'><b>A:</b></td><td>
      <Answer answer={answer} key={answer.id} />
      </td></tr>
    })}

    </tbody></table>

    </div>
  )
}

module.exports = QuestionWrapper;