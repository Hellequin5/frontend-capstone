import React, {useState, useEffect}  from 'react';
import axios from 'axios'
//import PORT from '../server/server.js';
var thePort = process.env.PORT;
if (!thePort) {
  thePort = 10038; //Galvanize NYC zipcode
}
const PORT = thePort;

const ReportAnswer = (props) => {

  var [reportClick, setReportClick] = useState(false)
  //var [helpfulVal, setHelpfulVal] = useState(props.answer.helpfulness);
  const answer_id = props.answer.id;

  var reportAnswer= (aid) => {
    console.log('reportAnswer called with aid', aid)
    var config = {}
    if (aid) {
      config = {
        method:'put',
        url:`http://localhost:${PORT}/report_answer`,
        params: {'aid': aid}
      };
    }
    axios(config)
      .then((reportedResponse) => {
        console.log('reported response is', reportedResponse);
        if (reportedResponse.status === 204) {
          setReportClick(reportClick = true);
        }
      })
      .catch((err) => {
        console.error(err);
      })
  }

  var alreadyClicked = <>Reported.</>;
  var notYetClicked = (<a onClick={reportAnswer.bind(null,props.answer.id)}><u>Report</u></a>);

  return (
    <div>
      { (reportClick) ? alreadyClicked : notYetClicked }
    </div>
  )
}

export default ReportAnswer;