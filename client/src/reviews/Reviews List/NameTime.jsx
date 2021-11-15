import React from 'react'

const NameTime= (props) => {

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const setTime = (timeString) => {
    let dateSubmitted = new Date(Date.parse(timeString))
    let month = months[dateSubmitted.getMonth()];
    let day = dateSubmitted.getDate();
    let year = dateSubmitted.getFullYear();
    return `${month} ${day}, ${year}`
  }

  return (
    <div style={{textAlign: 'right', fontStyle: 'italic', fontWeight: 'lighter', }} >
      {`${props.name}, ${setTime(props.time)}`}
    </div>
  )
}

export default NameTime;