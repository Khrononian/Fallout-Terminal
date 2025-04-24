import React from 'react'
import './TextStyles.css'

const LeftText = ({ lettersNumbers, characters, randomLetters, setUpLetters, onMouseHover, onMouseOut, onClicked }) => {
  return (
    <section>
      <div className='grid' >
        <div className='leftgrid '>
          {
            randomLetters().map((letter, index) => {
              return <p  key={index}>0x{letter}</p>
            })
          }
        </div>
        
        <div className='rightgrid ' id='grid'>
          {
            setUpLetters()[0].map((letter, index) => {
              return <p style={{cursor: 'pointer'}} className={letter} key={index} onClick={event => onClicked(event)} onMouseEnter={event => onMouseHover(event)} onMouseLeave={event => onMouseOut(event)}>{letter}</p>
            })
          }
        </div>
      </div>
    </section>
  )
}

LeftText.displayName = 'LeftText'



export default LeftText