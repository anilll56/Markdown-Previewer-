import React from 'react'
import SecondPageLeftSide from '../components/SecondPageLeftSide'
import SecondPageRightSide from '../components/SecondPageRightSide'
import './FirstPage.css'

function SecondPage() {
  return (
    <div className='bigAlice'>
        <SecondPageLeftSide></SecondPageLeftSide>
        <SecondPageRightSide></SecondPageRightSide>
    </div>
  )
}

export default SecondPage
