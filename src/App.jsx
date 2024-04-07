import { useState } from 'react'
import './App.css'
import LeftText from './LeftText'
import RightText from './RightText'

function App() {
  return (
    <>
      <div>
        <p>ROBCO INDUSTRIES (TM) TERMALINK PROTOCOL</p>
        <p>ENTER PASSWORD NOW</p>
        <br/>
        <p>4 ATTEMPT(S) LEFT: </p>
        <br/>
        <div>
          <LeftText />
          <RightText />
        </div>
        
      </div>
    </>
  )
}

export default App
