import React, {useContext}  from 'react';
import Button from 'react-bootstrap/Button';

const ShowMoreQuestions = (props) => {

  return (
    <div>

      {(props.questions_view !== 'full') ?
       <Button variant="light" onClick={props.moreQuestionsClick}>
       MORE ANSWERED QUESTIONS
     </Button>
     : null}


{/*
    { (props.questions_view === 'partial') ? <input type='button' value='MORE ANSWERED QUESTIONS' id='more_questions' onClick={props.moreQuestionsClick}></input> : null}
    { (props.questions_view === 'full*') ? <input type='button' value='YET MORE ANSWERED QUESTIONS' id='more_questions' onClick={props.moreQuestionsClick}></input> : null}
    { (props.questions_view === 'full') ? <input type='button' value='LESS ANSWERED QUESTIONS' id='more_questions' onClick={props.moreQuestionsClick}></input> : null} */}
    </div>
  )
}

export default ShowMoreQuestions;