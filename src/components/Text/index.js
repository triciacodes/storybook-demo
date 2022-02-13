import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import cx from 'classnames'

const Text = ({ color, size = 'small', text }) => {
  return <p className={cx(styles[size], styles[color])}>{text}</p>
}

export default Text

Text.propTypes = {
  color: PropTypes.oneOf(['black', 'gray']),
  size: PropTypes.oneOf(['small', 'medium']),
  text: PropTypes.string.isRequired,
}
