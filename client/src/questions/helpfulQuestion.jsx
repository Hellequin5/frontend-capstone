import React, {useState, useEffect}  from 'react';
import axios from 'axios'
import PORT from '../server/server.js';

const HelpfulQuestion = (props) => {

  var [helpfulClick, setHelpfulClick] = useState(false)
  var [helpfulVal, setHelpfulVal] = useState(props.question.question_helpfulness);

  var helpfulQuestion = (qid) => {
    var config = {}
    if (qid) {
      config = {
        method:'put',
        url:`http://localhost:${PORT}/helpful_question`,
        params: {'qid': qid}
      };
    }
    axios(config)
      .then((helpfulResponse) => {
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
    if(helpfulClick) {
      setHelpfulVal(helpfulVal = helpfulVal + 1);
    }
  }, [helpfulClick])

  var alreadyClicked = <>Helpful? Yes({helpfulVal})</>;
  var notYetClicked = (<a onClick={helpfulQuestion.bind(null,props.question.question_id)}><u>Helpful? Yes
  ({helpfulVal})</u></a>);

  return (
    <div>
      { (helpfulClick) ? alreadyClicked : notYetClicked }
    </div>
  )
}

export default HelpfulQuestion;