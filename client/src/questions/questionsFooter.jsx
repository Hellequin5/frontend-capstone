import React, {useContext}  from 'react';
import Product_Id_Context from '../context.jsx';
import AddQuestionModal from './addQuestionModal.jsx';
import ShowMoreQuestions from './showMoreQuestions.jsx';

const QuestionsFooter = (props) => {
  const product_id = useContext(Product_Id_Context);




  return (
    <div>
    <AddQuestionModal/> <ShowMoreQuestions questions_view={props.questions_view} moreQuestionsClick={props.moreQuestionsClick}/>

    </div>
  )
}

export default QuestionsFooter;