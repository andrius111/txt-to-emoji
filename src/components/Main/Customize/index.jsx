import React from 'react'
import PropTypes from 'prop-types'

import EmojiPicker from './EmojiPicker'
import CustomizeOptions from './CustomizeOptions'

import Style from './style.module.scss'

const Customize = (props) => {
  return (
    <div className={ Style.customize_container }>
      <h1>Customize:</h1>

      <div className={ Style.customize_controls_container }>
        <EmojiPicker handleEmoji={ props.handleEmoji } />

        <CustomizeOptions 
          setOutputStyle={ props.setOutputStyle } 
          handleEmoji={ props.handleEmoji }
        />
      </div>
    </div>
  )
}

Customize.propTypes = {
  handleEmoji: PropTypes.func.isRequired,
  setOutputStyle: PropTypes.func.isRequired
}

export default Customize