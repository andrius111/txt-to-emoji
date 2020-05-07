import React, { useState } from 'react'
import transform from './utils/transform'

import Input from './components/Input'
import Output from './components/Output'
import EmojiPicker from './components/EmojiPicker'

import Style from './App.module.scss'

const App = () => {
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
    <React.Fragment>
      <header className={ Style.header }>
        Text to emoji
      </header>

      <main className={ Style.container }>    
        <Input setValue={ handleTransform } />

        <EmojiPicker handleEmoji={ handleEmoji } />

        <Output value={ output } />
      </main>

      <footer className={ Style.footer }>
        Made with ☕ by Andrius Martini
      </footer>
    </React.Fragment>
  )
}

export default App
