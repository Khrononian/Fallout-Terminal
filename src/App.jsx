import React, { useState, useEffect, useRef } from 'react'
import './App.css'
import LeftText from './LeftText'
import RightText from './RightText'
import backgroundOn from './thumbnail/monitorborder.png'
import backgroundOff from './thumbnail/monitorborder-off.png'
import passCodeAudio from './audio/passcode.ogg'
import failCodeAudio from './audio/failcode.ogg'
import powerOnAudio from './audio/poweron.ogg'
import powerOffAudio from './audio/poweroff.ogg'

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
  const [locked, setLocked] = useState(false)
  const [unlocked, setUnlocked] = useState(false)
  const [refresh, setRefresh] = useState(false)
  const [count, setCount] = useState(0)
  const [letter, setLetter] = useState('')
  const [truth, setTruth] = useState(false)
  const [allowed, setAllowed] = useState(false)
  const [clickedUserWord, setClickedUserWord] = useState('')
  const [randomWords, setChosenRandomWords] = useState()
  const [chosenRandomWord, setChosenRandomWord] = useState('')
  const lockedTerminalText = document.getElementById('main-div')
  const deletedWords = []
  const lettersNumbers = ['A', 'B', 'C', 'D', 'E', 'F', 
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  const characters = '!@#$%^&*()[]<>{}_-=+|,;./'
  const ElementReference = useRef(null)
  const Allowance = useRef(null)
  const wordDuos = []
  const wordsLeft = []
  const wordsRight = []
  let randomStringWord 
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
    const terminalDudHolder = ['[]', '()', '{}', '<>']
    const dudHolder = [0, 1, 2, 3, 4, 5];
    let p = 0
    const terminalCopy = [...terminalCode]
    let firstNum = 1
    let secondNum = 12
    let i = 0
    let takeAwayNum = 204
    let newArray = []

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

    for (let i = 0; i < 130; i++) {
      leftCharacterString.push(characters[Math.floor(Math.random() * characters.length)])
      rightCharacterString.push(characters[Math.floor(Math.random() * characters.length)])
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
      p++
    }
    
    while (takeAwayNum !== 0) {
      if (wordsLeft[i] !== undefined && wordsRight[i] !== undefined ) {
        leftCharacterString.splice(Math.floor(Math.random() * (secondNum - firstNum + 1) ) + firstNum, 0, wordsLeft[i].toString().toUpperCase().split(''))
        rightCharacterString.splice(Math.floor(Math.random() * (secondNum - firstNum + 1) ) + firstNum, 0, wordsRight[i].toString().toUpperCase().split(''))
        
        firstNum += 12
        secondNum += 30
      }
      i++
      takeAwayNum--
    }

    for (let i = 0; i < 4; i++) {
      leftCharacterString.splice(Math.floor(Math.random() * leftCharacterString.length), 0, terminalCopy[i] )
      rightCharacterString.splice(Math.floor(Math.random() * leftCharacterString.length), 0, rightTerminalCodeCopy[i] )
    }
    
    setFinalLeftCharacter(prevChar => [
        ...prevChar,
        finalLeftCharacter.concat(leftCharacterString.flat())
    ])
    setFinalRightCharacter(prevChar => [
      ...prevChar,
      finalRightCharacter.concat(rightCharacterString.flat())
    ])
    
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
    
    wordDuos.push(wordsLeft, wordsRight)
    randomStringWord = wordDuos[Math.floor(Math.random() * wordDuos.length)].splice(Math.floor(Math.random() * wordDuos.length), 1)
    
    setChosenRandomWord(randomStringWord)
    setChosenRandomWords(wordDuos)
  }, [refresh])

  useEffect(() => {
    const elementCount = ElementReference.current;

    if (elementCount == undefined || elementCount == null) return
    if (elementCount.childNodes.length === 7) elementCount.firstChild.remove()
  },)
  
  const randomLetters = () => {
    return sideStrings.flat()
  }
  
  const setUpLetters = () => {
    return [finalLeftCharacter.flat(), finalRightCharacter.flat()]
  }
  
  async function typeSentence (sentence, location) {
    const letters = (/[A-Z]/.test(sentence[0]) ) ? sentence[1] : sentence[0].split('')
    const typedWords = []
    const characterLetters = []
    let i = 0;

    location.innerText = ''
    setClickedUserWord(letters)

    await waitForMs().then(async () => {
      while (i < letters.length) {
        await waitForMs()
        if (location.innerText.length < 7 && /[A-Z]/g.test(sentence[0])) {
          if (/[!@#$%^&*_=+|,;/.\-\])}>(<{[]/g.test(location.innerText) && /[A-Z]/g.test(location.innerText)) {
            location.innerText.replace(/[A-Z]/gi, '')
            return
          }
          setLetter(prev => prev + letters[i])
          typedWords.push(letters[i])
          location.innerText += letters[i]
        }
        else {
          characterLetters.push(letters[i])
          setLetter(letters)
          location.innerText = letters
        }
        i++
      }
    })
    if (location.innerText.length === 2 && /[!@#$%^&*_=+|,;/.\-\])}>(<{[A-Z]{2}$/gi.test(location.innerText) && /[A-Z]/g.test(location.innerText[1])) {
      location.innerText[1].replace(/[A-Z]/, letter)
      location.innerText.substring(0, location.innerText.length - 1)
      location.innerText = location.innerText.split('').shift()
    }
  }

  const waitForMs = () => {
    return new Promise(resolve => setTimeout(resolve, 55))
  }

  function mouseEnter (event) {
    const selectedAudio = document.getElementById('audiofile');
    const spanText = document.getElementById('span')
    let nextSibling = event.target.nextElementSibling
    let prevSibling = event.target.previousElementSibling
    let wholeWord = ''
    let frontWord = ''
    let backWord = ''
    
    event.target.style.background = '#33dd88' 
    event.target.style.color = 'black'

    selectedAudio.play()
    
    spanText.innerText = ''

    OutwardText(event, frontWord, backWord, wholeWord, nextSibling, prevSibling, spanText)
  }
  
  const processCodes = (event) => {
    const chooseOne = ['left', 'right']
    const randomAllowance = ['W', 'I', 'N', 'ALLOWANCE REPLENISHED', 'ALLOWANCE REPLENISHED', 'N', 'N', 'E', 'R']
    const failCode = document.getElementById('failCodeAudio');
    const passCode = document.getElementById('passCodeAudio')

    if (/[A-Z]/g.test(clickedUserWord)) {
      if (allowance.length != 1 && clickedUserWord != chosenRandomWord) {
        setAllowance([...allowance.slice(2, allowance.length), allowance.slice(-1)])
        failCode.play()
      } else if (clickedUserWord != chosenRandomWord.toString()) {
        setAllowance([])
        document.getElementById('main-div').classList.add('div-main')
        
        lockedTerminalText.onanimationend = current => {
          console.log('KICK', current, current.target.querySelector('.boxes'))
          setLocked(true)
        }
      } else {
        document.getElementById('main-div').classList.add('div-main')
        lockedTerminalText.onanimationend = current => {
          console.log('WINNER', current, current.target.querySelector('.boxes'))
          setUnlocked(true)
        }
        passCode.play()
      }
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
      const clickedTerminal = []
      let newSibling = event.target.nextElementSibling
      let prevSibling = event.target.previousElementSibling
      let t = 0;

      if (randomAllowance[Math.floor(Math.random() * randomAllowance.length)] == 'ALLOWANCE REPLENISHED' && allowance.length < 4) {
        setAllowed(true)
        setAllowance(['█', '█', '█', '█'])
      }
      deleteFakeCodeWords(chooseOne)

      for (let k = 0; k <= 6; k++) {
        if (event.target.innerText == '[' || event.target.innerText == '{' || event.target.innerText == '<' || event.target.innerText == '(') {
          for (let i = 0; i < 8; i++) {
            if (event.target.innerText === updatedTerminals[k][0] && newSibling.innerText === updatedTerminals[k][i]) {
              clickedTerminal.push(updatedTerminals[k])
              while (t <= 6 ) {
                event.target.innerText = '.'
                newSibling.innerText = '.'
                updatedTerminals[k][t] = '.'
                newSibling = newSibling.nextElementSibling

                t++
              }
              
              if (updatedTerminals[k][6] === '.') updatedTerminals[k][7] = '.'
              if (newSibling != null) newSibling = newSibling.nextElementSibling 
              else return
            } else {
              clickedTerminal.push(updatedRightTerminal)

              while (t <= 6) {
                event.target.innerText = '.'
                newSibling.innerText = '.'
                updatedRightTerminal[k][t] = '.'
                newSibling.style.background = 'transparent'
                newSibling.style.color = '#33dd88'

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
              if (event.target.innerText === updatedTerminals[k][7] && prevSibling.innerText === updatedTerminals[k][i]) {
                updatedTerminals[k][i] = '.'

                if (updatedTerminals[k][0] === '.') updatedTerminals[k][7] = '.'
                
                while (t !== 7) {
                  event.target.innerText = '.'
                  prevSibling.innerText = '.'
                  prevSibling.style.background = 'transparent'
                  prevSibling.style.color = '#33dd88'
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
                  prevSibling.style.background = 'transparent'
                  prevSibling.style.color = '#33dd88'
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
    let randomizedWord = ''
    let randomIndex
    let t = 0;
    let p = 0;

    setData(data => [
      ...data,
      {dudCode: `>Dud Removed.`}
    ])
    randomizedWord = randomWords[path == 'left' ? 0 : 1][Math.floor(Math.random() * randomWords[path == 'left' ? 0 : 1].length)]
    
    for (let i = 0; i < newCharacters.length; i++) {
      console.log('FISTRRR', randomizedWord, newCharacters[0], newCharacters.join('').replace(/(.)(.)?/g, (_, firstChar) => {
        if (!firstChar) firstChar = ''
        return firstChar
      }),  )
      
      if (newCharacters[0].join('').search(randomizedWord)) {
        randomIndex = newCharacters[i].join('').replace(/(.)(.)?/g, (_, firstChar) => {
          if (!firstChar) firstChar = ''
          return firstChar
        }).search(randomizedWord)
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
      
      if (newCharacters.flat()[0][randomIndex] === randomizedWord[t]) {
        deletedWords.push(randomizedWord)
        path == 'left' ? setChosenRandomWords([randomWords[path == 'left' ? 0 : 1].filter(word => deletedWords[0] !== word ), [...randomWords[1]]])
        : setChosenRandomWords([[...randomWords[0]], randomWords[path == 'left' ? 0 : 1].filter(word => deletedWords[0] !== word )])
        deletedWords.pop()

        while (t !== 7) {
          if (newCharacters.flat()[0][randomIndex] === randomizedWord[t].toUpperCase() && randomizedWord !== chosenRandomWord) {
            newCharacters.flat()[0][randomIndex] = '.'
          } else {
            while (randomizedWord !== chosenRandomWord) {
              randomizedWord = randomWords[Math.floor(Math.random() * randomWords.length)].toUpperCase()
            }
          }
          t++
          randomIndex++
          }
        }
    }
    path == 'left' ? setFinalLeftCharacter(newCharacters[0]) : setFinalRightCharacter(newCharacters[0])
  }

  const OutwardText = (event, fWord, bWord, wWord, nSibling, pSibling, sText) => {
    const dudArray = []
    const dudArray2= []
    const dudArray3= []
    let i = 0
    let eventSibling = event.target.nextElementSibling
    let prevEventSibling = event.target.previousElementSibling

    fWord += event.target.innerText
    while (nSibling && /[a-z]/i.test(nSibling.innerText) && /[a-z]/i.test(event.target.innerText)) {
      event.target.style.background = '#33dd88'
      nSibling.style.background = '#33dd88'
      nSibling.style.color = 'black'
      fWord += nSibling.innerText
      nSibling = nSibling.nextElementSibling
    }

    while (nSibling && /[!@#$%^&*_=+|,;/.\- \])}>]/g.test(nSibling.innerText) && /[(<{[]/.test(event.target.innerText) && i <= 6 ) {

      dudArray.push(event.target.innerText)
      dudArray2.push(nSibling.innerText)
      if (dudArray2.length <= 7 ) {
        dudArray3.push(dudArray[0], dudArray2.join(''))
      } 

      if (dudArray3.length === 14 && dudArray3[12] && dudArray3[13]  ) {
        for (let o = 0; o != 6; o++) {
          if (dudArray2[o] === '>' || dudArray2[o] === ']' || dudArray2[o] === ')' || dudArray2[o] === '}') return
        } 
        if (dudArray3[13][6] === '}' && dudArray3[12] === '{' || dudArray3[13][6] === '>' && dudArray3[12] === '<' || dudArray3[13][6] === ')' && dudArray3[12] === '(' || dudArray3[13][6] === ']' && dudArray3[12] === '[') {
          let p = 0;
          clickedDud = dudArray[0]

          while (p !== 7) {
            clickedDud += eventSibling.innerText
            event.target.style.background = '#33dd88'
            eventSibling.style.background = '#33dd88'
            eventSibling.style.color = 'black'
            eventSibling = eventSibling.nextElementSibling
            p++
          }
          setTruth(true)
        } 
      }
      
      nSibling = nSibling.nextElementSibling
      i++
    }
    while (pSibling && /[(<[{ !@#$%^&*_=+|,;/.-]/g.test(pSibling.innerText) && /[\])}>]/.test(event.target.innerText) && i <= 6 ) {
      dudArray.push(event.target.innerText)
      dudArray2.unshift(pSibling.innerText)
      
      if (dudArray2.length <= 7 ) {
        dudArray3.unshift(dudArray2.join(''), dudArray[0] )
      }
      if (dudArray3.length === 14 && dudArray3[0] && dudArray3[1] ) {
        for (let o = 1; o != 7; o++) {
          if (dudArray2[o] === '<' || dudArray2[o] === '[' || dudArray2[o] === '(' || dudArray2[o] === '{') return
        }
        
        if (dudArray3[0][0] === '{' && dudArray3[1] === '}' || dudArray3[0][0] === '<' && dudArray3[1] === '>' || dudArray3[0][0] === '(' && dudArray3[1] === ')' || dudArray3[0][0] === '[' && dudArray3[1] === ']') {
          let p = 0;
          clickedDud = dudArray[0]
          
          while (p !== 7) {
            clickedDud += eventSibling.innerText
            event.target.style.background = '#33dd88'
            prevEventSibling.style.background = '#33dd88'
            prevEventSibling.style.color = 'black'

            prevEventSibling = prevEventSibling.previousElementSibling
            p++
          }
          setTruth(true)
        }
      }
      pSibling = pSibling.previousElementSibling
      i++
    }

    while (pSibling && /[a-z]/i.test(pSibling.innerText) && /[a-z]/i.test(event.target.innerText)) {
      event.target.style.background = '#33dd88'
      pSibling.style.background = '#33dd88'
      pSibling.style.color = 'black'
      bWord += pSibling.innerText
      pSibling = pSibling.previousElementSibling
    }
    
    wWord = bWord.split('').reverse().join('') + fWord
    typeSentence([event.target.innerText, wWord], sText)
  }
  
  const mouseOut = event => { 
    const selectedAudio = document.getElementById('audiofile');
    let nextSibling = event.target.nextElementSibling;
    let prevSibling = event.target.previousElementSibling;
    let i = 0;

    event.target.style.background = 'transparent';
    event.target.style.color = '#33dd88';
    setTruth(false)

    if (document.getElementById('span').innerText.length > 7) document.getElementById('span').innerText.substring(0, 8)
    
    while (nextSibling && /[a-z]/i.test(nextSibling.innerText) && /[a-z]/i.test(event.target.innerText)) {
      nextSibling.style.background = 'transparent'
      nextSibling.style.color = '#33dd88'
      nextSibling = nextSibling.nextElementSibling
    }

    while (prevSibling && /[a-z]/i.test(prevSibling.innerText) && /[a-z]/i.test(event.target.innerText)) {
      prevSibling.style.background = 'transparent'
      prevSibling.style.color = '#33dd88'
      prevSibling = prevSibling.previousElementSibling
    }

    while (prevSibling && /[(<[{ !@#$%^&*_=+|,;/.-]/g.test(prevSibling.innerText) && /[\])}>]/.test(event.target.innerText) && i <= 6) {
      prevSibling.style.background = 'transparent'
      prevSibling.style.color = '#33dd88'
      prevSibling = prevSibling.previousElementSibling
      
      i++
    }
    while (nextSibling && /[!@#$%^&*_=+|,;/.\- \])}>]/g.test(nextSibling.innerText) && /[(<{[]/.test(event.target.innerText) && i <= 6) {
      nextSibling.style.background = 'transparent'
      nextSibling.style.color = '#33dd88'
      nextSibling = nextSibling.nextElementSibling

      i++
    }
    
    selectedAudio.onended = () => {
      selectedAudio.src = `https://breakout.bernis-hideout.de/robco-industries/sound/k${Math.floor(Math.random() * 10) + 1}.ogg`
    }
  }

  const resetGame = () => {
    const powerOn = document.getElementById('powerOnAudio')
    const powerOff = document.getElementById('powerOffAudio')
    
    if (refresh == false) powerOn.play()
    else powerOff.play()
    setFinalLeftCharacter([])
    setFinalRightCharacter([])
    setSideStrings([]) 
    setTerminalCode([[], [], [], [], [], [], []])
    setRightTerminalCode([[], [], [], [], [], [], []])
    setAllowance(['█', '█', '█', '█'])
    setData([])
    setLocked(false)
    setUnlocked(false)
    setRefresh(prevCheck => !prevCheck)
  }

  return (
    <>
      <div className='terminal-background' id='terminal'>
        <img src={refresh == true ? backgroundOn : backgroundOff} alt='ON'/>
        {refresh == false ? <div className='power-btn2' onClick={resetGame}></div> : <div className='power-btn' onClick={resetGame}></div>}
      
      </div>
      
      {refresh == true ? <div className='main-terminal'>
        <div className='upper-background'></div>
        <div className='main-div' id='main-div'>
          <p className='left-div top-header'>ROBCO INDUSTRIES (TM) TERMALINK PROTOCOL</p>
          <p className={allowance.length < 2 ? 'left-div top-header blinker' : 'left-div top-header'}>{allowance.length < 2 ? '!!! WARNING: LOCKOUT IMMINENT !!!' : 'ENTER PASSWORD NOW'}</p>
          <br/>
          <p className='header left-div top-header' id='attempts' ref={Allowance}>{allowance.length} ATTEMPT(S) LEFT: { allowance.map((element, index) => React.createElement('span', { key: index, className: 'span' }, element )) } </p>
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
              <div key={index}>
                <p>{info.name}</p>
                <p>{info.permission}</p>
                <p>{info.correct}</p>
                { randomWords[0].length < 6 || randomWords[1].length < 6 ? <p>{info.dudCode}</p> : '' }
                
              </div>
            )) } 
              <div>
                <p className='allowance'>{ allowed === true ? '>Allowance \n>replenished.' : '' }</p>
              </div>
              <p className='outcome'>{'>'}<span id='span'></span><span className='blinker'>█</span></p>
            </div>
          </div>
        </div>
        
        {locked == true ? <div className='locked-terminal-styles'>
            <p>TERMINAL LOCKED</p>
            <p>PLEASE CONTACT AN ADMINISTRATOR</p>
        </div> : null}
        {unlocked == true ? <div className='locked-terminal-styles'>
          <p>Terminal Access Granted</p>
          <p>Press Here to Proceed</p>
        </div> : null}
        
      </div> : null}
      <div>
        <audio id='audiofile' src='https://breakout.bernis-hideout.de/robco-industries/sound/k1.ogg'/>
        <audio id='passCodeAudio' src={passCodeAudio}/>
        <audio id='failCodeAudio' src={failCodeAudio}/>
        <audio id='powerOnAudio' src ={powerOnAudio} />
        <audio id='powerOffAudio' src ={powerOffAudio} />
      </div>
    </>
  )
}
App.displayName = 'App'

export default App