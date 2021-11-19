import React from 'react'

const ReportReview = (props) => {
  if (props.reported) {
    return (
      <div> Thank you for your Feedback! Your report has been submitted.</div>
    )
  } else {
    return (
      <a
        style={{textDecoration: 'underline'}}
        onClick={() => props.handleHelpfulReport('report')}
      >Report</a>
    )
  }
}

export default ReportReview;