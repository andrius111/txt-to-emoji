import React from 'react'
import PropTypes from 'prop-types'

import 'emoji-mart/css/emoji-mart.css'
import { Picker,  } from 'emoji-mart'

import Style from './style.module.scss'

const EmojiPicker = (props) => {
  return (
    <div className={ Style.emoji_picker_container }>
      <h1>Select the emoji:</h1>

      <Picker 
        style={{ width: '90%', height: '430px', marginTop: '20px', borderRadius: '15px' }} 
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