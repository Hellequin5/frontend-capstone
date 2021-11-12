import React, {useState, useEffect}  from 'react';
import axios from 'axios'


const HelpfulQuestion = (props) => {

  var [helpfulClick, setHelpfulClick] = useState(false)
  var [helpfulVal, setHelpfulVal] = useState(props.question.question_helpfulness);

  var helpfulQuestion = (qid) => {
    //console.log('helpful clicked! qid is', `${qid}`)

    var config = {}
    if (qid) {
      config = {
        method:'put',
        url:`http://localhost:10038/helpful_question`,
        params: {'qid': qid}
      };
    }
    axios(config)
      .then((helpfulResponse) => {
        //update questions
        console.log('helpful response is', helpfulResponse);
        if (helpfulResponse.status === 204) {
          setHelpfulClick(helpfulClick = true);
        }
      })
      .catch((err) => {
        console.error(err);
      })
  }

  useEffect(() => {
    //singleItemRequest();
    console.log('helpful Click is hopefully now true.  It is actually... ', helpfulClick);

    setHelpfulVal(helpfulVal = helpfulVal + 1);


  }, [helpfulClick])

  var yes = <>Helpful? Yes({helpfulVal})</>;
  var no = (<a onClick={helpfulQuestion.bind(null,props.question.question_id)}><u>Helpful? Yes
  ({helpfulVal})</u></a>);


  return (
    <div>
      { (helpfulClick) ? yes : no }

    </div>
  )
}

export default HelpfulQuestion;