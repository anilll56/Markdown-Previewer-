import React from 'react'
import './leftSide.css'
import { useDispatch, useSelector } from 'react-redux';
import { addMassege } from '../redux/textAreaSlice';
function FirstPageLeftSide() {
  const dispatch=useDispatch();
  const textMassege =useSelector(state=>state.texts.text)

  return (
    <div className='left'>
       <div>
       <textarea className='ss2' defaultValue={textMassege} onChange={(e)=>dispatch(addMassege(e.target.value))}></textarea>
      </div>
    </div>
  )
}

export default FirstPageLeftSide;
