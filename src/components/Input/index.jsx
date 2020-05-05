import React from 'react'
import PropTypes from 'prop-types'

import Style from './style.module.scss'

const Input = (props) => {
  return (
    <React.Fragment>
      <h1>Input</h1>
      
      <textarea 
        className={ Style.input }
        onChange={ (event) => props.setValue(event.target.value) }
        value={ props.value }
      />
    </React.Fragment>
  )
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired
}

export default Input