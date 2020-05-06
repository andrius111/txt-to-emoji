import Characters from './characters'

const transform = (text) => {
  return (
    text
      .split('')
      .map((character) => {
        if (Characters[character.toUpperCase()]) {
          return Characters[character.toUpperCase()].replace(/0/g, '     ').replace(/1/g, '&#128525;')
        }

        return ''
      })
      .join('')
  )
}

export default transform