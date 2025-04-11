import React from 'react'

const RightText = ({ lettersNumbers, characters, randomLetters, setUpLetters, onMouseHover, onMouseOut, onClicked, innerRightRef1, innerRightRef2 }) => {
  return (
    <section>
      <div className='grid' >
        <div className='leftgrid ' ref={innerRightRef1}>
          {
            randomLetters().map((letter, index) => {
              return <p  key={index}>0x{letter}</p>
            })
          }
        </div>
        <div className='rightgrid ' id='grid' ref={innerRightRef2}>
          {
            setUpLetters()[1].map((letter, index) => {
              return <p style={{cursor: 'pointer'}} className={letter} key={index} onClick={event => onClicked(event)} onMouseEnter={event => onMouseHover(event)} onMouseLeave={event => onMouseOut(event)}>{letter}</p>
            })
          }
        </div>
      </div>
    </section>
  )
}

export default RightText