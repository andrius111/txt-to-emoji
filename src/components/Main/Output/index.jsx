import React from 'react'
import PropTypes from 'prop-types'
import Parser from 'html-react-parser'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import html2canvas from 'html2canvas'

import Style from './style.module.scss'

const Output = props => {
  const handleDownload = () => {
    html2canvas(
      document.querySelector('[data-testid=output-div]'), { 
        backgroundColor: null, 
        scale: 3 
    }).then(canvas => {
      const link = document.createElement('a')
      link.download = 'txt-to-emoji'
      link.href = canvas.toDataURL('image/png')
      link.click()
    })
  }

  return (
    <div 
      className={ Style.output_container }
      data-testid="output-component"
    >
      <h1>Enjoy the result:</h1>
      
      <div 
        className={ Style.output + ' ' + props.emojiSizeClass } 
        data-testid="output-div"
        style={ props.style }
      >
        <div className={ Style.output_overlay }>
          <AiOutlineCloudDownload 
            color="white"
            cursor="pointer"
            onClick={ () => handleDownload() }
            size={ 60 }
            title="Download"
          />
        </div>

        { Parser(props.value) }
      </div>
    </div>
  )
}

Output.propTypes = {
  value: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
  emojiSizeClass: PropTypes.string.isRequired
}

export default Output