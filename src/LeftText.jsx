import React from 'react'

const LeftText = () => {
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
  
  const randomLetters = (array, num) => {
    let newString = ''

    for (let i = 0; i < num; i++) {
      newString += array[Math.floor(Math.random() * array.length)]
    }

    return newString
  }
  
  

  return (
    <>
      <div>
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
      // 12 across and 17 down
      <div>
        <p>
          {
            randomLetters(characters, 204)
          }
        </p>
      </div>
    </>
  )
}

export default LeftText