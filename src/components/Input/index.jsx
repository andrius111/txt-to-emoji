import React from 'react'
import PropTypes from 'prop-types'

import Style from './style.module.scss'

const Input = (props) => {
  return (
    <div className={ Style.input_container }>
      <h1>Insert your text:</h1>
      
      <textarea 
        className={ Style.input }
        onKeyPress={ (event) => event.which === 13 ? event.preventDefault() : null }
        onChange={ (event) => props.setValue(event.target.value) }
      />
    </div>
  )
}

Input.propTypes = {
  setValue: PropTypes.func.isRequired
}

export default Input