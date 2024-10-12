import React, { useState, useEffect, useMemo, useCallback, createElement } from 'react'
import './App.css'
import LeftText from './LeftText'
import RightText from './RightText'

// import Audios from './audios'

const App = () => {
  const [data, setData] = useState([])
  const [words, setWords] = useState([])
  const [characterString, setCharacterString] = useState('')
  const [terminalCode, setTerminalCode] = useState([[], [], [], [], [], [], [], [], []])
  // const [terminalDudHolder, setTerminalDudHolder] = useState(['[]', '()', '{}', '<>'])
  

  const [count, setCount] = useState(0)
  const lettersNumbers = ['A', 'B', 'C', 'D', 'E', 'F', 
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  const characters = '!@#$%^&*()[]<>{}_-=+|,;./'
  
  const testArrays = []
  let chosenWord = ''
  let clickedWord = ''
  
  useEffect(() => {
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
          'Exotica','Helluva','Arabica'
    ];
    const dudCharacters = '!@#$%^&*_-=+|,;./'
    const terminalCodeCopy = [...terminalCode]
    const terminalDudHolder = ['[]', '()', '{}', '<>']
    const dudHolder = [0, 1, 2, 3, 4];
    let p = 0

    for (let i = 0; i < 6; i++) {
      setWords(prevWord => [
        ...prevWord,
        words.concat(sevenWords[Math.floor(Math.random() * sevenWords.length)])
      ])
    }
    

    for (let i = 0; i < 90; i++) {
      setCharacterString(prevLetter => prevLetter + characters[Math.floor(Math.random() * characters.length)])
    }
    // setTerminalCode(prevLetter => [...prevLetter, terminalCode.concat(characterString.split('')) ])
    while (dudHolder.length !== 0 || p <= 8) {
      terminalCodeCopy[p].unshift(terminalDudHolder[Math.floor(Math.random() * terminalDudHolder.length)][0])
      
      for (let i = 0; i < 6; i++) {
        // setTerminalCode(prevCode => [
        //   ...prevCode,
        //   terminalCode[p].concat(dudCharacters[Math.floor(Math.random() * dudCharacters.length)])
        // ])
        terminalCodeCopy[p].push(dudCharacters[Math.floor(Math.random() * dudCharacters.length)])
        
      }
      console.log('TEST',terminalCode, terminalCode[p])
      dudHolder.pop()
      terminalDudHolder.forEach(element => {
        if (element[0] === terminalCodeCopy[p][0]) terminalCodeCopy[p].push(element[1])
      })
      setTerminalCode(prevCode => [
        ...prevCode,
        terminalCode.concat(terminalCodeCopy)
      ])
      console.log('AFTER', terminalCodeCopy, characterString)
      p++
    }

  }, [])


  const randomLetters = (array, num) => {
    let newString = ''
    
    for (let i = 0; i < num; i++) {
       newString += array[Math.floor(Math.random() * array.length)]
    }

    return newString
  }
  
  const setUpLetters = () => {
    console.log('STATE', characterString, characterString.split('').length, words, terminalCode)
    const newNum = [0, 1, 2, 3, 4, 5];
    const characterStringCopy = [...characterString]
    const characterNumbers = [...characterString.split('')]
    const terminalCopy = [...terminalCode]
    let firstNum = 1
    let secondNum = 12
    let i = 0
    
    // INDEX/NUM IS 90
    // console.log('HEY', words[i], words[1].toString())

    
    while (characterNumbers.length !== 0) {
      // characterStringCopy.splice(Math.floor(Math.random() * (secondNum - firstNum + 1) + firstNum), 0, words[i].split(''))

      
      if (words[i] !== undefined) {
        console.log('Test', words[i], words[i].toString().split(''))

        characterStringCopy.splice(Math.floor(Math.random() * (secondNum - firstNum + 1) )+ firstNum, 0, words[i].toString().toUpperCase().split(''))
      }

      // words.map((word, index) => {
      //   console.log('HEY',index, words, word, word.toString().split(''), characterNumbers )
      //   // characterStringCopy.splice(Math.floor(Math.random() * ))
      //   characterStringCopy.splice(Math.floor(Math.random() * (secondNum - firstNum + 1) + firstNum), 0, word.toString().split(''))
      // })

      firstNum += 12
      secondNum += 12
      i++

      characterNumbers.pop()
    }

    for (let i = 0; i < 9; i++) {
      characterStringCopy.splice(Math.floor(Math.random() * characterStringCopy.length), 0, terminalCopy[i] )
    }

    // console.log('NEW', characterStringCopy.flat(), characterStringCopy.length, terminalCopy)
    
    
    

    // IF YOU DONT FIND A WAY, USE INNER FUNCS WITHOUT STATE
    // setCharacterString(characterStringCopy.flat().join('').toString())

    console.log('AFTER NEW', characterStringCopy,  characterStringCopy.flat().join('').toString().length)

    // while (newNum.length !== 0) {

    // }
    // return characterStringCopy.flat().join('').toString()
    return characterStringCopy.flat()
  }




  // const setUpLetters = (array, num) => {
  //   const newNum = [0, 1, 2, 3, 4, 5]
  //   const dudLetters = [0, 1, 2, 3, 4]
  //   const blockHolder = ['[]', '()', '{}', '<>']
  //   const characterHolder = '!@#$%^&*_-=+|,;./'
  //   const terminalWords = [[], [], [], [], [], [], [], [], []];
  //   const terminalCodes = [[], [], [], [], [], []]
  //   const newString = []
    
  //   for (let i = 0; i < num; i++) {
  //     newString.push(array[Math.floor(Math.random() * array.length)])
  //   }
    

  //   const setUpWords = (string, number) => {
  //     const sevenWords = ['Formula','Dilemma','Diploma','Replica','Grandma','Spectra','Persona',
  //     'Ammonia','Antenna','Stamina','Malaria','Militia','Vanilla','Bonanza','Inertia','Sequoia',
  //     'Algebra','Cholera','Bohemia','Bologna','Alameda','Gorilla','Nirvana','Grandpa','Panacea',
  //     'Alumina','Amnesia','Candida','Tequila','Regatta','Mascara','Magenta','Bulimia','Indicia',
  //     'Gondola','Veranda','Urethra','Granola','Myeloma','Candela','Dyspnea','Sarcoma','Cantina',
  //     'Rosacea','Regalia','Rotunda','Madrona','Corpora','Alfalfa','Myalgia','Gangsta','Bravura',
  //     'Caldera','Anaemia','Tessera','Yeshiva','Trachea','Cordoba','Ganglia','Aphasia','Chimera',
  //     'Rubella','Lantana','Breccia','Spatula','Hypoxia','Savanna','Paprika','Novella','Propria',
  //     'Erotica','Giardia','Fuchsia','Taffeta','Cortina','Fistula','Arugula','Ricotta','Cannula',
  //     'Adenoma','Beretta','Corolla','Piranha','Lasagna','Cantata','Ephedra','Mahatma','Marimba',
  //     'Tempura','Naphtha','Polenta','Silesia','Viremia','Purpura','Sultana','Pergola','Emerita',
  //     'Exotica','Helluva','Arabica']
      
  //     useEffect(() => {
  //       console.log('checked', sevenWords, chosenWord, testArrays)
  //       chosenWord = testArrays[1][Math.floor(Math.random() * testArrays[1].length)].toString()
  //     }, [])

  //     let firstNum = 1
  //     let secondNum = 12
  //     let i = 0
  //     let t = 0;

  //     while (number.length !== 0 ) {
  //       console.log('First line', string.indexOf(string[Math.floor(Math.random() * string.length)]), string[Math.floor(Math.random() * string.length)], number, terminalWords)
        
  //       terminalCodes[i].push(sevenWords[Math.floor(Math.random() * sevenWords.length)].toUpperCase())
  //       string.splice(Math.floor(Math.random() * (secondNum - firstNum + 1) + firstNum), 0, terminalCodes[i].toString().split(''))

  //       firstNum += 12
  //       secondNum += 12
        
  //       console.log('Numbers', firstNum, secondNum, terminalCodes, terminalCodes[i], terminalCodes[i].toString(), testArrays)
        
  //       number.pop()
  //       i++
  //       t++
  //     }
  //     testArrays.push(terminalCodes)
      
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
      
  //     console.log('TERM', terminalWords, terminalCodes )
  //     console.log('RICE', sevenWords[Math.floor(Math.random() * sevenWords.length)], sevenWords[Math.floor(Math.random() * sevenWords.length)].split(''))
  //     console.log('FLAT', string.flat())
      
  //     return string.flat()
  //   }

  //   testArrays.splice(0, 0)
  //   testArrays.splice(2, 1)

  //   return setUpWords(newString, newNum)
  // }


  async function typeSentence (sentence, location) {
    const letters = (/[A-Z]/.test(sentence[0]) ) ? sentence[1] : sentence[0].split('') 
    const checkWords = []
    let i = 0;
    
    location.innerText = ''
    console.log('LED', letters, checkWords, location.innerText)
    
    while (i < letters.length) {
      await waitForMs()
      checkWords.push(letters[i])
      console.log('LEDs', letters[i], checkWords, checkWords.join(''), location.innerText, location.innerText.substring(0, 6) === checkWords.join('').substring(0, 6) )
      
      if (location.innerText.length < 7 && /[A-Z]/.test(sentence[0])) location.innerText += letters[i]
      else location.innerText = letters
      
      i++
    }
    retrieveCode(location.innerText)
  }

  const waitForMs = () => {
    return new Promise(resolve => setTimeout(resolve, 55))
  }

  async function mouseEnter (event) {
    const selectedAudio = document.getElementById('audiofile');
    const spanText = document.getElementById('span')
    let nextSibling = event.target.nextElementSibling
    let prevSibling = event.target.previousElementSibling
    let wholeWord = ''
    let frontWord = ''
    let backWord = ''
    
    event.target.style.background = 'green' 
    event.target.style.color = 'black'

    console.log(selectedAudio.src)
    
    selectedAudio.play()
    
    console.log(event.target.innerText, event.target.nextElementSibling, event)
    
    spanText.innerText = ''
    
    OutwardText(event, frontWord, backWord, wholeWord, nextSibling, prevSibling, spanText)
  
  }
  // const processCodes = useMemo((event) => {
    

  // }, [clickedWord])
  const clickTester = () => {
    if (clickedWord !== chosenWord) {
      setData(
        [
          ...data,
          { id: 0, name: clickedWord, correct: event.target.innerText.match(new RegExp(chosenWord, 'g')  )|| [].length }
        ]
      )
    }
  } 
  // const processCodes = useCallback(() => {
  //   console.log('Code', clickedWord, chosenWord)
    
  //   clickTester()

  // }, [setData])

  const processCodes = (event) => {
    console.log('Code', clickedWord, chosenWord, letters, data)
    
    if (clickedWord !== chosenWord) {
      setData(
        [
          ...data,
          { id: setCount(prevCount => prevCount.id + 1), name: clickedWord, correct: event.target.innerText.match(new RegExp(chosenWord, 'g')  )|| [].length }
        ]
      )
    }

    return
  }
  console.log(data)
  const createNewElements = ({ word, accessCode }) => {
    return createElement(
      'p',
      { className: 'code-desc' },
      `> ${'word'}`,
      createElement('p', {className: 'code-desc'}, 'Access denied'),
      createElement('p', {className: 'code-desc'}, 'Test'),
    )
  }
  const retrieveCode = (code) => clickedWord = code

  const OutwardText = (event, fWord, bWord, wWord, nSibling, pSibling, sText) => {
    console.log('PIG', 'CODE', event, chosenWord)


    fWord += event.target.innerText
    while (nSibling && /[a-z]/i.test(nSibling.innerText) && /[a-z]/i.test(event.target.innerText)) {
      event.target.style.background = '#33dd88'
      // event.target.style.color = 'black'
      nSibling.style.background = '#33dd88'
      nSibling.style.color = 'black'
      // wWord += event.target.innerText
      // wWord += nSibling.innerText

      fWord += nSibling.innerText
      console.log('words', fWord, 'front')
      nSibling = nSibling.nextElementSibling
    }
    // currentWord = event.target.innerText
    
    // backWord += event.target.innerText
    while (pSibling && /[a-z]/i.test(pSibling.innerText) && /[a-z]/i.test(event.target.innerText)) {
      event.target.style.background = '#33dd88'
      // event.target.style.color = 'black'
      pSibling.style.background = '#33dd88'
      pSibling.style.color = 'black'
      bWord += pSibling.innerText
      console.log('words', bWord.split('').reverse().join(''), 'back')
      pSibling = pSibling.previousElementSibling
    }
    
    wWord = bWord.split('').reverse().join('') + fWord
    
    typeSentence([event.target.innerText, wWord], sText)
  }
  
  const mouseOut = event => { 
    const selectedAudio = document.getElementById('audiofile');
    let nextSibling = event.target.nextElementSibling;
    let prevSibling = event.target.previousElementSibling;

    event.target.style.background = 'transparent';
    event.target.style.color = 'white';
    
    if (document.getElementById('span').innerText.length > 7) document.getElementById('span').innerText.substring(0, 8)
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
            onClicked={processCodes}
          />
          <RightText 
            lettersNumbers={lettersNumbers} 
            characters={characters}
            randomLetters={randomLetters}
            setUpLetters={setUpLetters}
          />
          <div>
            { data.map(info => (
            <div key={info.id}>
              <p>{info.name}</p>
              <p>Access Denied</p>
              <p>{info.correct}/7 correct</p>
            </div>
          )) } 
          <p>{'>'}<span id='span'></span></p>
          </div>
          
          
        </div>
        
      </div>

      <div>
        <audio id='audiofile' src='https://breakout.bernis-hideout.de/robco-industries/sound/k1.ogg'/>
      </div>
    </>
  )
}
App.displayName = 'App'

export default App
