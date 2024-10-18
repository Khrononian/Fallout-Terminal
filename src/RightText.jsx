import React from 'react'

const RightText = ({ lettersNumbers, characters, randomLetters, setUpLetters }) => {
  return (
    <>
      <div className='grid'>
        <div className='leftgrid '>
          {
            randomLetters().map((letter, index) => {
              return <p  key={index}>0x{letter}</p>
            })
          }
        </div>
        <div className='rightgrid '>
          {
            // setUpLetters(characters, 90).map((letter, index) => {
            //   return <p key={index}>{letter}</p>
            // })
          }
        </div>
      </div>
    </>
  )
}

export default RightText