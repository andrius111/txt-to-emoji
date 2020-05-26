import PropTypes from 'prop-types'

import Characters from './characters'

const transform = (text, emoji) => {
  return (
    text
      .split('')
      .map((character) => {
        if (Characters[character.toUpperCase()]) {
          return Characters[character.toUpperCase()]
            .replace(/0/g, '<span class="emoji-size"></span>')
            .replace(/1/g, '<img class="emoji-size" src="' + emoji + '" alt="Emoji" />')
        }

        return ''
      })
      .join('')
  )
}

transform.propTypes = {
  text: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired
}

export default transform