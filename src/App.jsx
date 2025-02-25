import React, { useState, useEffect, useRef, createElement } from 'react'
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
  const [allowance, setAllowance] = useState(['█', '█', '█', '█'])
  const [terminalCode, setTerminalCode] = useState([[], [], [], [], [], [], []])
  const [rightTerminalCode, setRightTerminalCode] = useState([[], [], [], [], [], [], []])
  const [count, setCount] = useState(0)
  const [letter, setLetter] = useState('')
  const [truth, setTruth] = useState(false)
  const [allowed, setAllowed] = useState(false)
  const [clickedUserWord, setClickedUserWord] = useState('')
  const [randomWords, setChosenRandomWords] = useState()
  const [chosenRandomWord, setChosenRandomWord] = useState('')
  // const [deletedWords, setDeletedWords] = useState([])
  const allowanceR = ['█', '█', '█', '█']
  const deletedWords = []
  const lettersNumbers = ['A', 'B', 'C', 'D', 'E', 'F', 
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  const characters = '!@#$%^&*()[]<>{}_-=+|,;./'
  const ElementReference = useRef(null)
  const Allowance = useRef(null)
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
    const rightTerminalCodeCopy = [...rightTerminalCode]
    // const terminalCodeCopy = [[], [], [], [], [], [], []]
    
    const terminalDudHolder = ['[]', '()', '{}', '<>']
    const dudHolder = [0, 1, 2, 3, 4, 5];
    const arrayChoice = ['left', 'right']
    const randomAllowance = ['W', 'I', 'N', 'ALLOWANCE REPLENISHED', 'N', 'N', 'E', 'R']
    let p = 0

    for (let i = 0; i < 6; i++) {
      console.log('AFTER FIRS QUEEEEE', chosenRandomWord)
      // STILL COPYING WORDS IN DIFFERENT ARRAYS
      if (wordsLeft.length !== new Set(wordsLeft).size) {
        console.log('HIGGYL', wordsLeft, wordsRight)
        wordsLeft.pop()
        wordsLeft.push(sevenWords[Math.floor(Math.random() * sevenWords.length)].toUpperCase())
      }
      if (wordsRight.length !== new Set(wordsRight).size) {
        console.log('HIGGYR', wordsLeft, wordsRight)
        wordsRight.pop()
        wordsRight.push(sevenWords[Math.floor(Math.random() * sevenWords.length)].toUpperCase())
      }

      if (wordsRight.length === 0 && wordsLeft.length === 0) {
        wordsLeft.push(sevenWords[Math.floor(Math.random() * sevenWords.length)].toUpperCase())
        wordsRight.push(sevenWords[Math.floor(Math.random() * sevenWords.length)].toUpperCase())
      } else {
        wordsLeft.push(sevenWords[Math.floor(Math.random() * sevenWords.length)].toUpperCase())
        wordsRight.push(sevenWords[Math.floor(Math.random() * sevenWords.length)].toUpperCase())
      }

    }
    console.log('CHOICES', wordsLeft, wordsRight)

    for (let i = 0; i < 130; i++) {
      leftCharacterString.push(characters[Math.floor(Math.random() * characters.length)])
      rightCharacterString.push(characters[Math.floor(Math.random() * characters.length)])
      console.log('FINS', leftCharacterString[i])
    }

    while (dudHolder.length !== 0 || p <= 6) {
      terminalCodeCopy[p].unshift(terminalDudHolder[Math.floor(Math.random() * terminalDudHolder.length)][0])
      rightTerminalCodeCopy[p].unshift(terminalDudHolder[Math.floor(Math.random() * terminalDudHolder.length)][0])
      
      for (let i = 0; i < 6; i++) {
        
        terminalCodeCopy[p].push(dudCharacters[Math.floor(Math.random() * dudCharacters.length)])
        rightTerminalCodeCopy[p].push(dudCharacters[Math.floor(Math.random() * dudCharacters.length)])
      }
      dudHolder.pop()
      terminalDudHolder.forEach(element => {
        if (element[0] === terminalCodeCopy[p][0]) terminalCodeCopy[p].push(element[1])
        if (element[0] === rightTerminalCodeCopy[p][0]) rightTerminalCodeCopy[p].push(element[1])
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
      if (wordsLeft[i] !== undefined && wordsRight[i] !== undefined ) {
        
        // console.log('Test', wordsLeft[i], wordsLeft[i].toString().split(''), leftCharacterString)
        console.log('CHOICE', wordsLeft[i], wordsLeft[i].toString().split(''), chosenRandomWord)

        leftCharacterString.splice(Math.floor(Math.random() * (secondNum - firstNum + 1) ) + firstNum, 0, wordsLeft[i].toString().toUpperCase().split(''))
        rightCharacterString.splice(Math.floor(Math.random() * (secondNum - firstNum + 1) ) + firstNum, 0, wordsRight[i].toString().toUpperCase().split(''))
        
        firstNum += 12
        secondNum += 30
      }

      
      i++
      takeAwayNum--
    }
    console.log('NEW', leftCharacterString, leftCharacterString.length, )
    for (let i = 0; i < 4; i++) {
      leftCharacterString.splice(Math.floor(Math.random() * leftCharacterString.length), 0, terminalCopy[i] )
      rightCharacterString.splice(Math.floor(Math.random() * leftCharacterString.length), 0, rightTerminalCodeCopy[i] )
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

    // wordDuos.push(wordsLeft.concat(wordsRight))
    // randomStringWord = wordDuos[0].splice(Math.floor(Math.random() * wordDuos.flat().length), 1)
    
    wordDuos.push(wordsLeft, wordsRight)
    
    randomStringWord = wordDuos[Math.floor(Math.random() * wordDuos.length)].splice(Math.floor(Math.random() * wordDuos.length), 1)
      
    console.log('FIST', wordsLeft, wordsRight, wordDuos, 'Num', randomStringWord, )
    
    setChosenRandomWord(randomStringWord)
    setChosenRandomWords(wordDuos)
  }, [])

  useEffect(() => {

  }, )

  useEffect(() => {
    const elementCount = ElementReference.current;

    if (elementCount.childNodes.length === 7) elementCount.firstChild.remove()
    console.log('ASUS', elementCount, elementCount.childNodes, elementCount.childNodes[0])
  },)
  
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
    const chooseOne = ['left', 'right']
    const randomAllowance = ['W', 'I', 'N', 'ALLOWANCE REPLENISHED', 'N', 'N', 'E', 'R']
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
      
      console.log('HIGGYSSSS', chosenRandomWord, chosenRandomWord[0].split(''), clickedUserWord, (chosenRandomWord[0].match(new RegExp(clickedUserWord.split(''), 'gi') ) || []), clickedUserWord.split('').join(' ')[0])
      // document.getElementById('attempts').removeChild(document.getElementById('attempts').lastChild)
      if (attempts != 1 && clickedUserWord != chosenRandomWord) {
        // document.getElementById('attempts').removeChild(document.getElementById('attempts').lastChild)
        console.log('CHOICERSRT', allowance.slice(0, attempts - 1))
        
        setAttempts(attempt => attempt - 1)
        setAllowance([...allowance.slice(2, attempts), allowance.slice(-1)])
        // setAllowance([...allowance.slice(0, attempts), ...allowance.filter((element, index) => ) ])
      } else if (clickedUserWord != chosenRandomWord.toString()) {
        console.log('ATTEMPT11')
        console.log('CHOICE122333')
        setAttempts(attempt => attempt - 1)
        setAllowance([])
        document.getElementById('main-div').classList.add('div-main')
      } else document.getElementById('main-div').classList.add('div-main')
      console.log('DUDES1', truth)
      console.log('CHOICE', chosenRandomWord)
      console.log('ATTEMPTS', attempts, clickedUserWord, chosenRandomWord, clickedUserWord == chosenRandomWord.toString())
      setData(data =>
        [
          ...data,
          { id: setCount(prevCount => prevCount.id + 1), name: '>' + clickedUserWord, permission: clickedUserWord !== chosenRandomWord ? '>Access Denied' : '>Access Granted', correct: '>' + (chosenRandomWord[0].match(new RegExp(clickedUserWord.split('').join('|'), 'g') ) || []).length + '/7 correct' }
        ]
      )
    } else if (truth) {
      console.log('DUDSSTT', terminalCode)
      const updatedTerminals = [...terminalCode]
      const updatedRightTerminal = [...rightTerminalCode]
      const updatedLetters = [...finalLeftCharacter]
      const clickedTerminal = []
      let allowanceRep = Allowance.current
      let newSibling = event.target.nextElementSibling
      let prevSibling = event.target.previousElementSibling
      
      let t = 0;

      if (randomAllowance[Math.floor(Math.random() * randomAllowance.length)] == 'ALLOWANCE REPLENISHED' && attempts < 4) {
      
        console.log('CHOICEWORK', attempts, allowance)
        // while (attempts != 4) {
        //   console.log('CHOICEWOOOO', attempts, allowance)
        //   // setAllowance([...attempts, '█'])
        //   setAttempts(attempts + 1)
        //   // setAllowance(prev => [...prev, '█'])
          
        // }
        setAllowed(true)
        setAttempts(4)
        setAllowance(['█', '█', '█', '█'])
        
        console.log('CHOICESSSS', allowanceRep)
        
      }
      deleteFakeCodeWords(chooseOne)

      // LOOK AT THESE SERIES UNDER HERE TO SEE IF IT COULD BE REFACTORED
      for (let k = 0; k <= 6; k++) {
        if (event.target.innerText == '[' || event.target.innerText == '{' || event.target.innerText == '<' || event.target.innerText == '(') {
          for (let i = 0; i < 8; i++) {
            console.log('XMEN', updatedTerminals, updatedTerminals[k], updatedRightTerminal)
            if (event.target.innerText === updatedTerminals[k][0] && newSibling.innerText === updatedTerminals[k][i]) {
              console.log('XMEN1')
              console.log('DUDSSINNERWORKS', terminalCode[k], terminalCode[k][i], updatedTerminals[k], updatedTerminals[k][i], updatedTerminals[k][0])
              
              // updatedTerminals[k][i] = '.'
              console.log('DUDQ', updatedTerminals, updatedTerminals[k], clickedTerminal)
              console.log('FIST2', randomWords)
              

              clickedTerminal.push(updatedTerminals[k])
              while (t <= 6 ) {
                console.log('DUDSSNEW', newSibling.innerText, updatedTerminals[k], updatedTerminals[k][t], updatedTerminals, clickedTerminal, t)
                event.target.innerText = '.'
                newSibling.innerText = '.'
                updatedTerminals[k][t] = '.'
                
                t++
                newSibling = newSibling.nextElementSibling
              }
              
              if (updatedTerminals[k][6] === '.') updatedTerminals[k][7] = '.'
              console.log('DUDSSINNERTEST', updatedTerminals, updatedTerminals[k][i], newSibling.innerText, newSibling.innerText === updatedTerminals[k][i])
              
              if (newSibling != null) newSibling = newSibling.nextElementSibling 
              else return
            } else {
              console.log('XWOMEN', updatedRightTerminal, updatedRightTerminal[k])
              clickedTerminal.push(updatedRightTerminal)

              while (t <= 6) {
                event.target.innerText = '.'
                newSibling.innerText = '.'
                updatedRightTerminal[k][t] = '.'
                
                t++
                newSibling = newSibling.nextElementSibling
              }
              if (updatedRightTerminal[k][6] === '.') updatedRightTerminal[k][7] = '.'
            }
          }
        }
        else {
          if (event.target.innerText === updatedTerminals[k][7]) {
            for (let i = updatedTerminals[k].length - 1; i >= 0; i--) {

              console.log('DUDTT', updatedTerminals)
              if (event.target.innerText === updatedTerminals[k][7] && prevSibling.innerText === updatedTerminals[k][i]) {
                console.log('DUDTTT TRIP', updatedTerminals[k], terminalCode)
                console.log('PAIN1', prevSibling)
                updatedTerminals[k][i] = '.'

                if (updatedTerminals[k][0] === '.') updatedTerminals[k][7] = '.'
                
                while (t !== 7) {
                  event.target.innerText = '.'
                  prevSibling.innerText = '.'
                  prevSibling = prevSibling.previousElementSibling
                  t++
                }
                
                if (prevSibling != null) prevSibling = prevSibling.previousElementSibling
                else return
              }
            }
          } else {
            for (let i = updatedRightTerminal[k].length - 1; i >= 0; i--) {
              if (event.target.innerText === updatedRightTerminal[k][7] && prevSibling.innerText === updatedRightTerminal[k][i]) {
                if (updatedRightTerminal[k][0] === '.') updatedRightTerminal[k][7] = '.'

                while (t !== 7) {
                  event.target.innerText = '.'
                  prevSibling.innerText = '.'
                  prevSibling = prevSibling.previousElementSibling
                  t++
                }
              }
            }
          }
        }
      }
    }
    
  }

  const deleteFakeCodeWords = (chooseArray) => {
    let path = chooseArray[Math.floor(Math.random() * chooseArray.length)]
    const newCharacters = [path == 'left' ? finalLeftCharacter.slice() : finalRightCharacter.slice()]
    const newWords = [...randomWords]
    // const pathNum = chooseArray[Math.floor(Math.random() * chooseArray.length)] == 'left' ? 0 : 1;
    let randomSelection = Math.floor(Math.random() * randomWords.length)
    let randomizedWord = ''
    let randomIndex
    let t = 0;
    
    setData(data => [
      ...data,
      {dudCode: `>Dud Removed.`}
    ])
    console.log('DUDES2', data, truth, randomWords)
    console.log('PATH5', randomWords[path == 'left' ? 0 : 1], )
    randomizedWord = randomWords[path == 'left' ? 0 : 1][Math.floor(Math.random() * randomWords[path == 'left' ? 0 : 1].length)]
    
    
    let p = 0;
    // let index = newCharacters[0].join('').match(randomizedWord).index
    let index = newCharacters[0].join('').replace(/(.)(.)?/g, (_, firstChar) => {
      if (!firstChar) firstChar = ''
      return firstChar
    }).match(randomizedWord).index

    console.log('PATH', path)
    
    for (let i = 0; i < newCharacters.length; i++) {
      console.log('FISTRRR', randomizedWord, newCharacters[0], newCharacters.join('').replace(/(.)(.)?/g, (_, firstChar) => {
        if (!firstChar) firstChar = ''
        return firstChar
      }),  )

      
      if (newCharacters[0].join('').search(randomizedWord)) {
        console.log('AFTER FIR TED', chosenRandomWord)
        randomIndex = newCharacters[i].join('').replace(/(.)(.)?/g, (_, firstChar) => {
          if (!firstChar) firstChar = ''
          return firstChar
        }).search(randomizedWord)
        // console.log('AFTER FIR FIN', newCharacters, newCharacters[i].join('').match(randomizedWord), newCharacters[i].join('').match(randomizedWord).input[newCharacters[i].join('').match(randomizedWord).index])
        console.log('FISTER', newCharacters[i].join('').replace(/(.)(.)?/g, (_, firstChar) => {
          if (!firstChar) firstChar = ''
          return firstChar
        }).match(randomizedWord), newCharacters[i].join('').replace(/(.)(.)?/g, (_, firstChar) => {
          if (!firstChar) firstChar = ''
          return firstChar
        }).match(randomizedWord).input[newCharacters[i].join('').replace(/(.)(.)?/g, (_, firstChar) => {
          if (!firstChar) firstChar = ''
          return firstChar
        }).match(randomizedWord).index++] )

        while (p !== 7) {
          newCharacters[i].join('').replace(/(.)(.)?/g, (_, firstChar) => {
            if (!firstChar) firstChar = ''
            return firstChar
          }).match(randomizedWord).input[newCharacters[i].join('').replace(/(.)(.)?/g, (_, firstChar) => {
            if (!firstChar) firstChar = ''
            return firstChar
          }).match(randomizedWord).index++]

          // console.log('AFTER FIR FIGS', newCharacters[i].join('').match(randomizedWord).input[index++], )
          p++
        }
      }
      
      console.log('PATH2', randomWords[Math.floor(Math.random() * randomWords.length)], randomizedWord, newCharacters.flat()[0][randomIndex], newCharacters[randomIndex] )
      // CHANGE THIS LINE UNDER ME TO ADD A [0] AFTER FLAT
      if (newCharacters.flat()[0][randomIndex] === randomizedWord[t]) {
        console.log('AFTER FIRS WIN', newCharacters[i], newCharacters[0].join('').search(randomizedWord), newCharacters[0][randomIndex], randomIndex)
        
        console.log('UpdatedFIRST', newCharacters[0].join('').match(randomizedWord), newCharacters[0].join('').search(randomizedWord), randomWords)
        // setDeletedWords(prev => [...prev, randomizedWord])
        deletedWords.push(randomizedWord)
        // newWords.filter(word => !deletedWords.includes(word))
        console.log('PATH4', randomWords, randomWords[path == 'left' ? 0 : 1], deletedWords, randomWords)

        // setChosenRandomWords(randomWords[path == 'left' ? 0 : 1].filter(word => !deletedWords.includes(word)))
        path == 'left' ? setChosenRandomWords([randomWords[path == 'left' ? 0 : 1].filter(word => deletedWords[0] !== word ), [...randomWords[1]]])
        : setChosenRandomWords([[...randomWords[0]], randomWords[path == 'left' ? 0 : 1].filter(word => deletedWords[0] !== word )])
        deletedWords.pop()
        console.log('PATH3', randomWords, deletedWords )
        while (t !== 7) {
          if (newCharacters.flat()[0][randomIndex] === randomizedWord[t].toUpperCase() && randomizedWord !== chosenRandomWord) {
            newCharacters.flat()[0][randomIndex] = '.'
          } else {
            while (randomizedWord !== chosenRandomWord) {
              
              randomizedWord = randomWords[Math.floor(Math.random() * randomWords.length)].toUpperCase()
            }
          }
          // clickedUserWord[0].match(new RegExp(chosenRandomWord[0].split('').forEach(letter => letter), 'g') ) || []).length
          // newWords.filter(word => word !== randomizedWord)
          t++
          randomIndex++
          }
        }
        

        console.log('UpdatedTerm', randomizedWord, randomWords, newWords, newWords.filter(word => !deletedWords.includes(word)), deletedWords)
        console.log('UpdatedIndex', newCharacters[0].join('').match(randomizedWord), newCharacters[0].join('').search(randomizedWord), newCharacters[0].join(''), newCharacters[0].join('').search(randomizedWord), randomizedWord)

        console.log('AFTER FIR TTT', newCharacters[0], newCharacters[0][i], randomizedWord[i])
    }
    console.log('PATH', newCharacters, randomWords)
    path == 'left' ? setFinalLeftCharacter(newCharacters[0]) : setFinalRightCharacter(newCharacters[0])
    console.log('AFTER FIR FINER', finalLeftCharacter)
  }

  console.log(data)

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
    // console.log('CHECKERS', nSibling, nSibling.innerText, /[!@#$%^&* _\-[=+|,;.]/ig.test(event.target.innerText) , /[!@#$%^&* _=+|,;.-]/ig.test(nSibling.innerText) )
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
      <div className='terminal-background'></div>
      <div className='main-div' id='main-div'>
        <p className='left-div'>ROBCO INDUSTRIES (TM) TERMALINK PROTOCOL</p>
        <p className='left-div'>ENTER PASSWORD NOW</p>
        <br/>
        <p className='header left-div' id='attempts' ref={Allowance}>{attempts} ATTEMPT(S) LEFT: { allowance.map((element, index) => React.createElement('span', { key: index, className: 'span' }, element )) } </p>
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
            onMouseHover={mouseEnter}
            onMouseOut={mouseOut}
            onClicked={processCodes}
          />

          <div className='text' ref={ElementReference}>
            { data.map((info, index) => (
            <div key={index} >
              <p>{info.name}</p>
              <p>{info.permission}</p>
              <p>{info.correct}</p>
              { randomWords[0].length < 6 || randomWords[1].length < 6 ? <p>{info.dudCode}</p> : '' }
              
            </div>
          )) } 
            <div>
              <p className='allowance'>{ allowed === true ? '>Allowance \n>replenished.' : '' }</p>
            </div>
            
            
            <p className='outcome'>{'>'}<span id='span'></span></p>
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
