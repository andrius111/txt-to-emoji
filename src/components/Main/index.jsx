import React, { useState, useEffect } from 'react'
import transform from '../../utils/transform'

import Input from './Input'
import Customize from './Customize'
import Output from './Output'

import SlightlySmiling from '../../assets/emojis/SlightlySmiling.png'
import Style from './style.module.scss'

const Main = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [emoji, setEmoji] = useState(SlightlySmiling)
  const [outputStyle, setOutputStyle] = useState({})

  useEffect(() => {
    setOutput(transform(input, emoji))
  }, [input, emoji])

  return (
    <main 
      className={ Style.main_container }
      data-testid="main-component"
    >    
      <Input setInput={ setInput } />

      <Customize
        emoji={ emoji } 
        setEmoji={ setEmoji }
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