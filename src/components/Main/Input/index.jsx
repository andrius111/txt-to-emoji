import React from 'react'
import PropTypes from 'prop-types'

import Style from './style.module.scss'

const Input = (props) => {
  return (
    <div 
      className={ Style.input_container }
      data-testid="input-component"
    >
      <h1>Insert your text:</h1>
      
      <textarea 
        className={ Style.input }
        data-testid="input-textarea"
        onKeyPress={ (event) => event.which === 13 ? event.preventDefault() : null }
        onChange={ (event) => props.setInput(event.target.value) }
      />
    </div>
  )
}

Input.propTypes = {
  setInput: PropTypes.func.isRequired
}

export default Input