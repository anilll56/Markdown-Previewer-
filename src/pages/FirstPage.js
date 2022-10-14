import React from 'react'
import FirstPageLeftSide from '../components/FirstPageLeftSide';
import FirstPageRightSide from '../components/FirstPageRightSide';
import './FirstPage.css'
function FirstPage() {
  return (
    <div className='bigAlice'>
        <FirstPageLeftSide></FirstPageLeftSide>
        <FirstPageRightSide></FirstPageRightSide>
    </div>
  )
}

export default FirstPage;
