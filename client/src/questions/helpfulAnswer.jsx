import React, {useState, useEffect}  from 'react';
import axios from 'axios'
//import PORT from '../server/server.js';
const PORT = process.env.PORT || 10038;
var baseUrl = process.env.baseURL || "http://localhost:10038"

const HelpfulAnswer = (props) => {

  var [helpfulClick, setHelpfulClick] = useState(false)
  var [helpfulVal, setHelpfulVal] = useState(props.answer.helpfulness);
  const answer_id = props.answer.id;

  var helpfulAnswer= (aid) => {
    console.log('HelpfulAnswer called with aid', aid)
    var config = {}
    if (aid) {
      config = {
        method:'put',
        url:`${baseUrl}/helpful_answer`,
        params: {'aid': aid}
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
  var notYetClicked = (<a onClick={helpfulAnswer.bind(null,props.answer.id)}><u>Helpful? Yes
  ({helpfulVal})</u></a>);

  return (
    <div>
      { (helpfulClick) ? alreadyClicked : notYetClicked }
    </div>
  )
}

export default HelpfulAnswer;