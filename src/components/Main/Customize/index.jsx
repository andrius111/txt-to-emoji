import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { CirclePicker } from 'react-color';

import Style from './style.module.scss'

const Customize = (props) => {
  const [emojiSize, setEmojiSize] = useState('8')
  const [backgroundColor, setBackgroundColor] = useState('#fff')
  
  let outputStyle = {
    fontSize: emojiSize + 'px',
    backgroundColor: backgroundColor
  }

  const handleEmojiSize = (value) => {
    /*testar se o valor é valido*/
    setEmojiSize(value)
    outputStyle['fontSize'] = value + 'px'

    setStyle()
  }

  const handleBackgroundColor = (color) => {
    /*testar se o valor é valido*/
    setBackgroundColor(color.hex)
    outputStyle['backgroundColor'] = color.hex

    setStyle()
  }

  const setStyle = () => {
    props.setOutputStyle(outputStyle)
  }

  const handleReset = () => {
    handleEmojiSize('8')
    handleBackgroundColor('#fff')
  }

  return (
    <div className={ Style.customize_container }>
      <div className={ Style.customize_slider_container }>
        Emoji Size

        <input 
          type="range" 
          min="1" 
          max="25" 
          value={ emojiSize }
          className={ Style.customize_slider }
          onChange={ (event) => handleEmojiSize(event.target.value) }
        />
      </div>

      <div className={ Style.customize_background_container }>
        Background

        <CirclePicker 
          color={ backgroundColor }
          circleSize={ 10 }
          circleSpacing={ 9 }
          onChangeComplete={ handleBackgroundColor }
          width="100%" 
        />
      </div>

      <div className={ Style.customize_reset_button_container }>
        <button
          className={ Style.customize_reset_button } 
          onClick={ handleReset }
        >
          Reset
        </button>
      </div>
    </div>
  )
}

Customize.propTypes = {
  setOutputStyle: PropTypes.func.isRequired
}

export default Customize