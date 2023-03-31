import React, { memo } from 'react'

const Message = (props : propType) => {
    const {countNo,onHandleInc} = props;
    console.log("Message rendering");
  return (
    <div>
        <p>You clicked {countNo} times</p>
        <button onClick={onHandleInc}>Increase count C2P</button>
    </div>
  )
}
export default memo(Message)

interface propType {
    countNo : number,
    onHandleInc: any
}