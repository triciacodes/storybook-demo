import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import cx from 'classnames'

const Avatar = ({ altText, size = 'small', url }) => {
  return (
    <img className={cx(styles.avatar, styles[size])} src={url} alt={altText} />
  )
}

export default Avatar

Avatar.propTypes = {
  alt: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  url: PropTypes.string.isRequired,
}
