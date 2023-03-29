import React from 'react'

const CountJSX = (props : propType) => {
    const {countno} = props
  return (
    <h1>{countno}</h1>
  )
}

export default CountJSX

interface propType {
     countno : number
}