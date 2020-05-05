import React, { useState } from 'react'

import Input from './components/Input'
import Output from './components/Output'
import ControllButtons from './components/ControllButtons'

import transform from './utils/transform'

import Style from './App.module.scss'

const App = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  const handleTransform = () => {
    setOutput(transform(input))
  }

  const handleClear = () => {
    setInput('')
    setOutput('')
  }

  return (
    <div className={ Style.container }>
      <Input 
        value={ input }
        setValue={ setInput }
      />

      <ControllButtons 
        handleTransform={ handleTransform }
        handleClear={ handleClear }
      />

      <Output 
        value={ output }
      />
    </div>
  )
}

export default App
