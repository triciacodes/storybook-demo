import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import cx from 'classnames'

const Button = ({
  backgroundColor,
  isDisabled,
  label,
  onClick,
  size = 'small',
  variant = 'primary',
}) => {
  return (
    <button
      className={cx(styles.button, styles[size], styles[variant])}
      style={{
        backgroundColor: backgroundColor,
        border: `1px solid ${backgroundColor}`,
      }}
      onClick={onClick}
      disabled={isDisabled}
    >
      {label}
    </button>
  )
}

export default Button

Button.propTypes = {
  backgroundColor: PropTypes.string,
  isDisabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
  variant: PropTypes.oneOf(['primary', 'secondary']),
}
