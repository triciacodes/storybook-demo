import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import cx from 'classnames'

const NewComponent = ({ text }) => {
  return <div className={cx(styles.container)}>{text}</div>
}

export default NewComponent

NewComponent.propTypes = {
  text: PropTypes.string,
}
