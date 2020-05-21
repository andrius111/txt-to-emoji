import React, { useState } from 'react'
import transform from '../../utils/transform'

import Input from './Input'
import Customize from './Customize'
import Output from './Output'

import Style from './style.module.scss'

const Main = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [emoji, setEmoji] = useState('53.5714% 62.5%')
  const [outputStyle, setOutputStyle] = useState({})

  const handleTransform = (input) => {
    setInput(input)
    setOutput(transform(input, emoji))
  }

  const handleEmoji = (emoji) => {
    let emojiPosition = document.querySelector('[aria-label*="'+ emoji +'"]')
    
    if (!emojiPosition) {
      return
    }
    
    emojiPosition = emojiPosition.children[0].style.backgroundPosition

    setEmoji(emojiPosition)
    setOutput(transform(input, emojiPosition))
  }

  return (
    <main 
      className={ Style.main_container }
      data-testid="main-component"
    >    
      <Input setValue={ handleTransform } />

      <Customize 
        handleEmoji={ handleEmoji }
        setOutputStyle={ setOutputStyle } 
      />

      <Output 
        value={ output } 
        style={ outputStyle } 
      />
    </main>
  )
}

export default Main