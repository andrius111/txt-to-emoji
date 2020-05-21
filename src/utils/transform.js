import PropTypes from 'prop-types'

import Characters from './characters'

const transform = (text, emojiPosition) => {
  return (
    text
      .split('')
      .map((character) => {
        if (Characters[character.toUpperCase()]) {
          return Characters[character.toUpperCase()]
            .replace(/0/g, '<span class="emoji-size"></span>')
            .replace(/1/g, '<span class="emoji-size" style="background-image: url(https://unpkg.com/emoji-datasource-apple@5.0.1/img/apple/sheets-256/64.png); background-size: 5700% 5700%; background-position: '+emojiPosition+';"></span>')
        }

        return ''
      })
      .join('')
  )
}

transform.propTypes = {
  text: PropTypes.string.isRequired,
  emojiPosition: PropTypes.string.isRequired
}

export default transform