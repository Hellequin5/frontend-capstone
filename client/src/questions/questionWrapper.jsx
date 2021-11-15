import React, {useContext, useState}  from 'react';
import Product_Id_Context from '../context.jsx';
import axios from 'axios';
import Question from './question.jsx';
import Answer from './answer.jsx';
import HelpfulQuestion from './helpfulQuestion.jsx';
import AddAnswerModal from './addAnswerModal.jsx'

const QuestionWrapper = (props) => {
  const product_id = useContext(Product_Id_Context);
  console.log('Question passed in to wrapper is', props.question);

  var [ans_view, setAnsView] = useState('partial');

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

    //2. PULL SELLER TO TOP
    answers_in_view = answers_in_view.filter((answer) => {
      return answer.answerer_name.toLowerCase() === 'seller';
    }).concat(
      answers_in_view.filter((answer) => {
        return answer.answerer_name.toLowerCase() !== 'seller';
      })
    )

    //3. DISPLAY PARTIAL OR FULL
    var short_answers_in_view = [];
    var long_answers_in_view = [];
    if (answers_in_view.length > 2) {
      short_answers_in_view = answers_in_view.slice(0,2);
      long_answers_in_view = answers_in_view.slice(2,answers_in_view.length);
    } else {
      short_answers_in_view = answers_in_view;
    }
  }




  return (
    <div>
    <table width='900'><tbody>
    <tr><td><b>Q: </b></td><td width='600'><b>
    <Question text={props.question.question_body}/>
    </b></td><td  width='300' align='right' class='container'>
      <HelpfulQuestion question={props.question} /> &nbsp;|&nbsp; <AddAnswerModal question_id={props.question.question_id} />
    </td></tr>


    {short_answers_in_view.map((answer, index) => {
      return <tr><td valign='top'><b>{( index === 0 ) ? 'A:' : null}</b></td><td>
      <Answer key={answer.id} answer={answer}  />
      </td></tr>
    })}

    {(ans_view === 'full') ? long_answers_in_view.map((answer, index) => {
      return <tr><td valign='top'></td><td>
      <Answer key={answer.id} answer={answer} />
      </td></tr>
    }) : null}

    <tr><td></td><td>
    { (ans_view === 'partial' && answers_in_view.length > 2) ? <input type='button' value='See more answers' id='more_answers' onClick={setAnsView.bind(null, 'full')}></input> : null}
    { (ans_view !== 'partial' && answers_in_view.length > 2) ? <input type='button' value='Collapse answers' id='more_answers' onClick={setAnsView.bind(null, 'partial')}></input> : null}
    </td></tr>
    </tbody></table>

    </div>
  )
}

export default QuestionWrapper;