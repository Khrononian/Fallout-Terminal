import React from 'react'

const RightText = ({ lettersNumbers, characters, randomLetters, setUpLetters }) => {
  return (
    <>
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
        <div className='rightgrid '>
          {
            setUpLetters(characters, 90).map((letter, index) => {
              return <p key={index}>{letter}</p>
            })
          }
        </div>
      </div>
    </>
  )
}

export default RightText