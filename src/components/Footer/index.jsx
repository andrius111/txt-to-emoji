import React from 'react'
import { Emoji } from 'emoji-mart'

import Style from './style.module.scss'

const Footer = () => {
  return (
    <footer 
      className={ Style.footer }
      data-testid="footer-component"
    > 
      Made with 
      
      <Emoji 
        emoji="coffee" 
        size={ 30 } 
      />

      by

      <a 
        href="https://github.com/andrius111"
        target="_blank"
        rel="noopener noreferrer"
        title="Visit my GitHub"
      >
        Andrius Martini
      </a>

      <Emoji 
        emoji="rocket" 
        size={ 30 } 
      />
    </footer>
  )
}

export default Footer