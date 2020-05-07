import PropTypes from 'prop-types'

import Characters from './characters'

const transform = (text, emoji) => {
  return (
    text
      .split('')
      .map((character) => {
        if (Characters[character.toUpperCase()]) {
          return Characters[character.toUpperCase()].replace(/0/g, '     ').replace(/1/g, emoji)
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