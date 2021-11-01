import React from 'react';

const Questions = (props) => {

  return (
    <div>

    Questions Component, Product_id is {props.product_id}

    </div>
  )
}

module.exports = Questions;

/*
<QuestionsSearch>
<QuestionsBody>
-- <Question#1 Wrapper>
--## <Question#1 Question>
--## <Question#1 Answer>
--## <Question#1 Footer>
-- <Question#2 Wrapper>
--## <Question#2 Question>
--##++ <Question#2Question Text>
--## <Question#2 Answers>
--##++ <Question#2Answer#1 Text>
--##++ <Question#2Answer#1 Images>
--##++ <Question#2Answer#2 Text>
--##++ <Question#2Answer#2 Images>
--## <Question#2 Answers Footer>
--## <Question#2 Footer>
--##++ <Question#2 New Answer>
<QuestionsFooter>
-- <New Question>

Revision1: Questions may not have Images - only Answers
Revision2: Many Answers to One Question
*/