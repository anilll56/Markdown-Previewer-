import React from 'react'
import './rightSide.css'
import { useSelector } from 'react-redux';
function SecondPageRightSide() {
    const helptext=useSelector(state=>state.texts.helptext)
  return (
    <div className='right'>
    <div>
    <div className='ss2'>{helptext}</div>
   </div>
 </div>
  )
}

export default SecondPageRightSide;
