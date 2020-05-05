import Letters from './letters'

const transform = (text) => {
  return (
    text
      .split('')
      .map((letter) => {
        if (Letters[letter.toUpperCase()]) {
          return Letters[letter.toUpperCase()].replace(/0/g, '     ').replace(/1/g, '&#128525;')
        }
        
        return letter
      })
      .join('')
  )
}

export default transform