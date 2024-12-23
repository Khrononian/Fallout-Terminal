import React, { useState, useEffect, useMemo, useCallback, createElement } from 'react'
import './App.css'
import LeftText from './LeftText'
import RightText from './RightText'

// import Audios from './audios'

const App = () => {
  const [attempts, setAttempts] = useState(4)
  const [data, setData] = useState([])
  const [sideStrings, setSideStrings] = useState([])
  const [finalCharacter, setFinalCharacter] = useState([])
  const [terminalCode, setTerminalCode] = useState([[], [], [], [], [], [], []])
  const [count, setCount] = useState(0)
  const [letter, setLetter] = useState('')
  const [truth, setTruth] = useState(false)
  const [clickedUserWord, setClickedUserWord] = useState('')
  const [randomWords, setChosenRandomWords] = useState()
  const [chosenRandomWord, setChosenRandomWord] = useState('')
  const lettersNumbers = ['A', 'B', 'C', 'D', 'E', 'F', 
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  const characters = '!@#$%^&*()[]<>{}_-=+|,;./'
  
  const words = []
  const testArrays = []
  let characterString = []
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
      words.push(sevenWords[Math.floor(Math.random() * sevenWords.length)])
    }

    for (let i = 0; i < 106; i++) {
      characterString.push(characters[Math.floor(Math.random() * characters.length)])
      console.log('FINS', characterString[i])
    }

    // setTerminalCode(prevLetter => [...prevLetter, terminalCode.concat(characterString.split('')) ])
    while (dudHolder.length !== 0 || p <= 6) {
      terminalCodeCopy[p].unshift(terminalDudHolder[Math.floor(Math.random() * terminalDudHolder.length)][0])
      
      for (let i = 0; i < 6; i++) {
        // setTerminalCode(prevCode => [
        //   ...prevCode,
        //   terminalCode[p].concat(dudCharacters[Math.floor(Math.random() * dudCharacters.length)])
        // ])
        terminalCodeCopy[p].push(dudCharacters[Math.floor(Math.random() * dudCharacters.length)])
        
      }
      // console.log('TEST', characterString, terminalCode, terminalCode[p])
      dudHolder.pop()
      terminalDudHolder.forEach(element => {
        if (element[0] === terminalCodeCopy[p][0]) terminalCodeCopy[p].push(element[1])
      })
      setChosenRandomWords(words)
      console.log('AFTER', terminalCodeCopy, characterString, words, chosenRandomWord)
      p++
    }
    // setTerminalCode(prevCode => [
    //   ...prevCode,
    //   terminalCode.concat(terminalCodeCopy)
    // ])
    
    const characterStringCopy = [...characterString]
    const terminalCopy = [...terminalCode]
    let firstNum = 1
    let secondNum = 12
    let i = 0
    let takeAwayNum = 204
    
    while (takeAwayNum !== 0) {
      // console.log('LOGGGS', words, characterStringCopy, characterStringCopy.length, characterString)
      if (words[i] !== undefined) {
        
        console.log('Test', words[i], words[i].toString().split(''), characterString)

        characterString.splice(Math.floor(Math.random() * (secondNum - firstNum + 1) ) + firstNum, 0, words[i].toString().toUpperCase().split(''))
        firstNum += 12
        secondNum += 12
      }

      
      i++
      takeAwayNum--
    }
    console.log('NEW', characterString, characterString.length, )
    for (let i = 0; i < 7; i++) {
      // characterStringCopy.splice(Math.floor(Math.random() * characterStringCopy.length), 0, terminalCopy[i] )
      characterString.splice(Math.floor(Math.random() * characterString.length), 0, terminalCopy[i] )
      console.log('TESTTTT', finalCharacter, terminalCopy, words)
    }
    
    setFinalCharacter(prevChar => [
        ...prevChar,
        finalCharacter.concat(characterString.flat())
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
    setChosenRandomWord(words[Math.floor(Math.random() * words.length)].toUpperCase())
  }, [])
  
  console.log('FINS', finalCharacter)
  const randomLetters = () => {
    // const sideStringsCopy = [...sideStrings.split('')]
    
    return sideStrings.flat()
  }
  
  const setUpLetters = () => {
    // console.log('STATE', characterString, characterString.split('').length, words, terminalCode)
    const newNum = [0, 1, 2, 3, 4, 5];
    const characterStringCopy = [...characterString]
    // const characterNumbers = [...characterString.split('')]
    const terminalCopy = [...terminalCode]
    const finalCopy = [...finalCharacter]
    let firstNum = 1
    let secondNum = 12
    let i = 0

    console.log('AFTER NEW', characterString, characterString.length, finalCharacter, finalCopy.flat().length, chosenRandomWord)
    console.log('AFTER WORDS', randomWords)
    return finalCharacter.flat()
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
      
      if (/[A-Z]/g.test(clickedUserWord)) {
        console.log('FOODNEWS')
        setAttempts(attempt => attempt - 1)
        setData(data =>
          [
            ...data,
            { id: setCount(prevCount => prevCount.id + 1), name: clickedUserWord, correct: event.target.innerText.match(new RegExp(chosenRandomWord, 'g')  ) || [].length }
          ]
        )
      } else if (truth) {
        console.log('DUDSSS')
        console.log('DUDSSTT', terminalCode)
        const updatedTerminals = [...terminalCode]
        const updatedLetters = [...finalCharacter]
        const clickedTerminal = []
        let newSibling = event.target.nextElementSibling
        let prevSibling = event.target.previousElementSibling
        // terminalCode.forEach((item, index, arrays) => {
        //   // console.log('DUDSSINNER', item, index, item[index], item[2])
        //   while (o !== 8) {
        //     // for (let i = 1; i < 7; i++) {
        //     //   if (event.target.innerText === item[0] && newSibling.innerText === arrays[o][i]) console.log('DUDSINNERWORKS')
        //     //   console.log('DUDSSSINNER2', item[index], item[o], newSibling, arrays, arrays[o], arrays[o][i])

        //     //   newSibling = newSibling.nextElementSibling
        //     //   o++
        //     // }
        //   }
        // })
        let t = 0;

        deleteFakeCodeWords()
        for (let k = 0; k <= 6; k++) {
          for (let i = 0; i < 8; i++) {
            if (event.target.innerText === updatedTerminals[k][0] && newSibling.innerText === updatedTerminals[k][i]) {
              let newWork
              console.log('DUDSSINNERWORKS', terminalCode[k], terminalCode[k][i], updatedTerminals[k], updatedTerminals[k][i], updatedTerminals[k][0])
              
              // updatedTerminals[k][i] = '.'
              // console.log('DUDQ', updatedLetters, updatedLetters.length)
              console.log('DUDQ', updatedTerminals, updatedTerminals[k], clickedTerminal)

              // for (let q = 0; q < updatedLetters[0].length; q++) {
              //   if (updatedLetters[0][q] === updatedTerminals[k][i] && newSibling.innerText === updatedTerminals[k][i] && event.target.innerText === updatedTerminals[k][0]) {
              //     console.log('DUDQUEE',updatedLetters[0], updatedLetters[0][q], updatedTerminals[k])
              //     updatedLetters[0][q] = '.'
              //     newSibling = newSibling.nextElementSibling
              //   }
              // }

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
            if (event.target.innerText === updatedTerminals[k][7] && prevSibling.innerText === updatedTerminals[k][i]) {
              console.log('DUDTTT', updatedTerminals[k], terminalCode)
              
              updatedTerminals[k][i] = '.'

              if (updatedTerminals[k][0] === '.') updatedTerminals[k][7] = '.'
              
              while (t !== 7 && prevSibling.innerText === updatedTerminals[k][i]) {
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
    
    
  }

  const deleteFakeCodeWords = () => {
    const newCharacters = [...finalCharacter]
    let t = 0;
    console.log('FIST', chosenRandomWord, words)
    let randomizedWord = ''
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
    let index =  newCharacters[0].join('').match(randomizedWord).index
    for (let i = 0; i < newCharacters.length; i++) {
      if (newCharacters[0].join('').search(randomizedWord)) {
        console.log('AFTER FIR TED')
        newCharacters[i].join('').search(randomizedWord)
        console.log('AFTER FIR FIN', newCharacters, newCharacters[i].join('').match(randomizedWord), newCharacters[i].join('').match(randomizedWord).input[newCharacters[i].join('').match(randomizedWord).index])
        while (p !== 7) {
          newCharacters[i].join('').match(randomizedWord).input[newCharacters[i].join('').match(randomizedWord).index++]
          console.log('AFTER FIR FIGS', newCharacters[i].join('').match(randomizedWord).input[index++], )
          p++
        }
      }
      // if (newCharacters[0].join(''))
        console.log('AFTER FIRS MEEE', newCharacters[0].join(''), newCharacters[0].join('').search(randomizedWord))
        while (t !== 7) {
          console.log('AFTER FIRS', randomWords[t], randomizedWord, randomizedWord[t], newCharacters[i])
          if (newCharacters[i] === randomizedWord.toUpperCase()) console.log('AFTER FIRST MEEE')
          
          t++
        }
      console.log('AFTER FIR TTT', newCharacters[0], newCharacters[0][i], randomizedWord[i])
    }
    setFinalCharacter(newCharacters)
    console.log('AFTER FIR FINER', finalCharacter)
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
