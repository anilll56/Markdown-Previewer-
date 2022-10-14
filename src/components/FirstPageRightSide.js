import React from 'react'
import './rightSide.css'
import { useSelector } from 'react-redux'

function FirstPageRightSide() {
    const text2=useSelector(state=>state.texts.text)
  return (
    <div className='right'>
       <div>
       <div className='ss2'>{text2}</div>
      </div>
    </div>
  )
}

export default FirstPageRightSide
