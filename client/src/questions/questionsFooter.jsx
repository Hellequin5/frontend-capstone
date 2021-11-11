import React, {useContext}  from 'react';
import Product_Id_Context from '../context.jsx';
import AddQuestionModal from './addQuestionModal.jsx';

const QuestionsFooter = (props) => {
  const product_id = useContext(Product_Id_Context);




  return (
    <div>
    { (props.questions_view === 'partial') ? <input type='button' value='MORE ANSWERED QUESTIONS' id='more_questions' onClick={props.moreQuestionsClick}></input> : null}
    { (props.questions_view === 'full*') ? <input type='button' value='YET MORE ANSWERED QUESTIONS' id='more_questions' onClick={props.moreQuestionsClick}></input> : null}
    { (props.questions_view === 'full') ? <input type='button' value='LESS ANSWERED QUESTIONS' id='more_questions' onClick={props.moreQuestionsClick}></input> : null}


    {/* <input type='button' value='ADD A QUESTION' id='add_question'></input> */}
    <AddQuestionModal />
    </div>
  )
}

export default QuestionsFooter;