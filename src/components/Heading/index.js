import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import cx from 'classnames'

const Heading = ({ color, size = 'small', text }) => {
  return <h1 className={cx(styles[size], styles[color])}>{text}</h1>
}

export default Heading

Heading.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  text: PropTypes.string.isRequired,
}
