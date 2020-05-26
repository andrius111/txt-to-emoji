import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { CirclePicker } from 'react-color';
import useWindowDimensions from '../../../../utils/useWindowDimensions.js'
import getAlignIconsSize from './utils/getAlignIconsSize'
import getBackgroundCircleSize from './utils/getBackgroundCircleSize'
import { 
  MdFormatAlignLeft, 
  MdFormatAlignCenter, 
  MdFormatAlignRight,
  MdVerticalAlignTop,
  MdVerticalAlignCenter,
  MdVerticalAlignBottom
} from "react-icons/md";

import SlightlySmiling from '../../../../assets/emojis/SlightlySmiling.png'
import Style from './style.module.scss'

const CustomizeOptions = (props) => {
  const [emojiSize, setEmojiSize] = useState('8')
  const [backgroundColor, setBackgroundColor] = useState('#fff')
  const [horizontalAlign, setHorizontalAlign] = useState('left')
  const [verticalAlign, setVerticalAlign] = useState('top')
  const [outputStyle, setOutputStyle] = useState({})
  const { width } = useWindowDimensions()

  const handleEmojiSize = (value) => {
    if (isNaN(parseInt(value)) || parseInt(value) > 25 || parseInt(value) < 0) {
      return
    }
        
    setEmojiSize(value)

    const emojis = document.querySelectorAll('.emoji-size')

    if (emojis) {
      emojis.forEach(emoji => {
        emoji.style.width = value + 'px'
        emoji.style.height = value + 'px'
      })
    }
  }

  const handleBackgroundColor = (color) => {
    if (!color) {
      return
    }

    let objOutputSyle = Object.assign({}, outputStyle)
    objOutputSyle.backgroundColor = color.hex
    
    setBackgroundColor(color.hex)
    setOutputStyle(objOutputSyle)
    props.setOutputStyle(objOutputSyle)
  }

  const handleHorizontalAlign = (align) => {
    if (!align) {
      return
    }

    let justifyContent = ''
    
    switch (align) {
      case 'center':
        justifyContent = 'center'
        break
      case 'right':
        justifyContent = 'flex-end'
        break
      default:
        justifyContent = 'flex-start'
    }

    let objOutputSyle = Object.assign({}, outputStyle)
    objOutputSyle.justifyContent = justifyContent
      
    setOutputStyle(objOutputSyle)
    setHorizontalAlign(align)
    props.setOutputStyle(objOutputSyle)
  }

  const handleVerticalAlign = (align) => {
    if (!align) {
      return
    }

    let alignItems = ''
    let alignContent = 'normal'
    
    switch (align) {
      case 'center':
        alignItems = 'center'
        alignContent = 'center'
        break
      case 'bottom':
        alignItems = 'flex-end'
        alignContent = 'flex-end'
        break
      default:
        alignItems = 'flex-start'
        alignContent = 'flex-start'
    }

    let objOutputSyle = Object.assign({}, outputStyle)
    objOutputSyle.alignContent = alignContent
    objOutputSyle.alignItems = alignItems
      
    setOutputStyle(objOutputSyle)
    setVerticalAlign(align)
    props.setOutputStyle(objOutputSyle)
  }

  const handleReset = () => {
    handleEmojiSize('9')
    handleBackgroundColor('#fff')
    setHorizontalAlign('left')
    setVerticalAlign('top')

    setOutputStyle({})
    props.setOutputStyle({})
    props.setEmoji(SlightlySmiling)
  }

  return (
    <div 
      className={ Style.cutomize_options_container }
      data-testid="customize-options-component"
    >
      <div className={ Style.customize_options_slider_container }>
        Emoji Size

        <input 
          className={ Style.customize_options_slider }
          data-testid="input-emoji-size"
          max="25" 
          min="1" 
          onChange={ (event) => handleEmojiSize(event.target.value) }
          type="range" 
          value={ emojiSize }
        />
      </div>

      <div className={ Style.customize_options_background_container }>
        Background

        <CirclePicker 
          color={ backgroundColor }
          circleSize={ getBackgroundCircleSize(width || 0) }
          circleSpacing={ 11 }
          onChangeComplete={ handleBackgroundColor }
          width="100%" 
        />
      </div>

      <div className={ Style.customize_options_align_options_container }>
        Align

        <div className={ Style.customize_options_align_options_icons_container }>
          <MdFormatAlignLeft 
            className={ horizontalAlign === 'left' ? Style.customize_options_align_options_icon_selected : null }
            cursor="pointer" 
            onClick={ () => handleHorizontalAlign('left') }
            size={ getAlignIconsSize(width || 0) } 
            title="Align Horizontal Left"
          />
          
          <MdFormatAlignCenter 
            className={ horizontalAlign === 'center' ? Style.customize_options_align_options_icon_selected : null }
            cursor="pointer"
            onClick={ () => handleHorizontalAlign('center') }
            size={ getAlignIconsSize(width || 0) } 
            title="Align Horizontal Center" 
          />

          <MdFormatAlignRight 
            className={ horizontalAlign === 'right' ? Style.customize_options_align_options_icon_selected : null }
            cursor="pointer"
            onClick={ () => handleHorizontalAlign('right') }
            size={ getAlignIconsSize(width || 0) } 
            title="Align Horizontal Right" 
          />
        </div>

        <div className={ Style.customize_options_vertical_align_options_icons_container }>
          <MdVerticalAlignTop 
            className={ verticalAlign === 'top' ? Style.customize_options_align_options_icon_selected : null }
            cursor="pointer" 
            onClick={ () => handleVerticalAlign('top') }
            size={ getAlignIconsSize(width || 0) } 
            title="Align Vertical Top"
          />
          
          <MdVerticalAlignCenter 
            className={ verticalAlign === 'center' ? Style.customize_options_align_options_icon_selected : null }
            cursor="pointer"
            onClick={ () => handleVerticalAlign('center') }
            size={ getAlignIconsSize(width || 0) } 
            title="Align Vertical Center" 
          />

          <MdVerticalAlignBottom 
            className={ verticalAlign === 'bottom' ? Style.customize_options_align_options_icon_selected : null }
            cursor="pointer"
            onClick={ () => handleVerticalAlign('bottom') }
            size={ getAlignIconsSize(width || 0) } 
            title="Align Vertical Bottom" 
          />
        </div>
      </div>

      <div className={ Style.customize_options_reset_button_container }>
        <button
          className={ Style.customize_options_reset_button } 
          data-testid="button-reset"
          onClick={ handleReset }
        >
          Reset
        </button>
      </div>
    </div>
  )
}

CustomizeOptions.propTypes = {
  setOutputStyle: PropTypes.func.isRequired,
  setEmoji: PropTypes.func.isRequired
}

export default CustomizeOptions