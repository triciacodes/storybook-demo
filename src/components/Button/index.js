import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import cx from 'classnames'

const Button = ({
  isDisabled,
  label,
  onClick,
  size = 'small',
  variant = 'primary',
}) => {
  if (!label) return null

  return (
    <button
      className={cx(styles.button, styles[size], styles[variant])}
      onClick={onClick}
      disabled={isDisabled}
    >
      {label}
    </button>
  )
}

export default Button

Button.propTypes = {
  isDisabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['primary', 'secondary']),
}
