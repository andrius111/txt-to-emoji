import React from 'react'
import PropTypes from 'prop-types'
import { Picker } from 'emoji-mart'
import useWindowDimensions from '../../../../utils/useWindowDimensions.js'

import 'emoji-mart/css/emoji-mart.css'
import Style from './style.module.scss'

const EmojiPicker = (props) => {
  const { width } = useWindowDimensions()

  const getEmojiSize = () => {
    if (!width || isNaN(parseInt(width))) {
      return 24
    }

    if (width <= 1150) {
      return 45
    }

    return 24
  }

  return (
    <div 
      className={ Style.emoji_picker_container }
      data-testid="emoji-picker-component"
    >
      Select the emoji

      <Picker 
        style={{ width: '100%', borderRadius: '15px', height: '420px', border: '0' }} 
        title="" 
        emoji=""
        onSelect={ (emoji) => props.handleEmoji(emoji.native) }
        emojiSize={ getEmojiSize() }
      />
    </div>
  )
}

EmojiPicker.propTypes = {
  handleEmoji: PropTypes.func.isRequired
}

export default EmojiPicker