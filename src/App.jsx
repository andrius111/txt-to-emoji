import React, { useState } from 'react'
import transform from './utils/transform'

import Input from './components/Input'
import Output from './components/Output'
import ControllButtons from './components/ControllButtons'

import Style from './App.module.scss'

const App = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  const handleTransform = (input) => {
    setInput(input)
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
        setValue={ handleTransform }
      />

      <ControllButtons 
        handleClear={ handleClear }
      />

      <Output 
        value={ output }
      />
    </div>
  )
}

export default App
