import React from 'react'

import Logo from '../../assets/logo.png'
import Style from './style.module.scss'

const Header = () => {
  return (
    <header className={ Style.header_container }>
      <img 
        className={ Style.logo }
        src={ Logo } 
        alt="txt-to-emoji logo"
      />
    </header>
  )
}

export default Header