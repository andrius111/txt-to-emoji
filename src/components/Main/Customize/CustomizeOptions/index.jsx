import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { CirclePicker } from 'react-color';
import useWindowDimensions from '../../../../utils/useWindowDimensions.js'
import { 
  MdFormatAlignLeft, 
  MdFormatAlignCenter, 
  MdFormatAlignRight,
  MdVerticalAlignTop,
  MdVerticalAlignCenter,
  MdVerticalAlignBottom
} from "react-icons/md";

import Style from './style.module.scss'

const CustomizeOptions = (props) => {
  const [emojiSize, setEmojiSize] = useState('8')
  const [backgroundColor, setBackgroundColor] = useState('#fff')
  const [horizontalAlign, setHorizontalAlign] = useState('left')
  const [verticalAlign, setVerticalAlign] = useState('top')
  const [outputStyle, setOutputStyle] = useState({})
  const { width } = useWindowDimensions()

  const getBackgroundCircleSize = () => {
    if (!width || isNaN(parseInt(width))) {
      return 17
    }

    let size = 20

    if (width <= 1860)
      size = 18

    if (width <= 1755)
      size = 16

    if (width <= 1600)
      size = 14

    if (width <= 1500)
      size = 12

    if (width <= 1380)
      size = 10

    if (width <= 1260)
      size = 9

    if (width <= 1150)
      size = 20

    if (width <= 440)
      size = 17

    return size
  }

  const handleEmojiSize = (value) => {
    if (isNaN(parseInt(value)) || parseInt(value) > 25 || parseInt(value) < 0) {
      return
    }
        
    let objOutputSyle = Object.assign({}, outputStyle)
    objOutputSyle.fontSize = value + 'px'
    
    setEmojiSize(value)
    setOutputStyle(objOutputSyle)
    props.setOutputStyle(objOutputSyle)
  }

  const handleBackgroundColor = (color) => {
    if (!color.hex) {
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
    
    switch (align) {
      case 'center':
        alignItems = 'center'
        break
      case 'bottom':
        alignItems = 'flex-end'
        break
      default:
        alignItems = 'flex-start'
    }

    let objOutputSyle = Object.assign({}, outputStyle)
    objOutputSyle.alignContent = 'normal'
    objOutputSyle.alignItems = alignItems
      
    setOutputStyle(objOutputSyle)
    setVerticalAlign(align)
    props.setOutputStyle(objOutputSyle)
  }

  const handleReset = () => {
    handleEmojiSize('8')
    handleBackgroundColor('#fff')
    setHorizontalAlign('left')
    setVerticalAlign('top')

    setOutputStyle({})
    props.setOutputStyle({})
    props.handleEmoji('😀')
  }

  return (
    <div className={ Style.cutomize_options_container }>
      <div className={ Style.customize_options_slider_container }>
        Emoji Size

        <input 
          type="range" 
          min="1" 
          max="25" 
          value={ emojiSize }
          className={ Style.customize_options_slider }
          onChange={ (event) => handleEmojiSize(event.target.value) }
        />
      </div>

      <div className={ Style.customize_options_background_container }>
        Background

        <CirclePicker 
          color={ backgroundColor }
          circleSize={ getBackgroundCircleSize() }
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
            size={ 20 } 
            title="Align Horizontal Left"
          />
          
          <MdFormatAlignCenter 
            className={ horizontalAlign === 'center' ? Style.customize_options_align_options_icon_selected : null }
            cursor="pointer"
            onClick={ () => handleHorizontalAlign('center') }
            size={ 20 } 
            title="Align Horizontal Center" 
          />

          <MdFormatAlignRight 
            className={ horizontalAlign === 'right' ? Style.customize_options_align_options_icon_selected : null }
            cursor="pointer"
            onClick={ () => handleHorizontalAlign('right') }
            size={ 20 } 
            title="Align Horizontal Right" 
          />
        </div>

        <div className={ Style.customize_options_vertical_align_options_icons_container }>
          <MdVerticalAlignTop 
            className={ verticalAlign === 'top' ? Style.customize_options_align_options_icon_selected : null }
            cursor="pointer" 
            onClick={ () => handleVerticalAlign('top') }
            size={ 20 } 
            title="Align Vertical Top"
          />
          
          <MdVerticalAlignCenter 
            className={ verticalAlign === 'center' ? Style.customize_options_align_options_icon_selected : null }
            cursor="pointer"
            onClick={ () => handleVerticalAlign('center') }
            size={ 20 } 
            title="Align Vertical Center" 
          />

          <MdVerticalAlignBottom 
            className={ verticalAlign === 'bottom' ? Style.customize_options_align_options_icon_selected : null }
            cursor="pointer"
            onClick={ () => handleVerticalAlign('bottom') }
            size={ 20 } 
            title="Align Vertical Bottom" 
          />
        </div>
      </div>

      <div className={ Style.customize_options_reset_button_container }>
        <button
          className={ Style.customize_options_reset_button } 
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
  handleEmoji: PropTypes.func.isRequired
}

export default CustomizeOptions