import React, { useEffect, useState } from 'react'
import './TextStyles.css'

const LeftText = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5])
  const [string, setString] = useState('')
  const [words, setWords] = useState('')
  const lettersNumbers = ['A', 'B', 'C', 'D', 'E', 'F', 
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  const characters = '!@#$%^&*()[]<>{}_-=+|,;./'
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

  useEffect(() => {
    setUpLetters(characters, 102)
    console.log('Inside', string)
  }, [])
  
  const randomLetters = (array, num) => {
    let newString = ''
    
    for (let i = 0; i < num; i++) {
      
      // if (newString.length > 10 && i % 12 === 0) newString += '\nRICE'
      
       newString += array[Math.floor(Math.random() * array.length)]
      
    }
    return newString
  }

  const setUpLetters = (array, num) => {
    const newNum = [0, 1, 2, 3, 4, 5]
    // let newString = ''
    let newString = []
    
    for (let i = 0; i < num; i++) {
      console.log('WOW', newString, newString.length)
    //   if (numbers.length !== 0 && newString.length > 2) {
    //   console.log('Num', numbers.length, newString, newString.length)
    //   newString += sevenWords[Math.floor(Math.random() * sevenWords.length)]
    //   setNumbers(prevState => prevState.filter((_, i) => i !== 0))
    //   console.log('New', newString)
      
    // } else newString += array[Math.floor(Math.random() * array.length)]
    
      // if (numbers.length !== 0 && string.length > 2) {
      //   setNumbers(prevState => prevState.filter((_, i) => i !== 0))
      //   console.log(numbers)
      // } else setString(prev => prev += array[Math.floor(Math.random() * array.length)])

      // newString += array[Math.floor(Math.random() * array.length)]
      newString.push(array[Math.floor(Math.random() * array.length)])
      // if (newNum.length !== 0) {
      //   console.log('TEST', newString[Math.floor(Math.random() * newString.length)], newString.indexOf(newString[Math.floor(Math.random() * newString.length)]))
      //   newNum.pop()
        
      //   newString.substring(newString.indexOf(newString[Math.floor(Math.random() * newString.length)]), 7, sevenWords[Math.floor(Math.random() * sevenWords.length)])
      //   console.log('CHECK NUM', newNum)
        
      // } 

      
      // setNumbers(prevState => prevState.filter((_, i) => i !== 0))
      // setNumbers(prevState => prevState.filter((_, i) => i !== 0))
      // setString(prev => prev += array[Math.floor(Math.random() * array.length)])
      
      // console.log('Text', string, numbers)
    }
    

    // setWords(sevenWords[Math.floor(Math.random() * sevenWords.length)])
    // setString(prev => prev += words)
    // setUpWords()
    
    return setUpWords(newString, newNum)
  }

  const setUpWords = (newString, newNum) => {
    console.log('FUNC', newString)
    let rice = ['NOW', 'HI', 'BASTARD', 'YO', 'YES', 'BUGS']
    if (newNum.length !== 0 ) {
      console.log('TEST', newString, newString[Math.floor(Math.random() * newString.length)], newString.indexOf(newString[Math.floor(Math.random() * newString.length)]))
      newNum.pop()
      rice.splice(1, 4, 'WORKS')

      newString.splice(newString.indexOf(newString[Math.floor(Math.random() * newString.length)]), 7, sevenWords[Math.floor(Math.random() * sevenWords.length)].split(''))
      // newString.substring(newString.indexOf(newString[Math.floor(Math.random() * newString.length)]), 7, sevenWords[Math.floor(Math.random() * sevenWords.length)])
      
      // rice.split('now').join('Fixed')
    }
    console.log('RICE', rice, sevenWords[Math.floor(Math.random() * sevenWords.length)], sevenWords[Math.floor(Math.random() * sevenWords.length)].split(''))
    return newString.flat()
    
  }
  console.log('ALL', string.length, string.indexOf(string[Math.floor(Math.random() * 204)]), numbers, words)
  // TRY RENDERING MAPPED AN ARRAY OF THE TEXT TO GET PERFECT LINE UP
  
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
          // randomLetters(characters, 204).split(' ').map(letter => {
          //   {console.log(letter)}
          //   <p>{letter[1]}</p>
          // })
          
          setUpLetters(characters, 204).map((letter, index) => {
            return <p key={index}>{letter}</p>
          })
          // string.split('').map((letter, index) => {
          //   return <p key={index}>{letter}</p>
          // })
        }
        
      </div>
    </div>
      
      // 12 across and 17 down
      
    </>
  )
}

export default LeftText