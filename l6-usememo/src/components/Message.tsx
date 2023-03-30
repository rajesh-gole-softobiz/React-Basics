import React from 'react'

const Message = (props: propType) => {
    const {countNo} = props
    let number = 0;
    for(let i=0;i<500000000;i++){
        number++;
    }
    console.log("Message rendered");
  return (
    <>
    <h1>Number : {number}</h1>
    <div>Send {countNo} message</div>
    </>
  )
}

export default Message

interface propType{
   countNo : number
}