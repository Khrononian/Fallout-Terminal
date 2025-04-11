import React from 'react'
import './TextStyles.css'

const LeftText = ({ lettersNumbers, characters, randomLetters, setUpLetters, onMouseHover, onMouseOut, onClicked, innerLeftRef1, innerLeftRef2 }) => {
  return (
    <section>
      <div className='grid' >
        <div className='leftgrid ' ref={innerLeftRef1}>
          {
            randomLetters().map((letter, index) => {
              return <p  key={index}>0x{letter}</p>
            })
          }
        </div>
        
        <div className='rightgrid ' id='grid' ref={innerLeftRef2}>
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