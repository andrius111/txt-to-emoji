import React from 'react'
import PropTypes from 'prop-types'
import Parser from 'html-react-parser'

import Style from './style.module.scss'

const Output = (props) => {
  return (
    <React.Fragment>
      <h1>Output</h1>
      
      <div className={ Style.output }>
        { Parser(props.value) }
      </div>
    </React.Fragment>
  )
}

Output.propTypes = {
  value: PropTypes.string.isRequired
}

export default Output