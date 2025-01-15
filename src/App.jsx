import React, { useState, useEffect, useMemo, useCallback, createElement } from 'react'
import './App.css'
import LeftText from './LeftText'
import RightText from './RightText'

// import Audios from './audios'

const App = () => {
  const [attempts, setAttempts] = useState(4)
  const [data, setData] = useState([])
  const [sideStrings, setSideStrings] = useState([])
  const [finalLeftCharacter, setFinalLeftCharacter] = useState([])
  const [finalRightCharacter, setFinalRightCharacter] = useState([])
  const [terminalCode, setTerminalCode] = useState([[], [], [], [], [], [], []])
  const [count, setCount] = useState(0)
  const [letter, setLetter] = useState('')
  const [truth, setTruth] = useState(false)
  const [clickedUserWord, setClickedUserWord] = useState('')
  const [randomWords, setChosenRandomWords] = useState()
  const [chosenRandomWord, setChosenRandomWord] = useState('')
  // const [deletedWords, setDeletedWords] = useState([])
  const deletedWords = []
  const lettersNumbers = ['A', 'B', 'C', 'D', 'E', 'F', 
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  const characters = '!@#$%^&*()[]<>{}_-=+|,;./'
  
  const words = []
  const wordDuos = []
  const wordsLeft = []
  const wordsRight = []
  let randomStringWord 
  const testArrays = []
  const leftCharacterString = []
  const rightCharacterString = []
  let clickedDud = ''
  
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
    // const terminalCodeCopy = [[], [], [], [], [], [], []]
    
    const terminalDudHolder = ['[]', '()', '{}', '<>']
    const dudHolder = [0, 1, 2, 3, 4, 5];
    let p = 0

    for (let i = 0; i < 6; i++) {
      console.log('AFTER FIRS QUEEEEE', chosenRandomWord)
      // USE THIS AND POTENTIALLY REMOVE THE WORD THAT BECOMES RANDOM

      if (wordsRight.length === 0 && wordsLeft.length === 0) {
        wordsLeft.push(sevenWords[Math.floor(Math.random() * sevenWords.length)].toUpperCase())
        wordsRight.push(sevenWords[Math.floor(Math.random() * sevenWords.length)].toUpperCase())
      }

      if (wordsRight.indexOf(wordsLeft[i] ) == -1) {
        // wordsRight.push(sevenWords[Math.floor(Math.random() * sevenWords.length)].toUpperCase())
      } else {
        wordsRight.pop()
        wordsRight.push(sevenWords[Math.floor(Math.random() * sevenWords.length)].toUpperCase())
      }
      if (wordsLeft.indexOf(wordsRight[i]) == -1) {
        // wordsLeft.push(sevenWords[Math.floor(Math.random() * sevenWords.length)].toUpperCase())
      } else {
        wordsLeft.pop()
        wordsLeft.push(sevenWords[Math.floor(Math.random() * sevenWords.length)].toUpperCase())
      }
      if (wordsRight.indexOf(wordsRight[i]) == -1) {
        wordsRight.push(sevenWords[Math.floor(Math.random() * sevenWords.length)].toUpperCase())
        console.log('LEMME 1', wordsLeft, wordsRight)
      } else {
        wordsRight.pop()
        console.log('LEMME 2', wordsRight)
        wordsRight.push(sevenWords[Math.floor(Math.random() * sevenWords.length)].toUpperCase())
        // wordsRight.push(sevenWords[Math.floor(Math.random() * sevenWords.length)].toUpperCase())
      }

      if (wordsLeft.indexOf(wordsLeft[i]) == -1) {
        wordsLeft.push(sevenWords[Math.floor(Math.random() * sevenWords.length)].toUpperCase())
      } else {
        wordsLeft.pop()
        wordsLeft.push(sevenWords[Math.floor(Math.random() * sevenWords.length)].toUpperCase())
      }
    }

    for (let i = 0; i < 106; i++) {
      leftCharacterString.push(characters[Math.floor(Math.random() * characters.length)])
      rightCharacterString.push(characters[Math.floor(Math.random() * characters.length)])
      console.log('FINS', leftCharacterString[i])
    }

    while (dudHolder.length !== 0 || p <= 6) {
      terminalCodeCopy[p].unshift(terminalDudHolder[Math.floor(Math.random() * terminalDudHolder.length)][0])
      
      for (let i = 0; i < 6; i++) {
        // setTerminalCode(prevCode => [
        //   ...prevCode,
        //   terminalCode[p].concat(dudCharacters[Math.floor(Math.random() * dudCharacters.length)])
        // ])
        terminalCodeCopy[p].push(dudCharacters[Math.floor(Math.random() * dudCharacters.length)])
        
      }
      dudHolder.pop()
      terminalDudHolder.forEach(element => {
        if (element[0] === terminalCodeCopy[p][0]) terminalCodeCopy[p].push(element[1])
      })
      // setChosenRandomWords(wordsLeft.concat(wordsRight))
      console.log('AFTER', terminalCodeCopy, leftCharacterString, wordsLeft, chosenRandomWord)
      p++
    }
    // setTerminalCode(prevCode => [
    //   ...prevCode,
    //   terminalCode.concat(terminalCodeCopy)
    // ])
    
    const terminalCopy = [...terminalCode]
    let firstNum = 1
    let secondNum = 12
    let i = 0
    let takeAwayNum = 204
    
    while (takeAwayNum !== 0) {
      // if (wordsLeft[i] !== undefined) {
      if (wordsLeft[i] !== undefined && wordsRight[i] !== undefined) {
        
        // console.log('Test', wordsLeft[i], wordsLeft[i].toString().split(''), leftCharacterString)
        console.log('Test', wordsLeft[i], wordsLeft[i].toString().split(''), leftCharacterString)

        leftCharacterString.splice(Math.floor(Math.random() * (secondNum - firstNum + 1) ) + firstNum, 0, wordsLeft[i].toString().toUpperCase().split(''))
        rightCharacterString.splice(Math.floor(Math.random() * (secondNum - firstNum + 1) ) + firstNum, 0, wordsRight[i].toString().toUpperCase().split(''))
        
        firstNum += 12
        secondNum += 12
      }

      
      i++
      takeAwayNum--
    }
    console.log('NEW', leftCharacterString, leftCharacterString.length, )
    for (let i = 0; i < 7; i++) {
      leftCharacterString.splice(Math.floor(Math.random() * leftCharacterString.length), 0, terminalCopy[i] )
      rightCharacterString.splice(Math.floor(Math.random() * leftCharacterString.length), 0, terminalCopy[i] )
      console.log('TESTTTT', finalLeftCharacter, terminalCopy, wordsLeft)
    }
    
    setFinalLeftCharacter(prevChar => [
        ...prevChar,
        finalLeftCharacter.concat(leftCharacterString.flat())
    ])
    setFinalRightCharacter(prevChar => [
      ...prevChar,
      finalRightCharacter.concat(rightCharacterString.flat())
    ])

    
    let newArray = []
    
    for (let i = 0; i < 17; i++) {
      let newString = ''
      for (let i = 0; i < 4; i++) {

        newString += lettersNumbers[Math.floor(Math.random() * lettersNumbers.length)]
        console.log('WOY', typeof newString, newString)
      }
      // newArray.push(lettersNumbers[Math.floor(Math.random() * lettersNumbers.length)]  )
      newArray.push(newString  )
    }

    setSideStrings(prevString => [
      ...prevString,
      sideStrings.concat(newArray)
    ])
    // setChosenRandomWord(wordsLeft[Math.floor(Math.random() * wordsLeft.length)].toUpperCase())
    wordDuos.push(wordsLeft.concat(wordsRight))
    randomStringWord = wordDuos[0].splice(Math.floor(Math.random() * wordDuos.flat().length), 1)
      
    console.log('FISTING', wordsLeft, wordsRight, wordsLeft.concat(wordsRight), wordDuos, 'Num', wordDuos.flat(), randomStringWord, )
    
    setChosenRandomWord(wordsLeft.concat(wordsRight)[Math.floor(Math.random() * lettersNumbers.length)])
    setChosenRandomWords(wordDuos.flat())
  }, [])
  
  console.log('FINS', finalLeftCharacter)
  const randomLetters = () => {
    // const sideStringsCopy = [...sideStrings.split('')]
    
    return sideStrings.flat()
  }
  
  const setUpLetters = () => {
    const newNum = [0, 1, 2, 3, 4, 5];
    const leftCharacterStringCopy = [...leftCharacterString]
    const terminalCopy = [...terminalCode]
    const finalLeftCopy = [...finalLeftCharacter]
    const finalRightCopy = [...finalRightCharacter]
    let firstNum = 1
    let secondNum = 12
    let i = 0

    console.log('AFTER NEW', leftCharacterString, leftCharacterString.length, finalLeftCharacter, finalLeftCopy.flat().length, chosenRandomWord)
    console.log('AFTER WORDS', randomWords)
    return [finalLeftCharacter.flat(), finalRightCharacter.flat()]
  }
  
  async function typeSentence (sentence, location) {
    const letters = (/[A-Z]/.test(sentence[0]) ) ? sentence[1] : sentence[0].split('')
    const typedWords = []
    const characterLetters = []
    const remainder = []
    let i = 0;
    

    location.innerText = ''
    setClickedUserWord(letters)
    console.log('LED', letters, location.innerText)
    console.log('TERMS', terminalCode)
    // if (truth === true) return
    await waitForMs().then(async () => {
      while (i < letters.length) {
      
        // setTimeout(typeSentence, 55)
        
        // console.log('LEDs', letters[i], checkWords, checkWords.join(''), location.innerText, location.innerText.substring(0, 6) === checkWords.join('').substring(0, 6) )
        // !@#$%^&*_=+|,;/.\- \])}>
        // console.log('FOODWCHECK', location.innerText)
        let t = 0;
        console.log('FOODWIFFFF', location.innerText)
        
        await waitForMs()
        if (location.innerText.length < 7 && /[A-Z]/g.test(sentence[0])) {
          if (/[!@#$%^&*_=+|,;/.\-\])}>(<{[]/g.test(location.innerText) && /[A-Z]/g.test(location.innerText)) {
            console.log('FOODWWWW')
            
            location.innerText.replace(/[A-Z]/gi, '')
            return
            
            // setLetter(`${location.innerText.replace(/[A-Z]/gi, '')}`)
          }
          setLetter(prev => prev + letters[i])
          typedWords.push(letters[i])
          
          
          location.innerText += letters[i]
          console.log('FOODWEEKS', location.innerText, typedWords, typedWords.join(''), letter)
        }
        else {
          characterLetters.push(letters[i])
          setLetter(letters)
          location.innerText = letters
          console.log('FOODWEEKST', characterLetters, letter)
        }
        
        console.log('FOODKINS', letter, location.innerText.length)
        console.log('FOODWIFFFS', remainder, letters[i])
  
        // if (/[!@#$%^&*_=+|,;/.\-\])}>(<{[]/gi.test(location.innerText)) console.log('FOODWORKSS')
        
        
        i++
      }
    })
    if (location.innerText.length === 2 && /[!@#$%^&*_=+|,;/.\-\])}>(<{[A-Z]{2}$/gi.test(location.innerText) && /[A-Z]/g.test(location.innerText[1])) {
      console.log('FOODWORKSS', location.innerText, location.innerText[1], location.innerText.split('').shift())
      location.innerText[1].replace(/[A-Z]/, letter)
      location.innerText.substring(0, location.innerText.length - 1)
      location.innerText = location.innerText.split('').shift()
    }

  }

  // const updateText = () => setTruth(false)

  // const mouseMoved = (event) => {
  //   const textLocation = document.getElementById('span'); 
    

  //   console.log('FOODWWWSSS', event.target.innerText, textLocation.innerText)
  //   // if (/[!@#$%^&*_=+|,;/.\-\])}>(<{[A-Z]/g.test(textLocation.innerText) ) {
  //   //   console.log('FOODWORKS')
  //   //   textLocation.innerText = ''
  //   // }
  //   // setTruth(false)
  //   setTruth(true)
  //   clearTimeout(timer)
  //   // timer = setTimeout(typeSentence, 50)
  //   timer = setTimeout(updateText, .5)
  // }

  const waitForMs = () => {
    // return new Promise(resolve => setTimeout(resolve, 55))
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
    // if (/[!@#$%^&* _\-[=+|,;.]/ig.test(event.target.innerText)) setTruth(false)

    OutwardText(event, frontWord, backWord, wholeWord, nextSibling, prevSibling, spanText)
  
  }
  
  const processCodes = (event) => {
    const attemptsLeft = [0, 1, 2, 3]
    console.log('Code', data, clickedDud, clickedDud.length)
    console.log('FOODNEWS', clickedUserWord, chosenRandomWord)
    // setClickedUserWord()
    if (clickedUserWord !== chosenRandomWord) {
      console.log('WOAOOOOA')
      
      console.log('SS', attemptsLeft)

      terminalCode.forEach(item => {
        console.log('FOODTEST222', item)
        if (item.length === 8) console.log('FOODTEST111')
      })
    }
    if (/[A-Z]/g.test(clickedUserWord)) {
      console.log('FOODNEWS')
      setAttempts(attempt => clickedUserWord !== chosenRandomWord ? attempt - 1 : 'WIN')
      setData(data =>
        [
          ...data,
          { id: setCount(prevCount => prevCount.id + 1), name: '>' + clickedUserWord, permission: clickedUserWord !== chosenRandomWord ? '>Access Denied' : '>Access Granted', correct: '>' + event.target.innerText.match(new RegExp(chosenRandomWord, 'g')  ) || [].length }
        ]
      )
    } else if (truth) {
      console.log('DUDSSS')
      console.log('DUDSSTT', terminalCode)
      const updatedTerminals = [...terminalCode]
      const updatedLetters = [...finalLeftCharacter]
      const clickedTerminal = []
      let newSibling = event.target.nextElementSibling
      let prevSibling = event.target.previousElementSibling
      
      let t = 0;

      deleteFakeCodeWords(deletedWords)

      for (let k = 0; k <= 6; k++) {
        for (let i = 0; i < 8; i++) {
          if (event.target.innerText === updatedTerminals[k][0] && newSibling.innerText === updatedTerminals[k][i]) {
            let newWork
            console.log('DUDSSINNERWORKS', terminalCode[k], terminalCode[k][i], updatedTerminals[k], updatedTerminals[k][i], updatedTerminals[k][0])
            
            // updatedTerminals[k][i] = '.'
            console.log('DUDQ', updatedTerminals, updatedTerminals[k], clickedTerminal)
            console.log('FISTING2', randomWords)
            

            // console.log('DUDQF', newWork)
            clickedTerminal.push(updatedTerminals[k])
            while (t <= 6  ) {
              console.log('DUDSSNEW', newSibling.innerText, updatedTerminals[k], updatedTerminals[k][t], updatedTerminals, clickedTerminal, t)
              event.target.innerText = '.'
              newSibling.innerText = '.'
              updatedTerminals[k][t] = '.'
              
              t++
              newSibling = newSibling.nextElementSibling
            }
            
            if (updatedTerminals[k][6] === '.') updatedTerminals[k][7] = '.'
            console.log('DUDSSINNERTEST', updatedTerminals, updatedTerminals[k][i], newSibling.innerText, newSibling.innerText === updatedTerminals[k][i])
            
            newSibling = newSibling.nextElementSibling
          }
          
            // console.log('DUDSSINNER', terminalCode, terminalCode[k], terminalCode[k][0], terminalCode[k][i], updatedTerminals)
        }
        console.log('DUDTTF')
        for (let i = updatedTerminals[k].length - 1; i >= 0; i--) {
          console.log('DUDTT', updatedTerminals)
          if (prevSibling.innerText == null) return
          if (event.target.innerText === updatedTerminals[k][7] && prevSibling.innerText === updatedTerminals[k][i]) {
            console.log('DUDTTT TRIP', updatedTerminals[k], terminalCode)
            
            updatedTerminals[k][i] = '.'

            if (updatedTerminals[k][0] === '.') updatedTerminals[k][7] = '.'
            
            while (t !== 7) {
              event.target.innerText = '.'
              prevSibling.innerText = '.'
              prevSibling = prevSibling.previousElementSibling
              t++
            }
            
            prevSibling = prevSibling.previousElementSibling
          }
        }
      }
    }
    
  }

  const deleteFakeCodeWords = () => {
    const newCharacters = [...finalLeftCharacter]
    const newWords = [...randomWords]
    
    let t = 0;
    console.log('FIST', chosenRandomWord, wordsLeft)
    let randomizedWord = ''
    let randomIndex
    // for (let i = 0; i < newCharacters.length; i++) {
    //   for (let o = 0; o < randomWords.length; o++) {
    //     while (t !== 8) {
    //       string += randomWords[o][t]
    //       console.log('AFTER FIR', randomWords[t], randomWords[t][0], randomWords[o][t].toUpperCase(), string)
          
    //       // if (newCharacters[i] == randomWords[o][t]) console.log('AFTER FISTR')
    //       t++
    //     }
    //   }
    // }
    // for (let i = 0; i < newCharacters.length; i++) {
    //   for (const word of randomWords) {
    //     while (t !== 7) {
    //       console.log('AFTER FIRS', word, word[t], randomWords[t])
    //       if (newCharacters[i] == word[t]) console.log('AFTER FIRST ME')
          
    //       t++
    //     }
    //   }
    // }
    
    randomizedWord = randomWords[Math.floor(Math.random() * randomWords.length)].toUpperCase()
    
    
    let p = 0;
    let index = newCharacters[0].join('').match(randomizedWord).index
    console.log('FISTING4', randomizedWord, randomWords, newCharacters[0].join('').match(randomizedWord))
    for (let i = 0; i < newCharacters.length; i++) {
      if (newCharacters[0].join('').search(randomizedWord)) {
        console.log('AFTER FIR TED', chosenRandomWord)
        randomIndex = newCharacters[i].join('').search(randomizedWord)
        console.log('AFTER FIR FIN', newCharacters, newCharacters[i].join('').match(randomizedWord), newCharacters[i].join('').match(randomizedWord).input[newCharacters[i].join('').match(randomizedWord).index])
        while (p !== 7) {
          newCharacters[i].join('').match(randomizedWord).input[newCharacters[i].join('').match(randomizedWord).index++]
          console.log('AFTER FIR FIGS', newCharacters[i].join('').match(randomizedWord).input[index++], )
          p++
        }
      }
      // if (newCharacters[0].join(''))
        console.log('AFTER FIRS MEEE', newCharacters[0].join(''), newCharacters[0].join('').search(randomizedWord), randomIndex, newCharacters[randomIndex])
      if (newCharacters[0][randomIndex] === randomizedWord[t]) {
        console.log('AFTER FIRS WIN', newCharacters[i], newCharacters[0].join('').search(randomizedWord), newCharacters[0][randomIndex], randomIndex)
        
        console.log('UpdatedFIRST', newCharacters[0].join('').match(randomizedWord), newCharacters[0].join('').search(randomizedWord), randomWords)
        // setDeletedWords(prev => [...prev, randomizedWord])
        deletedWords.push(randomizedWord)
        // newWords.filter(word => !deletedWords.includes(word))
        
        setChosenRandomWords(randomWords.filter(word => !deletedWords.includes(word)))
        console.log('UpdatedSEC', randomWords)
        while (t !== 7) {
            console.log('AFTER FIRS', randomWords[t], randomizedWord, chosenRandomWord, randomizedWord[t], newCharacters[i], randomIndex)
            if (newCharacters[0][randomIndex] === randomizedWord[t].toUpperCase() && randomizedWord !== chosenRandomWord) {
              console.log('AFTER FIRST S MEEE', newCharacters[0], newCharacters[0][randomIndex])
              newCharacters[0][randomIndex] = '.'
            } else {
              console.log('AFTER FIRS FAIL FAIL', randomizedWord, chosenRandomWord)
              while (randomizedWord !== chosenRandomWord) {
                console.log('AFTER FIRS WORKS WORKS WORKS')
                randomizedWord = randomWords[Math.floor(Math.random() * randomWords.length)].toUpperCase()
              }
            }
            // newWords.filter(word => word !== randomizedWord)
            t++
            randomIndex++
          }
        }
        
        console.log('UpdatedTerm', randomizedWord, randomWords, newWords, newWords.filter(word => !deletedWords.includes(word)), deletedWords)
        console.log('UpdatedIndex', newCharacters[0].join('').match(randomizedWord), newCharacters[0].join('').search(randomizedWord), newCharacters[0].join(''), newCharacters[0].join('').search(randomizedWord), randomizedWord)

        console.log('AFTER FIR TTT', newCharacters[0], newCharacters[0][i], randomizedWord[i])
    }
    setFinalLeftCharacter(newCharacters)
    console.log('AFTER FIR FINER', finalLeftCharacter)
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

  const OutwardText = (event, fWord, bWord, wWord, nSibling, pSibling, sText) => {

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
    console.log('Jecks', event.target.innerText)
    // if (/[()<>[\]{}]/gi.test(event.target.innerText)  ) {
    if (/[ (<[{ ]/.test(event.target.innerText)  ) {
      
      console.log('ALMOST', )
      let i = 0
     
      //  /!@#$%^&*_-=+|,;./i.test(nSibling.innerText)
      //  /[ (<[{ ]/.test(event.target.innerText)
      //  / [ >\]}) ] /.test(nSibling.innerText)
    }
    console.log('CHECKERS', nSibling, nSibling.innerText, /[!@#$%^&* _\-[=+|,;.]/ig.test(event.target.innerText) , /[!@#$%^&* _=+|,;.-]/ig.test(nSibling.innerText) )
    let i = 0
    let dudArray = []
    let dudArray2= []
    let dudArray3= []
    let eventSibling = event.target.nextElementSibling
    let prevEventSibling = event.target.previousElementSibling

    while (nSibling && /[!@#$%^&*_=+|,;/.\- \])}>]/g.test(nSibling.innerText) && /[(<{[]/.test(event.target.innerText) && i <= 6 ) {
      // \])}>
      console.log('Almonds', nSibling, nSibling.nextElementSibling, dudArray3)

      dudArray.push(event.target.innerText)
      dudArray2.push(nSibling.innerText)
      if (dudArray2.length <= 7 ) {
        
        dudArray3.push(dudArray[0], dudArray2.join(''))
        console.log('FOOD1',dudArray2, dudArray3, )
        
      } 

      if (dudArray3.length === 14 && dudArray3[12] && dudArray3[13]  ) {
        
        console.log('FOOD678', dudArray3[13], dudArray3[13][6], dudArray3[13][6] === '}' || dudArray3[13][6] === '>' || dudArray3[13][6] === ')' || dudArray3[13][6] === ']')
        console.log('FOODTEST', '{' === '}', /[()|[\]|{}]/g.test('{' === '}'), terminalCode)

        
        for (let o = 0; o != 6; o++) {
          if (dudArray2[o] === '>' || dudArray2[o] === ']' || dudArray2[o] === ')' || dudArray2[o] === '}') return
        } 
        if (dudArray3[13][6] === '}' && dudArray3[12] === '{' || dudArray3[13][6] === '>' && dudArray3[12] === '<' || dudArray3[13][6] === ')' && dudArray3[12] === '(' || dudArray3[13][6] === ']' && dudArray3[12] === '[') {
          
          let p = 0;
          clickedDud = dudArray[0]
          while (p !== 7) {
            console.log('FOOD9393', p, dudArray, dudArray2, terminalCode)

            clickedDud += eventSibling.innerText
            console.log('FOODFIND', clickedDud, )
            event.target.style.background = '#33dd88'
            eventSibling.style.background = '#33dd88'
            eventSibling = eventSibling.nextElementSibling
            p++
          }
          
                    // nSibling.style.background = '#33dd88'
                    // nSibling.style.color = 'black'
          setTruth(true)
        } 
        
        // if (dudArray3[13][6] === '{' || dudArray3[13][6] === '<' || dudArray3[13][6] === '(' || dudArray3[13][6] === '[') {

        // }
        console.log('FOODFINAL', clickedDud)
        
        
      }
      // if (/[!@#$%^&* _\-[=+|,;.]/ig.test(event.target.innerText)) setTruth(false)

      console.log('DUDS', dudArray, dudArray2, dudArray2[5], dudArray2.length)
      
      nSibling = nSibling.nextElementSibling
      i++
    }
    while (pSibling && /[(<[{ !@#$%^&*_=+|,;/.-]/g.test(pSibling.innerText) && /[\])}>]/.test(event.target.innerText) && i <= 6 ) {
      dudArray.push(event.target.innerText)
      dudArray2.unshift(pSibling.innerText)
      if (dudArray2.length <= 7 ) {
        
        dudArray3.unshift(dudArray2.join(''), dudArray[0] )
        console.log('FOOD1',dudArray2, dudArray3, )
        
      }

      if (dudArray3.length === 14 && dudArray3[0] && dudArray3[1] ) {
        
        console.log('FOOD678', dudArray3[13], dudArray3[13][6], dudArray3[13][6] === '{' || dudArray3[13][6] === '<' || dudArray3[13][6] === '(' || dudArray3[13][6] === '[')
        
        for (let o = 1; o != 7; o++) {
          if (dudArray2[o] === '<' || dudArray2[o] === '[' || dudArray2[o] === '(' || dudArray2[o] === '{') return
        }
        
        if (dudArray3[0][0] === '{' && dudArray3[1] === '}' || dudArray3[0][0] === '<' && dudArray3[1] === '>' || dudArray3[0][0] === '(' && dudArray3[1] === ')' || dudArray3[0][0] === '[' && dudArray3[1] === ']') {
          
          let p = 0;
          clickedDud = dudArray[0]
          
          while (p !== 7) {
            console.log('FOOD9393', p, dudArray, dudArray2, terminalCode)
            

            clickedDud += eventSibling.innerText
            console.log('FOODFIND', clickedDud, )
            event.target.style.background = '#33dd88'
            prevEventSibling.style.background = '#33dd88'

            prevEventSibling = prevEventSibling.previousElementSibling
            p++
          }
          setTruth(true)
        }

        // if (dudArray3[13][6] === '{' || dudArray3[13][6] === '<' || dudArray3[13][6] === '(' || dudArray3[13][6] === '[') {

        // }
        console.log('FOODFINAL', clickedDud)
        
        
      }
      pSibling = pSibling.previousElementSibling
      i++
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
    setTruth(false)

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
        <p className='header'>{attempts} ATTEMPT(S) LEFT: <span className='span'>█</span><span className='span'>█</span><span className='span'>█</span><span className='span'>█</span></p>
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
            // onMoved={mouseMoved}
          />
          <RightText 
            lettersNumbers={lettersNumbers} 
            characters={characters}
            randomLetters={randomLetters}
            setUpLetters={setUpLetters}
            onMouseHover={mouseEnter}
            onMouseOut={mouseOut}
            onClicked={processCodes}
          />
          <div className='text'>
            { data.map(info => (
            <div key={info.id}>
              <p>{info.name}</p>
              <p>{info.permission}</p>
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
