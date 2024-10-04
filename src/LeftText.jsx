import React, { useEffect, useState } from 'react'
import './TextStyles.css'

const LeftText = React.memo(({ lettersNumbers, characters, randomLetters, setUpLetters, onMouseHover, onMouseOut, onClicked }) => {


  return (
    <main>
      <div className='grid'>
        <div className='leftgrid '>
          <p>0x{randomLetters(lettersNumbers, 4)}</p>
          <p>0x{randomLetters(lettersNumbers, 4)}</p>
          <p>0x{randomLetters(lettersNumbers, 4)}</p>
          <p>0x{randomLetters(lettersNumbers, 4)}</p>
          <p>0x{randomLetters(lettersNumbers, 4)}</p>
          <p>0x{randomLetters(lettersNumbers, 4)}</p>
          <p>0x{randomLetters(lettersNumbers, 4)}</p>
          <p>0x{randomLetters(lettersNumbers, 4)}</p>
          <p>0x{randomLetters(lettersNumbers, 4)}</p>
          <p>0x{randomLetters(lettersNumbers, 4)}</p>
          <p>0x{randomLetters(lettersNumbers, 4)}</p>
          <p>0x{randomLetters(lettersNumbers, 4)}</p>
          <p>0x{randomLetters(lettersNumbers, 4)}</p>
          <p>0x{randomLetters(lettersNumbers, 4)}</p>
          <p>0x{randomLetters(lettersNumbers, 4)}</p>
          <p>0x{randomLetters(lettersNumbers, 4)}</p>
          <p>0x{randomLetters(lettersNumbers, 4)}</p>
        </div>
        
        <div className='rightgrid ' id='grid'>
          
          {
            
            
            // setUpLetters().map((letter, index) => {
            //   return <p style={{cursor: 'pointer'}} className={letter} key={index} onClick={event => onClicked(event)} onMouseEnter={event => onMouseHover(event)} onMouseLeave={event => onMouseOut(event)}>{letter}</p>
            // })
            setUpLetters()
          }
          <p onClick={event => onClicked(event)}>Test</p>
        </div>
      </div>
    </main>
  )
})

LeftText.displayName = 'LeftText'

const Food = React.memo(( {characters, randomLetters} ) => {
  return (
    <div>

    </div>
  )
})

Food.displayName = 'MyFood'

export default LeftText