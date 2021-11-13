import React, {useState, useEffect}  from 'react';
import axios from 'axios'


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
        url:`http://localhost:10038/report_answer`,
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

  useEffect(() => {
    // if(reportClick) {
    //   setHelpfulVal(helpfulVal = helpfulVal + 1);
    // }
  }, [reportClick])

  var alreadyClicked = <>Reported.</>;
  var notYetClicked = (<a onClick={reportAnswer.bind(null,props.answer.id)}><u>Report</u></a>);

  return (
    <div>
      { (reportClick) ? alreadyClicked : notYetClicked }
    </div>
  )
}

export default ReportAnswer;