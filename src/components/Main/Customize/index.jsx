import React from 'react'
import PropTypes from 'prop-types'

import EmojiPicker from './EmojiPicker'
import CustomizeOptions from './CustomizeOptions'

import Style from './style.module.scss'

const Customize = (props) => {
  return (
    <div 
      className={ Style.customize_container }
      data-testid="customize-component"
    >
      <h1>Customize:</h1>

      <div className={ Style.customize_controls_container }>
        <EmojiPicker 
          emoji={ props.emoji }
          setEmoji={ props.setEmoji }
        />

        <CustomizeOptions 
          setOutputStyle={ props.setOutputStyle } 
          setEmoji={ props.setEmoji }
        />
      </div>
    </div>
  )
}

Customize.propTypes = {
  emoji: PropTypes.string.isRequired,
  setEmoji: PropTypes.func.isRequired,
  setOutputStyle: PropTypes.func.isRequired
}

export default Customize