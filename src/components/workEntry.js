import React, { useState } from 'react';
import '../css/workEntry.css'

function WorkEntry({entry}) {
    
  const [isShown, setIsShown] = useState(false)
  
  const startDate = new Date(entry.started)
  const endDate = new Date(entry.ended)
  const today = new Date()

  return (
    <div id="embedHolder" onMouseEnter={() => {console.log("entry"); setIsShown(true)}} onMouseLeave={() => {console.log("exit"); setIsShown(false)}}>
      <img
        src={`${process.env.PUBLIC_URL}images/${entry.image}`}
        width="100"
        height="100"
        alt=""
        style={{transform: `${isShown ? 'scale(2,2)' : 'scale(1,1)'}`}}
        id="imageContainer"
      />
      <h2>{entry.company}{' • '}{entry.title}</h2>
      <h3>{`${startDate.toDateString()} - ${((endDate > today) ? 'Current' : endDate.toDateString())}`}</h3>
      <div style={{transform: `${isShown ? 'opacity(1)' : 'opacity(0)'}`}} id="textContainer">{entry.description}</div>
    </div>
  )
}

export default WorkEntry