import React from 'react'
import { useSelector } from 'react-redux';
import './leftSide.css'
function SecondPageLeftSide() {
    const helptext=useSelector(state=>state.texts.helptext)
  return (
    <div className='left'>
    <div>
    <div className='ss2'>{helptext}</div>
     </div>
    </div>
  )
}

export default SecondPageLeftSide;
