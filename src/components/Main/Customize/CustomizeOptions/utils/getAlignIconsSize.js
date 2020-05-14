import PropTypes from 'prop-types'

const getAlignIconsSize = (width) => {
  if (!width || isNaN(parseInt(width)) || width === 0) {
    return 20
  }

  if (width <= 1150) {
    return 40
  }

  return 20
}

getAlignIconsSize.propTypes = {
  width: PropTypes.number.isRequired
}

export default getAlignIconsSize