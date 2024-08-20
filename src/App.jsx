import './App.css'
import { useState } from 'react'

import LeftText from './LeftText'
import RightText from './RightText'

// import Audios from './audios'

function App() {
  const lettersNumbers = ['A', 'B', 'C', 'D', 'E', 'F', 
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  const characters = '!@#$%^&*()[]<>{}_-=+|,;./'
  const testArrays = []
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
    const terminalWords = [[], [], [], [], [], [], [], [], []];
    const terminalCodes = [[], [], [], [], [], []]
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
      let i = 0
      let t = 0;

      while (number.length !== 0 ) {
        console.log('First line', string.indexOf(string[Math.floor(Math.random() * string.length)]), string[Math.floor(Math.random() * string.length)], number, terminalWords)
        
        terminalCodes[i].push(sevenWords[Math.floor(Math.random() * sevenWords.length)].toUpperCase())
        string.splice(Math.floor(Math.random() * (secondNum - firstNum + 1) + firstNum), 0, terminalCodes[i].toString().split(''))

        firstNum += 12
        secondNum += 12
        
        console.log('Numbers', firstNum, secondNum, terminalCodes, terminalCodes[i], terminalCodes[i].toString(), testArrays)
        
        number.pop()
        i++
        t++
      }
      testArrays.push(terminalCodes)
      // testArrays.shift()
      
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
      
      console.log('TERM', terminalWords, terminalCodes )
      console.log('RICE', sevenWords[Math.floor(Math.random() * sevenWords.length)], sevenWords[Math.floor(Math.random() * sevenWords.length)].split(''))
      console.log('FLAT', string.flat())
      
      return string.flat()
    }
    testArrays.splice(0, 0)
    testArrays.splice(2, 1)

    return setUpWords(newString, newNum)
  }

  // const mouseEnter = event => event.target.style.background = 'green'

  async function typeSentence (sentence, location) {
    const letters = (/[A-Z]/.test(sentence[0]) ) ? sentence[1] : sentence[0].split('') 
    let i = 0;
    console.log('LED', letters)
    while (i < letters.length) {
      await waitForMs()
      location.innerText = letters
      i++
    }

    
  }
  const waitForMs = () => {
    return new Promise(resolve => setTimeout(resolve, 50))
  }

  const mouseEnter = event => {
    const selectedAudio = document.getElementById('audiofile');
    const spanText = document.getElementById('span')
    let nextSibling = event.target.nextElementSibling
    let prevSibling = event.target.previousElementSibling
    let wholeWord = ''
    let currentWord = ''
    let frontWord = ''
    let backWord = ''
    
    event.target.style.background = 'green'
    event.target.style.color = 'black'

    console.log(selectedAudio.src)
    
    selectedAudio.play()
    
    console.log(event.target.innerText, event.target.nextElementSibling, event)
    
    
    spanText.innerText = ''
    frontWord += event.target.innerText
    while (nextSibling && /[a-z]/i.test(nextSibling.innerText) && /[a-z]/i.test(event.target.innerText)) {
      event.target.style.background = '#33dd88'
      // event.target.style.color = 'black'
      nextSibling.style.background = '#33dd88'
      nextSibling.style.color = 'black'
      // wholeWord += event.target.innerText
      // wholeWord += nextSibling.innerText

      frontWord += nextSibling.innerText
      console.log('words', frontWord, 'front')
      nextSibling = nextSibling.nextElementSibling
    }


    currentWord = event.target.innerText

    // backWord += event.target.innerText
    while (prevSibling && /[a-z]/i.test(prevSibling.innerText) && /[a-z]/i.test(event.target.innerText)) {
      event.target.style.background = '#33dd88'
      // event.target.style.color = 'black'
      prevSibling.style.background = '#33dd88'
      prevSibling.style.color = 'black'
      backWord += prevSibling.innerText
      console.log('words', backWord.split('').reverse().join(''), 'back')

      prevSibling = prevSibling.previousElementSibling
    }
    // backWord.split('').reverse().join('')
    wholeWord = backWord.split('').reverse().join('') + frontWord
    console.log('Words, whole', wholeWord)
    typeSentence([event.target.innerText, wholeWord], spanText)


    // terminalAudio(`https://breakout.bernis-hideout.de/robco-industries/sound/k${Math.floor(Math.random() * 10) + 1}.ogg`)
  
  }
  const mouseOut = event => {
    const selectedAudio = document.getElementById('audiofile');
    let nextSibling = event.target.nextElementSibling;
    let prevSibling = event.target.previousElementSibling;

    event.target.style.background = 'transparent';
    event.target.style.color = 'white';
    // event.target.style.color = '#33dd88'
    
    while (nextSibling && /[a-z]/i.test(nextSibling.innerText) && /[a-z]/i.test(event.target.innerText)) {
      // event.target.style.background = '#33dd88'
      // event.target.style.color = 'black'
      nextSibling.style.background = 'transparent'
      nextSibling.style.color = 'white'
      nextSibling = nextSibling.nextElementSibling
    }

    while (prevSibling && /[a-z]/i.test(prevSibling.innerText) && /[a-z]/i.test(event.target.innerText)) {
      // event.target.style.color = 'black'
      prevSibling.style.background = 'transparent'
      prevSibling.style.color = 'white'
      prevSibling = prevSibling.previousElementSibling
    }
    
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
        <p className='header'>4 ATTEMPT(S) LEFT: <span className='span'>█</span><span className='span'>█</span><span className='span'>█</span><span className='span'>█</span></p>
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
          <p>{'>'}<span id='span'></span></p>
        </div>
        
      </div>
      <div>
        <audio id='audiofile' src='https://breakout.bernis-hideout.de/robco-industries/sound/k1.ogg'/>
      </div>
    </>
  )
}

export default App
