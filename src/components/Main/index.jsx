import React, { useState } from 'react'
import transform from '../../utils/transform'

import Input from './Input'
import Output from './Output'
import EmojiPicker from './EmojiPicker'

import Style from './style.module.scss'

const Main = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [emoji, setEmoji] = useState('😀')

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
      <EmojiPicker handleEmoji={ handleEmoji } />
      <Output value={ output } />
    </main>
  )
}

export default Main