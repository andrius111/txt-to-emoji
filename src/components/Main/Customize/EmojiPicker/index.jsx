import React from 'react'
import PropTypes from 'prop-types'
import { Picker } from 'emoji-mart'

import 'emoji-mart/css/emoji-mart.css'
import Style from './style.module.scss'

const EmojiPicker = (props) => {
  return (
    <div className={ Style.emoji_picker_container }>
      Select the emoji

      <Picker 
        style={{ width: '100%', borderRadius: '15px', height: '420px', border: '0' }} 
        title="" 
        emoji=""
        onSelect={ (emoji) => props.handleEmoji(emoji.native) }
      />
    </div>
  )
}

EmojiPicker.propTypes = {
  handleEmoji: PropTypes.func.isRequired
}

export default EmojiPicker