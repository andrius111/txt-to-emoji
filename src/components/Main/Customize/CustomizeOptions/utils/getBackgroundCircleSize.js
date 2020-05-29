import PropTypes from 'prop-types'

const getBackgroundCircleSize = width => {
  if (!width || isNaN(parseInt(width)) || width === 0) {
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
    size = 40

  return size
}

getBackgroundCircleSize.propTypes = {
  width: PropTypes.number.isRequired
}

export default getBackgroundCircleSize