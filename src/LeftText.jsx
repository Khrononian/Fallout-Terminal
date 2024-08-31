import React, { useEffect, useState } from 'react'
import './TextStyles.css'

const LeftText = ({ lettersNumbers, characters, randomLetters, setUpLetters, onMouseHover, onMouseOut, onMouseMove }) => {
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

  const showText = () => {
    const rightGrid = document.getElementById('grid');

    rightGrid.forEach((letter, index) => {
      
    })
  }

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
      
      <div className='rightgrid ' id='grid'>
        
        {
          
          
          setUpLetters(characters, 90).map((letter, index) => {
            return <p className={letter} key={index} onMouseMove={event => onMouseMove(event)} onMouseEnter={event => onMouseHover(event)} onMouseLeave={event => onMouseOut(event)}>{letter}</p>
          })
        }
        
      </div>
    </div>
    </>
  )
}

export default LeftText