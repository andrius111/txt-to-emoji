import React from 'react'
import PropTypes from 'prop-types'
import Parser from 'html-react-parser'

import Style from './style.module.scss'

const Output = (props) => {
  return (
    <div className={ Style.output_container }>
      <h1>Result:</h1>
      
      <div className={ Style.output }>
        { Parser(props.value) }
      </div>
    </div>
  )
}

Output.propTypes = {
  value: PropTypes.string.isRequired
}

export default Output