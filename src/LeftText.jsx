import React, { useEffect, useState } from 'react'
import './TextStyles.css'

const LeftText = ({ lettersNumbers, characters, randomLetters, setUpLetters, onMouseHover, onMouseOut }) => {
  // const lettersNumbers = ['A', 'B', 'C', 'D', 'E', 'F', 
  // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  // const characters = '!@#$%^&*()[]<>{}_-=+|,;./'
  const sevenWords = ['Formula','Dilemma','Diploma','Replica','Grandma','Spectra','Persona',
  'Ammonia','Antenna','Stamina','Malaria','Militia','Vanilla','Bonanza','Inertia','Sequoia',
  'Algebra','Cholera','Bohemia','Bologna','Alameda','Gorilla','Nirvana','Grandpa','Panacea',
  'Alumina','Amnesia','Candida','Tequila','Regatta','Mascara','Magenta','Bulimia','Indicia',
  'Gondola','Veranda','Urethra','Granola','Myeloma','Candela','Dyspnea','Sarcoma','Cantina',
  'Rosacea','Regalia','Rotunda','Madrona','Corpora','Alfalfa','Myalgia','Gangsta','Bravura',
  'Caldera','Anaemia','Tessera','Yeshiva','Trachea','Cordoba','Ganglia','Aphasia','Chimera',
  'Rubella','Lantana','Breccia','Spatula','Hypoxia','Savanna','Paprika','Novella','Propria',
  'Erotica','Giardia','Fuchsia','Taffeta','Cortina','Fistula','Arugula','Ricotta','Cannula',
  'Adenoma','Beretta','Corolla','Piranha','Lasagna','Cantata','Ephedra','Mahatma','Marimba',
  'Tempura','Naphtha','Polenta','Silesia','Viremia','Purpura','Sultana','Pergola','Emerita',
  'Exotica','Helluva','Arabica']

  
  // const randomLetters = (array, num) => {
  //   let newString = ''
    
  //   for (let i = 0; i < num; i++) {
      
  //     // if (newString.length > 10 && i % 12 === 0) newString += '\nRICE'
      
  //      newString += array[Math.floor(Math.random() * array.length)]
      
  //   }
  //   return newString
  // }

  // const setUpLetters = (array, num) => {
  //   const newNum = [0, 1, 2, 3, 4, 5]
  //   const dudLetters = [0, 1, 2, 3, 4]
  //   const blockHolder = ['[]', '()', '{}', '<>']
  //   const characterHolder = '!@#$%^&*_-=+|,;./'
  //   const terminalWords = [[], [], [], [], [], [], [], [], []]
  //   const newString = []
    
    
  //   for (let i = 0; i < num; i++) {
  //     newString.push(array[Math.floor(Math.random() * array.length)])
      
      
  //     console.log('FIND STRING', newString)
  //   }
  //   const setUpWords = (string, number) => {

  //     console.log('FUNC', string)
  //     let rice = ['NOW', 'HI', 'BASTARD', 'YO', 'YES', 'BUGS']
  //     let firstNum = 1
  //     let secondNum = 12
  //     while (number.length !== 0 ) {
  //       console.log('First line', string.indexOf(string[Math.floor(Math.random() * string.length)]), string[Math.floor(Math.random() * string.length)], number, terminalWords)
  //       // string.splice(string.indexOf(characters[Math.floor(Math.random() * characters.length)]), 7, sevenWords[Math.floor(Math.random() * sevenWords.length)].split(''))
  //       // string.splice(Math.floor(Math.random() * num), 0, sevenWords[Math.floor(Math.random() * sevenWords.length)].split(''))
        
  //       string.splice(Math.floor(Math.random() * (secondNum - firstNum + 1) + firstNum), 0, sevenWords[Math.floor(Math.random() * sevenWords.length)].split(''))
  //       firstNum += 12
  //       secondNum += 12
  //       console.log('Numbers', firstNum, secondNum)
  //       number.pop()
  //     }
      
      
  //     let j = 0;
  //     while (dudLetters.length !== 0 || j <= 8) {
  //       terminalWords[j].unshift(blockHolder[Math.floor(Math.random() * blockHolder.length)][0])
  //       for (let i = 0; i < 6; i++) {
  //         terminalWords[j].push(characterHolder[Math.floor(Math.random() * characterHolder.length)])
          
  //       }
  //       dudLetters.pop()
  //       blockHolder.forEach(element => {
  //         if (element[0] === terminalWords[j][0]) terminalWords[j].push(element[1])
  //       })
  //       j++
  //     }
      
  //     for (let i = 0; i < 9; i++) {
  //       string.splice(Math.floor(Math.random() * newString.length), 0, terminalWords[i])
  //     }
      
  //     console.log('TERM', terminalWords, )
  //     console.log('RICE', rice, sevenWords[Math.floor(Math.random() * sevenWords.length)], sevenWords[Math.floor(Math.random() * sevenWords.length)].split(''))
  //     console.log('FLAT', string.flat())
  //     return string.flat()
      
  //   }
  //   return setUpWords(newString, newNum)
  // }
  
  

  // console.log('ALL', string.length, string.indexOf(string[Math.floor(Math.random() * 204)]), numbers, words)
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
        {/* <p>
          {
            randomLetters(characters, 204)

          }
        </p> */}
        {
          
          
          setUpLetters(characters, 90, sevenWords).map((letter, index) => {
            return <p key={index} onMouseEnter={event => onMouseHover(event)} onMouseLeave={event => onMouseOut(event)}>{letter}</p>
          })
        }
        
      </div>
    </div>
    </>
  )
}

export default LeftText