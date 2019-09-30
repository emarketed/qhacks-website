import React from "react"
import Countdown from './countdown/Countdown.js';
import "./text.css"
class Text extends React.Component
{
    render()
    {
      
  return (
    <div>
    <div class = "text-box">
        <div class = "Path-2">
            <p><strong>QHacks</strong> 2020</p>
        </div>
    </div>
    <div class = "Path-3">
        <p>January 31st - February 2nd </p>
    </div>
    
      <Countdown timeTillDate="05 26 2020, 6:00 am" timeFormat="MM DD YYYY, h:mm a" />
      </div>
      );
}
}

export default Text






