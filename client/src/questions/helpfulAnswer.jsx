import React, {useState, useEffect}  from 'react';
import axios from 'axios'
//import PORT from '../server/server.js';
import aws from 'aws-sdk';
let s3 = new aws.S3({
  thePort: process.env.PORT,
  theBaseUrl: process.env.baseURL
});
const PORT = s3.thePort || 10038;
var baseUrl = s3.theBaseUrl || "http://localhost:"+PORT;

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