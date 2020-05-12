import React, { useState } from 'react'
import transform from '../../utils/transform'

import Input from './Input'
import Customize from './Customize'
import Output from './Output'

import Style from './style.module.scss'

const Main = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [emoji, setEmoji] = useState('😀')
  const [outputStyle, setOutputStyle] = useState({})

  const handleTransform = (input) => {
    setInput(input)
    setOutput(transform(input, emoji))
  }

  const handleEmoji = (emoji) => {
    setEmoji(emoji)
    setOutput(transform(input, emoji))
  }

  return (
    <main className={ Style.main_container }>    
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