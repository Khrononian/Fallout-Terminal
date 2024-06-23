import './App.css'
import { useState } from 'react'

import LeftText from './LeftText'
import RightText from './RightText'

// import Audios from './audios'

function App() {
  const lettersNumbers = ['A', 'B', 'C', 'D', 'E', 'F', 
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  const characters = '!@#$%^&*()[]<>{}_-=+|,;./'

  const terminalAudio = (url) => {
    const sounds = new Audio(url);

    sounds.volume = 0.2
    sounds.muted = true
    sounds.play();
  }

  const randomLetters = (array, num) => {
    let newString = ''
    
    for (let i = 0; i < num; i++) {
       newString += array[Math.floor(Math.random() * array.length)]
    }

    return newString
  }

  const setUpLetters = (array, num) => {
    const newNum = [0, 1, 2, 3, 4, 5]
    const dudLetters = [0, 1, 2, 3, 4]
    const blockHolder = ['[]', '()', '{}', '<>']
    const characterHolder = '!@#$%^&*_-=+|,;./'
    const terminalWords = [[], [], [], [], [], [], [], [], []]
    const newString = []
    
    for (let i = 0; i < num; i++) {
      newString.push(array[Math.floor(Math.random() * array.length)])
    }

    const setUpWords = (string, number) => {
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
      let firstNum = 1
      let secondNum = 12

      while (number.length !== 0 ) {
        console.log('First line', string.indexOf(string[Math.floor(Math.random() * string.length)]), string[Math.floor(Math.random() * string.length)], number, terminalWords)
        
        string.splice(Math.floor(Math.random() * (secondNum - firstNum + 1) + firstNum), 0, sevenWords[Math.floor(Math.random() * sevenWords.length)].toUpperCase().split(''))
        firstNum += 12
        secondNum += 12
        console.log('Numbers', firstNum, secondNum)
        number.pop()
      }
      
      let j = 0;
      while (dudLetters.length !== 0 || j <= 8) {
        terminalWords[j].unshift(blockHolder[Math.floor(Math.random() * blockHolder.length)][0])
        for (let i = 0; i < 6; i++) {
          terminalWords[j].push(characterHolder[Math.floor(Math.random() * characterHolder.length)])
          
        }
        dudLetters.pop()
        blockHolder.forEach(element => {
          if (element[0] === terminalWords[j][0]) terminalWords[j].push(element[1])
        })
        j++
      }
      
      for (let i = 0; i < 9; i++) {
        string.splice(Math.floor(Math.random() * newString.length), 0, terminalWords[i])
      }
      
      console.log('TERM', terminalWords, )
      console.log('RICE', sevenWords[Math.floor(Math.random() * sevenWords.length)], sevenWords[Math.floor(Math.random() * sevenWords.length)].split(''))
      console.log('FLAT', string.flat())
      return string.flat()
      
    }
    return setUpWords(newString, newNum)
  }

  // const mouseEnter = event => event.target.style.background = 'green'
  const mouseEnter = event => {
    const selectedAudio = document.getElementById('audiofile')
    let nextSibling = event.target.nextElementSibling
    let prevSibling = event.target.previousElementSibling
    
    event.target.style.background = 'green'
    console.log(selectedAudio.src)
    
    selectedAudio.play()
    
    console.log(event.target.innerText, event.target.nextElementSibling, event)
    

    while (nextSibling && /[a-z]/i.test(nextSibling.innerText) && /[a-z]/i.test(event.target.innerText)) {
      event.target.style.background = 'red'
      nextSibling.style.background = 'red'
      nextSibling = nextSibling.nextElementSibling
    }
    
    while (prevSibling && /[a-z]/i.test(prevSibling.innerText) && /[a-z]/i.test(event.target.innerText)) {
      event.target.style.background = 'red'
      prevSibling.style.background = 'red'
      prevSibling = prevSibling.previousElementSibling
    }

    // terminalAudio(`https://breakout.bernis-hideout.de/robco-industries/sound/k${Math.floor(Math.random() * 10) + 1}.ogg`)
  
  }
  const mouseOut = event => {
    event.target.style.background = 'transparent'
    const selectedAudio = document.getElementById('audiofile')
    
    
    selectedAudio.onended = () => {
      selectedAudio.src = `https://breakout.bernis-hideout.de/robco-industries/sound/k${Math.floor(Math.random() * 10) + 1}.ogg`
      
    }
  }

  return (
    <>
      <div>
        <p>ROBCO INDUSTRIES (TM) TERMALINK PROTOCOL</p>
        <p>ENTER PASSWORD NOW</p>
        <br/>
        <p>4 ATTEMPT(S) LEFT: <span>B</span> <span>B</span> <span>B</span> <span>B</span> </p>
        <br/>
        <div className='boxes'>
          <LeftText 
            lettersNumbers={lettersNumbers} 
            characters={characters}
            randomLetters={randomLetters}
            setUpLetters={setUpLetters}
            onMouseHover={mouseEnter}
            onMouseOut={mouseOut}
          />
          <RightText 
            lettersNumbers={lettersNumbers} 
            characters={characters}
            randomLetters={randomLetters}
            setUpLetters={setUpLetters}
          />
          <p>{'>'}</p>
        </div>
        
      </div>
      <div>
        <audio id='audiofile' src='https://breakout.bernis-hideout.de/robco-industries/sound/k1.ogg'/>
      </div>
    </>
  )
}

export default App
