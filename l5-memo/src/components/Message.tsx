import React, { memo } from 'react'

const Message = (props:propType) => {
  const {noOfMsg} = props
  console.log("Message Rendering");
  
  return <p>Send {noOfMsg} Messages</p>
}

export default memo(Message)

interface propType{
    noOfMsg : number
}