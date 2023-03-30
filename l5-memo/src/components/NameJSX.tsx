import React, { memo } from 'react'

const NameJSX = (props:propType) => {
    const {nameLen} = props;
    console.log("Name Length Rendering");
    
  return (
    <div>{nameLen}</div>
  )
}

export default memo(NameJSX)

interface propType{
    nameLen : number
}