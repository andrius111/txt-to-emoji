import React from 'react'
import PropTypes from 'prop-types'

import Style from './style.module.scss'

const ControllButtons = (props) => {
  return (
    <div className={ Style.tranform_button_container }>
      <button 
        className={ Style.button }
        onClick={ props.handleClear }
      >
        Clear
      </button>
    </div>
  )
}

ControllButtons.propTypes = {
  handleClear: PropTypes.func.isRequired
}

export default ControllButtons