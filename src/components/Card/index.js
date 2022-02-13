import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import cx from 'classnames'

const Card = ({
  hasBackground,
  buttonComponent,
  headingComponent,
  textComponent,
}) => {
  return (
    <div className={cx(styles.card, hasBackground && styles.background)}>
      <div>
        {headingComponent}
        {textComponent}
      </div>
      <div>{buttonComponent}</div>
    </div>
  )
}

export default Card

Card.propTypes = {
  hasBackground: PropTypes.boolean,
  buttonComponent: PropTypes.node,
  headingComponent: PropTypes.node,
  textComponent: PropTypes.node,
}
