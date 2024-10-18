import React, { useEffect, useState } from 'react'
import './TextStyles.css'

const LeftText = ({ lettersNumbers, characters, randomLetters, setUpLetters, onMouseHover, onMouseOut, onClicked }) => {

  return (
    <main>
      <div className='grid'>
        <div className='leftgrid '>
          {
            randomLetters().map((letter, index) => {
              return <p  key={index}>0x{letter}</p>
            })
          }
        </div>
        
        <div className='rightgrid ' id='grid'>
          {
            // setUpLetters().map((letter, index) => {
            //   return <p style={{cursor: 'pointer'}} className={letter} key={index} onClick={event => onClicked(event)} onMouseEnter={event => onMouseHover(event)} onMouseLeave={event => onMouseOut(event)}>{letter}</p>
            // })
            setUpLetters().map((letter, index) => {
              return <p style={{cursor: 'pointer'}} className={letter} key={index} onClick={event => onClicked(event)} onMouseEnter={event => onMouseHover(event)} onMouseLeave={event => onMouseOut(event)}>{letter}</p>
            })
          }
        </div>
      </div>
    </main>
  )
}

LeftText.displayName = 'LeftText'

const Food = React.memo(( {characters, randomLetters} ) => {
  return (
    <div>

    </div>
  )
})

Food.displayName = 'MyFood'

export default LeftText