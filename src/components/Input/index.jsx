import React from 'react'
import PropTypes from 'prop-types'

import Style from './style.module.scss'

const Input = (props) => {
  return (
    <div className={ Style.input_container }>
      <h1>Insert your text bellow:</h1>
      
      <textarea 
        className={ Style.input }
        onChange={ (event) => props.setValue(event.target.value) }
        value={ props.value }
      />
    </div>
  )
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired
}

export default Input